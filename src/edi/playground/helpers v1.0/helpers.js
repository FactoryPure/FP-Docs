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
    return data.split(lineSeparator).filter(l => l.length)
}
export const getElements = (line, separator) => {
    const elements = line.split(separator)
    const segmentType = elements[0]
    return Object.fromEntries(elements.map((el, index) => [`${segmentType}` + `0${index}`.slice(-2), el]))
}