import { getDelimiters, getElements, getSegments, trimLeadingZeros } from "./helpers.js"
import * as EDIMaps from "./EDICodeMaps"

export function read810 (data) {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)

    const invoices = []
    const interchangeInfo = {}
    let currentInvoice = null
    let currentShippingParty
    let currentLineItem = {}
    let errorLocation
    try {
        for (let line of lines) {
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]   
            errorLocation = segment  
            if (segment === "ISA") {
                interchangeInfo.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                interchangeInfo.senderQualifier = elements.ISA05
                interchangeInfo.senderID = elements.ISA06
                interchangeInfo.receiverQualifier = elements.ISA07
                interchangeInfo.receiverID = elements.ISA08
                interchangeInfo.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                )).toISOString()
                interchangeInfo.isTest = elements.ISA15 === "T"
                interchangeInfo.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                interchangeInfo.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                if (currentInvoice) {
                    invoices.push({
                        ...interchangeInfo,
                        ...currentInvoice
                    })
                }
                currentInvoice = {
                    shipTo: {},
                    shippingTerms: {},
                    invoiceTerms: {},
                    lineItems: [],
                    taxes: {},
                    carrier: {},
                    shipment: {}
                }
                currentInvoice.STCode = elements.ST01
                currentInvoice.STControlNumber = elements.ST02
            }
            if (segment === "BIG") {
                currentInvoice.invoiceDate = elements.BIG01;
                currentInvoice.invoiceNumber = elements.BIG02;
                currentInvoice.purchaseOrderDate = elements.BIG03;
                currentInvoice.purchaseOrderNumber = elements.BIG04;
                currentInvoice.transactionType = elements.BIG07; // DI DEBIT INVOICE
            }
            if (segment === "NTE") {
                if (!currentInvoice.notes) {
                    currentInvoice.notes = []
                }
                currentInvoice.notes.push(elements.NTE02)
            }
            if (segment === "CUR") {
                currentInvoice.entity = elements.CUR01
                currentInvoice.currency = elements.CUR02
            }
            if (segment === "REF") {
                if (elements.REF01 === "BM") {
                    if (!currentInvoice.BOLNumbers) {
                        currentInvoice.BOLNumbers = []
                    }
                    currentInvoice.BOLNumbers.push(elements.REF02)
                } else if (elements.REF01 === "2I") {
                    if (!currentInvoice.trackingNumbers) {
                        currentInvoice.trackingNumbers = []
                    }
                    currentInvoice.trackingNumbers.push(elements.REF02)
                }
            }
            if (segment === "N1") {
                currentShippingParty = elements.N101
            }
            if (currentShippingParty === "ST") {
                if (segment === "N1") {
                    currentInvoice.shipTo.name = elements.N102
                }
                if (segment === "N3") {
                    currentInvoice.shipTo.address1 = elements.N301
                    currentInvoice.shipTo.address2 = elements.N302
                }
                if (segment === "N4") {
                    currentInvoice.shipTo.city = elements.N401
                    currentInvoice.shipTo.state = elements.N402
                    currentInvoice.shipTo.zip = elements.N403
                    currentInvoice.shipTo.country = elements.N404
                }
            }
            if (currentShippingParty === "SF") {
                if (segment === "N1") {
                    if (!currentInvoice.shipFrom) {
                        currentInvoice.shipFrom = {}
                    }
                    currentInvoice.shipFrom.name = elements.N102
                }
                if (segment === "N3") {
                    currentInvoice.shipFrom.address1 = elements.N301
                    currentInvoice.shipFrom.address2 = elements.N302
                }
                if (segment === "N4") {
                    currentInvoice.shipFrom.city = elements.N401
                    currentInvoice.shipFrom.state = elements.N402
                    currentInvoice.shipFrom.zip = elements.N403
                    currentInvoice.shipFrom.country = elements.N404
                }
            }
            if (segment === "ITD") {
                currentInvoice.invoiceTerms.effectiveDate = elements.ITD02 === "3" ? currentInvoice.invoiceDate : null
                currentInvoice.invoiceTerms.dueDate = elements.ITD06 || currentInvoice.invoiceDate
                currentInvoice.invoiceTerms.daysDue = elements.ITD07
                currentInvoice.invoiceTerms.description = elements.ITD12
                if (elements.ITD08) {
                    currentInvoice.invoiceTerms.discount = {}
                    currentInvoice.invoiceTerms.discount.percent = elements.ITD03
                    currentInvoice.invoiceTerms.discount.dueDate = elements.ITD04 || currentInvoice.invoiceDate
                    currentInvoice.invoiceTerms.discount.daysDue = elements.ITD05
                    currentInvoice.invoiceTerms.discount.total = elements.ITD08
                }
            }
            if (segment === "FOB") {
                currentInvoice.shippingTerms.shippingPayment = EDIMaps.shipmentPaymentMap[elements.FOB01]
                currentInvoice.shippingTerms.deliveryAddressType = EDIMaps.addressTypeMap[elements.FOB02]
                currentInvoice.shippingTerms.withLiftGate = elements.FOB03 === "WITHLIFTGATE"
            }
            if (segment === "IT1") {
                if (Object.keys(currentLineItem).length) {
                    currentInvoice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }
                currentLineItem.quantity = elements.IT102
                currentLineItem.measurement = elements.IT103
                currentLineItem.price = elements.IT104
                currentLineItem.upc = elements.IT107
                currentLineItem.sku = elements.IT109
                currentLineItem.modelNumber = elements.IT111
            }
            if (segment === "PID" && Object.keys(currentLineItem)) {
                currentLineItem.description = elements.PID05
            }
            if (segment === "TDS") {
                currentInvoice.total = (parseFloat(elements.TDS01) / 100).toFixed(2)
            }
            if (segment === "TXI") {
                const taxRef = EDIMaps.taxMap[elements.TXI01]
                currentInvoice.jurisdiction = elements.TXI05
                currentInvoice.taxes[taxRef] = {
                    amount: elements.TXI02,
                    percent: elements.TXI03,
                    definedBy: elements.TXI04,
                    TIN: elements.TXI09,
                }
            }
            if (segment === "CAD") {
                currentInvoice.carrier.type = EDIMaps.carrierMethodMap[elements.CAD01]
                currentInvoice.carrier.SCAC = elements.CAD04
                currentInvoice.carrier.name = elements.CAD05
            }
            if (segment === "ISS") {
                currentInvoice.shipment.items = elements.ISS01
                currentInvoice.shipment.weight = elements.ISS03
                currentInvoice.shipment.weightUnit = elements.ISS04
                currentInvoice.shipment.volume = elements.ISS05
                currentInvoice.shipment.volumeUnit = elements.ISS06
            }
            if (segment === "CTT") {
                if (Object.keys(currentLineItem).length) {
                    currentInvoice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }
                currentInvoice.uniqueItems = elements.CTT01
            }
            if (segment === "IEA") {
                invoices.push({
                    ...interchangeInfo,
                    ...currentInvoice
                })
            }
        }
        return invoices;
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 };
    }
}

