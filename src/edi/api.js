const EDI_API_BASE = process.env.REACT_APP_EDI_API_URL || "https://as2.fpdash.com/edi"

async function getData(path, errorMessage) {
    const res = await fetch(`${EDI_API_BASE}${path}`)
    if (!res.ok) throw new Error(errorMessage)
    const json = await res.json()
    return json.data
}

export function fetchSpec(transactionType) {
    return getData(`/spec/${transactionType}`, `Failed to fetch spec for ${transactionType}`)
}

export function fetchRules() {
    return getData("/rules", "Failed to fetch rules")
}
