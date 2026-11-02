import { HashLink } from "react-router-hash-link"
import {
    REQUIREMENT_SHORT,
    formatRepeat,
    getConditionalPositions,
    getElementRequirement,
    getSegmentLink,
} from "./specTree"

const USAGE_GRID = "grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]"
const ELEMENT_GRID = "grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]"
const ROW = "text-offwhite col-span-full pb-[4px] mb-[8px] border-b border-darkgrey"

export function SegmentNotes({ segment }) {
    const link = getSegmentLink(segment.name)
    if (link) {
        return (
            <HashLink className="text-[14px] underline" to={link.to}>
                {link.label}
            </HashLink>
        )
    }
    return <div>{segment.notes || ""}</div>
}

function Codes({ codes }) {
    if (!codes || codes.length === 0) return <div></div>
    return (
        <div>
            {codes.map((code, idx) => (
                <span key={code.code} title={code.description}>
                    {code.code}
                    {idx < codes.length - 1 ? ", " : ""}
                </span>
            ))}
        </div>
    )
}

export default function SegmentRenderer({ segment, rules = {} }) {
    const segmentRules = (rules[segment.name] || []).filter((rule) => !rule.when?.segment || rule.when.segment === segment.name)
    const conditionalPositions = getConditionalPositions(segmentRules)

    return (
        <div id={segment.anchorId} className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">
                {segment.name} Segment{segment.description ? ` - ${segment.description}` : ""}
            </h2>
            {segment.purpose && <p className="text-offwhite mb-[16px]">{segment.purpose}</p>}
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Usage</p>
            <div className={`text-offwhite ${USAGE_GRID} mb-[32px]`}>
                <div className={`font-bold text-[12px] uppercase ${USAGE_GRID} ${ROW}`}>
                    <div>Id</div>
                    <div>Segment Name</div>
                    <div>Req</div>
                    <div>Max Use</div>
                    <div>Loop</div>
                    <div>Notes</div>
                </div>
                <div className={`${USAGE_GRID} ${ROW}`}>
                    <div>{segment.name}</div>
                    <div>{segment.description || segment.name}</div>
                    <div>{REQUIREMENT_SHORT[segment.required] || segment.required}</div>
                    <div>{formatRepeat(segment.maxUse)}</div>
                    <div>{segment.loopName}</div>
                    <SegmentNotes segment={segment} />
                </div>
            </div>
            {segment.elements && segment.elements.length > 0 && (
                <>
                    <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Elements</p>
                    <div className={`text-offwhite ${ELEMENT_GRID} mb-[32px]`}>
                        <div className={`font-bold text-[12px] uppercase ${ELEMENT_GRID} ${ROW}`}>
                            <div>Ref</div>
                            <div>ID</div>
                            <div>Element Name</div>
                            <div>Req</div>
                            <div>Type</div>
                            <div>Min/max</div>
                            <div>Codes</div>
                        </div>
                        {segment.elements.map((el) => (
                            <div key={el.position} className={`${ELEMENT_GRID} ${ROW}`}>
                                <div>{`${segment.name}${String(el.position).padStart(2, "0")}`}</div>
                                <div>{el.element?.id || ""}</div>
                                <div>{el.element?.name || ""}</div>
                                <div>{getElementRequirement(el, conditionalPositions)}</div>
                                <div>{el.element?.type || ""}</div>
                                <div>
                                    {el.element?.minLength ?? ""}/{el.element?.maxLength ?? ""}
                                </div>
                                <Codes codes={el.codes || el.element?.codes} />
                                {el.notes && (
                                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">{el.notes}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
            {segmentRules.length > 0 && (
                <>
                    <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Conditional Requirements</p>
                    <div className="text-offwhite grid grid-cols-[1fr] gap-y-[8px] mb-[32px]">
                        {segmentRules.map((rule) => (
                            <div key={rule.id} className="flex items-start gap-[8px] pb-[8px] border-b border-darkgrey">
                                <span
                                    className={`text-[12px] font-bold uppercase px-[6px] py-[2px] rounded-[2px] ${
                                        rule.severity === "ERROR"
                                            ? "bg-red-500/20 text-red-400"
                                            : "bg-yellow-500/20 text-yellow-400"
                                    }`}
                                >
                                    {rule.severity}
                                </span>
                                <span className="text-[14px]">{rule.message}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