export const read846 = (data) => {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)

    const inventoryAdvices = []
    const interchangeInfo = {}
    let currentInventoryAdvice = null
    let currentLineItem = {}
    let errorLocation
    try {
        for (let line of lines) { 
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                interchangeInfo.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                interchangeInfo.senderQualifier = elements.ISA05
                interchangeInfo.senderID = elements.ISA06
                interchangeInfo.receiverQualifier = elements.ISA07
                interchangeInfo.receiverID = elements.ISA08
                interchangeInfo.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                )).toISOString()
                interchangeInfo.isTest = elements.ISA15 === "T"
                interchangeInfo.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                interchangeInfo.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                if (currentInventoryAdvice) {
                    inventoryAdvices.push({
                        ...interchangeInfo,
                        ...currentInventoryAdvice
                    })
                }
                currentInventoryAdvice = {
                    lineItems: []
                }
                currentInventoryAdvice.STCode = elements.ST01
                currentInventoryAdvice.STControlNumber = elements.ST02
            }
            if (segment === "BIA") {
                currentInventoryAdvice.periodOrReferenceNumber = elements.BIA03
            }
            if (segment === "LIN") {
                if (Object.values(currentLineItem).length) {
                    currentInventoryAdvice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }
                currentLineItem.upc = elements.LIN03
                currentLineItem.sku = trimLeadingZeros(elements.LIN05)
                currentLineItem.modelNumber = elements.LIN07
                currentLineItem.locationId = elements.LIN09
            }
            if (segment === "PID" && Object.values(currentLineItem).length) {
                currentLineItem.description = elements.PID05
            }
            if (segment === "CTP" && Object.values(currentLineItem).length) {
                currentLineItem.unitCost = elements.CTP03
            }
            if (segment === "LDT" && Object.values(currentLineItem).length) {
                currentLineItem.leadTime = parseInt(elements.LDT02)
            }
            if (segment === "QTY" && Object.values(currentLineItem).length) {
                currentLineItem.availableQuantity = parseInt(elements.QTY02 || 0)
            }
            if (segment === "CTT") {
                if (Object.values(currentLineItem).length) {
                    currentInventoryAdvice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }
            }
            if (segment === "IEA") {
                inventoryAdvices.push({
                    ...interchangeInfo,
                    ...currentInventoryAdvice
                })
            }
        }
        return inventoryAdvices
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 };
    }
}

