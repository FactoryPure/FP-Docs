export const syncCatcher = (fn) => {
    try {
        const data = fn()
        return [data, null]
    } catch (err) {
        return [null, err]
    }
}

export const getTransactionType = (data) => {
    try {
        const { elementDelimiter, lineTerminator } = getDelimiters(data)
        const segments = data.split(lineTerminator)
        const elements = segments[2].split(elementDelimiter)
        return elements[1]
    } catch (err) {
        return null
    }
}

export const getDelimiters = (data) => {
    const elementDelimiter = data[103]
    const compositeDelimiter = data[104]
    const lineTerminator = data[105]
    return { elementDelimiter, compositeDelimiter, lineTerminator }
}

export const getSegments = (data, lineSeparator) => {
    return data.split(lineSeparator).filter((l) => l.length)
}

export const getElements = (line, separator) => {
    const elements = line.split(separator)
    const segmentType = elements[0]
    return Object.fromEntries(elements.map((el, index) => [`${segmentType}` + `0${index}`.slice(-2), el]))
}
export const trimLeadingZeros = (str) => {
    if (!str || typeof str !== "string") {
        return null
    }
    let startIdx = 0
    while (str[startIdx] == "0") {
        startIdx++
    }
    return str.substring(startIdx)
}
export const validateEDIParserResult = (object, model, map, documentType) => {
    if (!object || !model || !documentType || !map) {
        return [
            {},
            [
                {
                    segment: "UNKNOWN",
                    position: 0,
                    message: "Validator must include object, model, map, and documentType!",
                },
            ],
        ]
    }

    const errors = []
    const conditionals = {}
    try {
        check(object, model, map, documentType, errors, conditionals)
    } catch (err) {
        console.error(err)
        errors.push({
            segment: "UNKNOWN",
            position: 0,
            message: "Invalid input!",
        })
        return [{}, errors]
    }
    const unSatisfiedConditionals = Object.entries(conditionals).filter(([key, val]) => val.status === "NOT SATISFIED")
    for (let condition of unSatisfiedConditionals) {
        const [key, information] = condition
        const { segment, positions, elementList } = information
        errors.push({
            segment,
            position: `${Array.from(positions).join(", ")}`,
            message: `Must include at least one of ${Array.from(elementList).join(", ")}`,
        })
    }

    return [object, errors]
}

function check(object, model, map, path, errors, conditionals) {
    // BASE CASE
    if (typeof model !== "object") {
        // CONDITIONAL CHECKER
        if (model.substring(0, 1) === "C") {
            const type = model.substring(1)
            const currentElement = path.split(".").slice(-1)[0]
            const currentElementParent = path.split(".").slice(-2)[0]
            const { segment, position } = getSegmentAndElement(map, path)
            if (!conditionals[currentElementParent]) {
                conditionals[currentElementParent] = {
                    segment,
                    positions: new Set([position]),
                    elementList: [],
                    status: "NOT SATISFIED",
                }
            }
            conditionals[currentElementParent].elementList.push(currentElement)
            conditionals[currentElementParent].positions.add(position)
            if ((object || object === false || object === 0) && typeof object === type) {
                conditionals[currentElementParent].status = "SATISFIED"
            } else if ((object || object === false || object === 0) && typeof object !== type) {
                errors.push({
                    segment,
                    position,
                    message: `Field ${path} must be of type ${type}.`,
                })
            }
            return
        }
        // REGULAR CHECKER
        const required = model.substring(0, 1) === "!"
        const type = model.substring(1)
        if (required && object !== false && object !== 0 && !object) {
            const { segment, position } = getSegmentAndElement(map, path)
            errors.push({
                segment,
                position,
                message: `Required field ${path} is missing from parsed EDI document.`,
            })
        } else if ((object || object === false || object === 0) && typeof object !== type) {
            const { segment, position } = getSegmentAndElement(map, path)
            errors.push({
                segment,
                position,
                message: `Field ${path} must be of type ${type}.`,
            })
        }
        return
    }

    // ARRAY CASE
    if (Array.isArray(model)) {
        return check(object, model[0], map, `${path}`, errors, conditionals)
    }

    // OBJECT CASE
    const keys = Object.keys(model)
    for (let key of keys) {
        const optionalField = key.includes("?")
        const modelField = model[key]
        if (key.includes("?")) {
            key = key.substring(1)
        }
        const objectField = object[key]
        if (optionalField && objectField !== false && objectField !== 0 && !objectField) {
            continue
        }
        if (Array.isArray(modelField)) {
            if (!Array.isArray(objectField)) {
                const { segment, position } = getSegmentAndElement(map, `${path}.${key}`)
                errors.push({
                    segment,
                    position,
                    message: `Required array ${path}.${key} is missing from parsed EDI document.`,
                })
            } else {
                for (let i = 0; i < objectField.length; i++) {
                    const arrayObjectField = objectField[i]
                    check(arrayObjectField, modelField, map, `${path}.${key}[${i}]`, errors, conditionals)
                }
            }
        } else if (typeof modelField === "object") {
            if (typeof objectField !== "object") {
                const { segment, position } = getSegmentAndElement(map, `${path}.${key}`)
                errors.push({
                    segment,
                    position,
                    message: `Required object ${path}.${key} is missing from parsed EDI document.`,
                })
            } else {
                check(objectField, modelField, map, `${path}.${key}`, errors, conditionals)
            }
        } else {
            check(objectField, modelField, map, `${path}.${key}`, errors, conditionals)
        }
    }
}

function getSegmentAndElement(map, path) {
    const pathArray = path.split(".").slice(1)
    let mapVal = JSON.parse(JSON.stringify(map))
    for (let pathKey of pathArray) {
        if (pathKey.includes("[")) {
            mapVal = mapVal[pathKey.split("[")[0]]
        } else {
            mapVal = mapVal[pathKey]
        }
    }
    return mapVal
}
