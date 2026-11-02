export const REQUIREMENT_SHORT = {
    MANDATORY: "M",
    OPTIONAL: "O",
    CONDITIONAL: "C",
    UNUSED: "X",
}

const ENVELOPE_LOOPS = ["ISA", "GS", "ST"]

const SEGMENT_LINKS = {
    ISA: { to: "/edi#ids", label: "Sender/Receiver ID Info" },
    GS: { to: "/edi#ids", label: "Sender/Receiver ID Info" },
}

export function getSegmentLink(segmentName) {
    return SEGMENT_LINKS[segmentName]
}

export function formatRepeat(count) {
    if (count === undefined || count === null) return ""
    return count > 1000 ? ">1" : String(count)
}

function slugify(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
}

/**
 * Decorates the raw spec tree with what the docs need: unique anchor ids (segments such as
 * REF, N1 and HL appear more than once), the enclosing loop, and the max use of each segment.
 * ISA, GS and ST are modeled as loops for parsing but render as plain envelope segments.
 */
export function annotateSpec(spec) {
    const usedIds = {}
    const uniqueId = (base) => {
        usedIds[base] = (usedIds[base] || 0) + 1
        return usedIds[base] === 1 ? base : `${base}-${usedIds[base]}`
    }

    const walk = (items, parentLoop) =>
        items.map((item) => {
            if (item.type === "loop") {
                const isEnvelope = ENVELOPE_LOOPS.includes(item.name)
                const loop = {
                    ...item,
                    isEnvelope,
                    label: item.description ? `${item.name} Loop (${item.description})` : `${item.name} Loop`,
                    anchorId: isEnvelope
                        ? null
                        : uniqueId(slugify(item.description ? `${item.name}-${item.description}-loop` : `${item.name}-loop`)),
                }
                loop.items = walk(item.items || [], isEnvelope ? parentLoop : loop)
                return loop
            }
            return {
                ...item,
                anchorId: uniqueId(item.name.toLowerCase()),
                loopName: !parentLoop
                    ? ""
                    : parentLoop.description
                    ? `${parentLoop.name} (${parentLoop.description})`
                    : parentLoop.name,
                maxUse: parentLoop?.isRepeatingSegment ? parentLoop.repeatMaximum : 1,
            }
        })

    return walk(spec, null)
}

export function flattenSegments(items, result = []) {
    for (const item of items) {
        if (item.type === "loop") flattenSegments(item.items || [], result)
        else if (item.type === "segment") result.push(item)
    }
    return result
}

/** Element positions that a segment rule can make required, displayed as "C" when otherwise optional. */
export function getConditionalPositions(segmentRules = []) {
    const positions = new Set()
    for (const rule of segmentRules) {
        for (const list of [rule.when?.oneOfElements, rule.then?.requireElements, rule.then?.requireAtLeastOneElement]) {
            for (const position of list || []) positions.add(position)
        }
    }
    return positions
}

export function getElementRequirement(specElement, conditionalPositions) {
    if (specElement.required === "OPTIONAL" && conditionalPositions.has(specElement.position)) return "C"
    return REQUIREMENT_SHORT[specElement.required] || specElement.required
}