export const read850 = (data) => {
    const purchaseOrder = {
        carrierInfo: {},
        shipTo: {},
        lineItems: []
    }
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    let currentShippingParty = ""
    const lines = getSegments(data, lineTerminator)
    let errorLocation
    try {
        for (let line of lines) { 
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                purchaseOrder.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                purchaseOrder.senderQualifier = elements.ISA05
                purchaseOrder.senderID = elements.ISA06
                purchaseOrder.receiverQualifier = elements.ISA07
                purchaseOrder.receiverID = elements.ISA08
                purchaseOrder.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                )).toISOString()
                purchaseOrder.isTest = elements.ISA15 === "T"
                purchaseOrder.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                purchaseOrder.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                purchaseOrder.STCode = elements.ST01
                purchaseOrder.STControlNumber = elements.ST02
            }
            if (segment === "BEG") {
                purchaseOrder.purpose = EDIMaps.purchaseOrderPurposeMap[elements.BEG01]
                purchaseOrder.purchaseOrderNumber = elements.BEG03
            }
            if (segment === "REF") {
                purchaseOrder.carrierInfo.accountNumber = elements.REF02
            }
            if (segment === "SAC" && elements.SAC02 === "D980") {
                purchaseOrder.carrierInfo.insuranceCost = (parseFloat(elements.SAC05) / 100).toFixed(2)
            }
            if (segment === "MSG") {
                purchaseOrder.note = elements.MSG01
            }
            if (segment === "N1") {
                currentShippingParty = elements.N101
            }
            if (currentShippingParty === "ST") {
                if (segment === "N1") {
                    purchaseOrder.shipTo.name = elements.N102
                    purchaseOrder.shipTo.phone = elements.N104
                }
                if (segment === "N3") {
                    purchaseOrder.shipTo.address1 = elements.N301
                    purchaseOrder.shipTo.address2 = elements.N302
                }
                if (segment === "N4") {
                    purchaseOrder.shipTo.city = elements.N401
                    purchaseOrder.shipTo.state = elements.N402
                    purchaseOrder.shipTo.zip = elements.N403
                    purchaseOrder.shipTo.country = elements.N404
                }
            }
            if (currentShippingParty === "SF") {
                if (segment === "N1") {
                    if (!purchaseOrder.shipFrom) {
                        purchaseOrder.shipFrom = {}
                    }
                    purchaseOrder.shipFrom.name = elements.N102
                }
                if (segment === "N3") {
                    purchaseOrder.shipFrom.address1 = elements.N301
                    purchaseOrder.shipFrom.address2 = elements.N302
                }
                if (segment === "N4") {
                    purchaseOrder.shipFrom.city = elements.N401
                    purchaseOrder.shipFrom.state = elements.N402
                    purchaseOrder.shipFrom.zip = elements.N403
                    purchaseOrder.shipFrom.country = elements.N404
                }
            }
            if (segment === "FOB") {
                purchaseOrder.carrierInfo.deliveryAddressType = EDIMaps.addressTypeMap[elements.FOB02]
                purchaseOrder.carrierInfo.withLiftGate = elements.FOB03 === "WITHLIFTGATE"
            }
            if (segment === "TD5") {
                purchaseOrder.carrierInfo.SCACCode = elements.TD503
                purchaseOrder.carrierInfo.carrierName = elements.TD505
            }
            if (segment === "PO1") {
                purchaseOrder.lineItems.push({
                    quantity: parseInt(elements.PO102),
                    price: parseFloat(elements.PO104),
                    upc: elements.PO107,
                    sku: elements.PO109,
                    modelNumber: elements.PO111
                })
            }
        }
        return purchaseOrder
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 };
    }
}
export const read855 = (data) => {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)
    const interchangeInfo = {}
    const acknowledgements = []
    let currentAcknowledgement
    let currentShippingParty
    let currentLineItem = {}
    let errorLocation
    try {
        for (let line of lines) {
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                interchangeInfo.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                interchangeInfo.senderQualifier = elements.ISA05
                interchangeInfo.senderID = elements.ISA06
                interchangeInfo.receiverQualifier = elements.ISA07
                interchangeInfo.receiverID = elements.ISA08
                interchangeInfo.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                    
                )).toISOString()
                interchangeInfo.isTest = elements.ISA15 === "T"
                interchangeInfo.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                interchangeInfo.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                if (currentAcknowledgement) {
                    acknowledgements.push({
                        ...interchangeInfo,
                        ...currentAcknowledgement
                    })
                }
                currentAcknowledgement = {}
                currentAcknowledgement.STCode = elements.ST01
                currentAcknowledgement.STControlNumber = elements.ST02
            }
            if (segment === "BAK") {
                currentAcknowledgement.purpose = EDIMaps.purchaseOrderPurposeMap[elements.BAK01]
                currentAcknowledgement.acceptanceStatus = EDIMaps.purchaseOrderAcceptanceMap[elements.BAK02]
                currentAcknowledgement.purchaseOrderNumber = elements.BAK03
            }
            if (segment === "SAC" && elements.SAC02 === "D980") {
                currentAcknowledgement.insuranceCost = (parseFloat(elements.SAC05) / 100).toFixed(2)
            }
            if (segment === "MSG") {
                currentAcknowledgement.note = elements.MSG01
            }
            if (segment === "N1") {
                currentShippingParty = elements.N101
            }
            if (currentShippingParty === "ST") {
                if (segment === "N1") {
                    if (!currentAcknowledgement.shipTo) {
                        currentAcknowledgement.shipTo = {}
                    }
                    currentAcknowledgement.shipTo.name = elements.N102
                    currentAcknowledgement.shipTo.phone = elements.N104
                }
                if (segment === "N3") {
                    currentAcknowledgement.shipTo.address1 = elements.N301
                    currentAcknowledgement.shipTo.address2 = elements.N302
                }
                if (segment === "N4") {
                    currentAcknowledgement.shipTo.city = elements.N401
                    currentAcknowledgement.shipTo.state = elements.N402
                    currentAcknowledgement.shipTo.zip = elements.N403
                    currentAcknowledgement.shipTo.country = elements.N404
                }
            }
            if (currentShippingParty === "SF") {
                if (segment === "N1") {
                    if (!currentAcknowledgement.shipFrom) {
                        currentAcknowledgement.shipFrom = {}
                    }
                    currentAcknowledgement.shipFrom.name = elements.N102
                }
                if (segment === "N3") {
                    currentAcknowledgement.shipFrom.address1 = elements.N301
                    currentAcknowledgement.shipFrom.address2 = elements.N302
                }
                if (segment === "N4") {
                    currentAcknowledgement.shipFrom.city = elements.N401
                    currentAcknowledgement.shipFrom.state = elements.N402
                    currentAcknowledgement.shipFrom.zip = elements.N403
                    currentAcknowledgement.shipFrom.country = elements.N404
                }
            }
            if (segment === "PO1") {
                if (!currentAcknowledgement.lineItems) {
                    currentAcknowledgement.lineItems = []
                }
                if (Object.keys(currentLineItem).length) {
                    currentAcknowledgement.lineItems.push(currentLineItem)
                    currentLineItem = {}
                }
                currentLineItem.quantity = parseInt(elements.PO102)
                currentLineItem.price = parseFloat(elements.PO104)
                currentLineItem.upc = elements.PO107
                currentLineItem.sku = elements.PO109
                currentLineItem.modelNumber = elements.PO111
            }
            if (segment === "ACK") {
                currentLineItem.acceptanceStatus = EDIMaps.lineItemAcceptanceMap[elements.ACK01]
                currentLineItem.acceptedQuantity = parseFloat(elements.ACK02)
            }
            if (segment === "IEA") {
                if (Object.keys(currentLineItem).length) {
                    currentAcknowledgement.lineItems.push(currentLineItem)
                    currentLineItem = {}
                }
                if (currentAcknowledgement) {
                    acknowledgements.push({
                        ...interchangeInfo,
                        ...currentAcknowledgement
                    })
                }
                currentAcknowledgement = {}
            }
        }
        return acknowledgements
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 }
    }
}
export const read856 = (data) => {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)
    const interchangeInfo = {}
    const ASNs = []
    let currentHLCode = null
    let currentHLID = null
    let currentHLParentID = null
    let currentShippingParty = null
    let currentASN = null
    let errorLocation
    try {
        for (let line of lines) {
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                interchangeInfo.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                interchangeInfo.senderQualifier = elements.ISA05
                interchangeInfo.senderID = elements.ISA06
                interchangeInfo.receiverQualifier = elements.ISA07
                interchangeInfo.receiverID = elements.ISA08
                interchangeInfo.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                    
                )).toISOString()
                interchangeInfo.isTest = elements.ISA15 === "T"
                interchangeInfo.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                interchangeInfo.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                if (currentASN) {
                    const parsedPackages = Object.values(currentASN.packages).map(pack => ({ ...pack, lineItems: Object.values(pack.lineItems) }))
                    currentASN.packages = parsedPackages
                    ASNs.push({
                        ...interchangeInfo,
                        ...currentASN
                    })
                }
                currentASN = {
                    shipment: {
                        shipTo: {},
                        shipFrom: {}
                    },
                    order: {},
                    packages: {}
                }
                currentASN.STCode = elements.ST01
                currentASN.STControlNumber = elements.ST02
            }
            if (segment === "HL") {
                currentHLID = elements.HL01
                currentHLParentID = elements.HL02
                currentHLCode = elements.HL03
            }
            if (segment === "REF" && elements.REF01 === "BM") {
                currentASN.shipment.BOL = elements.REF02
            }
    
            // SHIPMENT LEVEL
            if (currentHLCode === "S") {
                if (segment === "TD1") {
                    currentASN.shipment.packages = parseInt(elements.TD102)
                    // asn.shipment.weight = elements.TD107
                    // asn.shipment.units = elements.TD108 
                }
                if (segment === "TD5") {
                    currentASN.shipment.SCAC = elements.TD503
                    currentASN.shipment.transportMethod = elements.TD504
                }
                if (segment === "N1") {
                    currentShippingParty = elements.N101
                }
                if (currentShippingParty === "ST") {
                    if (segment === "N1") {
                        currentASN.shipment.shipTo.name = elements.N102
                    }
                    if (segment === "N3") {
                        currentASN.shipment.shipTo.address1 = elements.N301
                        currentASN.shipment.shipTo.address2 = elements.N302
                    }
                    if (segment === "N4") {
                        currentASN.shipment.shipTo.city = elements.N401
                        currentASN.shipment.shipTo.state = elements.N402
                        currentASN.shipment.shipTo.zip = elements.N403
                    }
                } else if (currentShippingParty === "SF") {
                    if (segment === "N1") {
                        currentASN.shipment.shipFrom.name = elements.N102
                    }
                    if (segment === "N3") {
                        currentASN.shipment.shipFrom.address1 = elements.N301
                        currentASN.shipment.shipFrom.address2 = elements.N302
                    }
                    if (segment === "N4") {
                        currentASN.shipment.shipFrom.city = elements.N401
                        currentASN.shipment.shipFrom.state = elements.N402
                        currentASN.shipment.shipFrom.zip = elements.N403
                    }
                }
            }
    
            // ORDER LEVEL
            if (currentHLCode === "O") {
                if (segment === "PRF") {
                    currentASN.order = {
                        purchaseOrder: elements.PRF01,
                        createdAt: elements.PRF04
                            ? new Date(Date.UTC(elements.PRF04.slice(0, 4), parseInt(elements.PRF04.slice(4, 6)) - 1, elements.PRF04.slice(6, 8))).toISOString()
                            : ''
                    }
                }
            }
    
            // PACK LEVEL
            if (currentHLCode === "P") {
                if (segment === "REF" && elements.REF01 === "2I") {
                    if (!currentASN.packages[currentHLID]) {
                        currentASN.packages[currentHLID] = {
                            trackingNumber: "",
                            lineItems: {}
                        }
                    }
                    currentASN.packages[currentHLID].trackingNumber = elements.REF02
                }
                if (segment === "MAN" && elements.MAN01 === "2I") {
                    if (!currentASN.packages[currentHLID]) {
                        currentASN.packages[currentHLID] = {
                            trackingNumber: "",
                            lineItems: {}
                        }
                    }
                    currentASN.packages[currentHLID].trackingNumber = elements.MAN02
                }
            }

            // ITEM LEVEL
            if (currentHLCode === "I") {
                if (!currentASN.packages[currentHLParentID]) {
                    currentASN.packages[currentHLParentID] = {
                        trackingNumber: "",
                        lineItems: {}
                    }
                }
                if (segment === "LIN") {
                    if (!currentASN.packages[currentHLParentID].lineItems[currentHLID]) {
                        currentASN.packages[currentHLParentID].lineItems[currentHLID] = {}
                    }
                    currentASN.packages[currentHLParentID].lineItems[currentHLID].upc = elements.LIN03
                    currentASN.packages[currentHLParentID].lineItems[currentHLID].sku = trimLeadingZeros(elements.LIN05)
                    currentASN.packages[currentHLParentID].lineItems[currentHLID].modelNumber = elements.LIN07
                }
                if (segment === "SN1" && currentASN.packages[currentHLParentID].lineItems[currentHLID]) {
                    currentASN.packages[currentHLParentID].lineItems[currentHLID].quantity = parseInt(elements.SN102)
                    currentASN.packages[currentHLParentID].lineItems[currentHLID].units = elements.SN103
                }
                if (segment === "PID" && currentASN.packages[currentHLParentID].lineItems[currentHLID]) {
                    currentASN.packages[currentHLParentID].lineItems[currentHLID].description = elements.PID05
                }
            }

            if (segment === "IEA") {
                if (currentASN && currentASN.order.purchaseOrder) {
                    const parsedPackages = Object.values(currentASN.packages).map(pack => ({ ...pack, lineItems: Object.values(pack.lineItems) }))
                    currentASN.packages = parsedPackages
                    ASNs.push({
                        ...interchangeInfo,
                        ...currentASN
                    })
                }
            }
        }
        return ASNs
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 }
    }
}
export function read997 (data) {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)
    const functionalAcknowledgement = {
        acknowledgedTransactionSets: [],
    }
    let currentTransactionSet = {}
    let errorLocation
    try {
        for (let line of lines) {
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                functionalAcknowledgement.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                functionalAcknowledgement.senderQualifier = elements.ISA05
                functionalAcknowledgement.senderID = elements.ISA06
                functionalAcknowledgement.receiverQualifier = elements.ISA07
                functionalAcknowledgement.receiverID = elements.ISA08
                functionalAcknowledgement.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                )).toISOString()
                functionalAcknowledgement.isTest = elements.ISA15 === "T"
                functionalAcknowledgement.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                functionalAcknowledgement.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                functionalAcknowledgement.STCode = elements.ST01
                functionalAcknowledgement.STControlNumber = elements.ST02
            }
            if (segment === "AK1") {
                functionalAcknowledgement.acknowledgedGroupType = EDIMaps.setMap[elements.AK101]
                functionalAcknowledgement.acknowledgedGroupCode = elements.AK101
                functionalAcknowledgement.acknowledgedGroupControlNumber = elements.AK102
            }
            if (segment === "AK2") {
                currentTransactionSet.type = elements.AK201
                currentTransactionSet.controlNumber = elements.AK202
            }
            if (segment === "AK5") {
                currentTransactionSet.accepted = EDIMaps.statusMap[elements.AK501]
                functionalAcknowledgement.acknowledgedTransactionSets.push({...currentTransactionSet})
                currentTransactionSet = {}
            }
            if (segment === "AK9") {
                functionalAcknowledgement.functionalGroupAccepted = EDIMaps.statusMap[elements.AK901]
                functionalAcknowledgement.totalTransactionSets = parseInt(elements.AK902) || 0
                functionalAcknowledgement.receivedTransactionSets = parseInt(elements.AK903) || 0
                functionalAcknowledgement.acceptedTransactionSets = parseInt(elements.AK904) || 0
    
            }
        }
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 };
    }

    return functionalAcknowledgement;
}