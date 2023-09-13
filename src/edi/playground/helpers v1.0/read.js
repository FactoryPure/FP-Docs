import { getDelimiters, getElements, getSegments, trimLeadingZeros } from "./helpers.js"
import * as EDIMaps from "./EDICodeMaps"

export function read810 (data) {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)

    const invoice = {
        shipTo: {},
        shippingTerms: {},
        invoiceTerms: {},
        lineItems: [],
        taxes: {},
        carrier: {},
        shipment: {}
    }

    let currentShippingParty
    let currentLineItem = {}
    let errorLocation
    try {
        for (let line of lines) {
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]   
            errorLocation = segment  
            if (segment === "ISA") {
                invoice.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                invoice.senderID = elements.ISA06
                invoice.receiverID = elements.ISA08
                invoice.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                )).toISOString()
                invoice.isTest = elements.ISA15 === "T"
                invoice.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                invoice.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                invoice.STCode = elements.ST01
                invoice.STControlNumber = elements.ST02
            }
            if (segment === "BIG") {
                invoice.invoiceDate = elements.BIG01;
                invoice.invoiceNumber = elements.BIG02;
                invoice.purchaseOrderDate = elements.BIG03;
                invoice.purchaseOrderNumber = elements.BIG04;
                invoice.transactionType = elements.BIG07; // DI DEBIT INVOICE
            }
            if (segment === "NTE") {
                if (!invoice.notes) {
                    invoice.notes = []
                }
                invoice.notes.push(elements.NTE02)
            }
            if (segment === "CUR") {
                invoice.entity = elements.CUR01
                invoice.currency = elements.CUR02
            }
            if (segment === "REF") {
                if (elements.REF01 === "BM") {
                    if (!invoice.BOLNumbers) {
                        invoice.BOLNumbers = []
                    }
                    invoice.BOLNumbers.push(elements.REF02)
                } else if (elements.REF01 === "2I") {
                    if (!invoice.trackingNumbers) {
                        invoice.trackingNumbers = []
                    }
                    invoice.trackingNumbers.push(elements.REF02)
                }
            }
            if (segment === "N1") {
                currentShippingParty = elements.N101
            }
            if (currentShippingParty === "ST") {
                if (segment === "N1") {
                    invoice.shipTo.name = elements.N102
                }
                if (segment === "N3") {
                    invoice.shipTo.address1 = elements.N301
                    invoice.shipTo.address2 = elements.N302
                }
                if (segment === "N4") {
                    invoice.shipTo.city = elements.N401
                    invoice.shipTo.state = elements.N402
                    invoice.shipTo.zip = elements.N403
                    invoice.shipTo.country = elements.N404
                }
            }
            if (currentShippingParty === "SF") {
                if (segment === "N1") {
                    if (!invoice.shipFrom) {
                        invoice.shipFrom = {}
                    }
                    invoice.shipFrom.name = elements.N102
                }
                if (segment === "N3") {
                    invoice.shipFrom.address1 = elements.N301
                    invoice.shipFrom.address2 = elements.N302
                }
                if (segment === "N4") {
                    invoice.shipFrom.city = elements.N401
                    invoice.shipFrom.state = elements.N402
                    invoice.shipFrom.zip = elements.N403
                    invoice.shipFrom.country = elements.N404
                }
            }
            if (segment === "ITD") {
                invoice.invoiceTerms.effectiveDate = elements.ITD02 === "3" ? invoice.invoiceDate : null
                invoice.invoiceTerms.dueDate = elements.ITD06 || invoice.invoiceDate
                invoice.invoiceTerms.daysDue = elements.ITD07
                invoice.invoiceTerms.description = elements.ITD12
                if (elements.ITD08) {
                    invoice.invoiceTerms.discount = {}
                    invoice.invoiceTerms.discount.percent = elements.ITD03
                    invoice.invoiceTerms.discount.dueDate = elements.ITD04 || invoice.invoiceDate
                    invoice.invoiceTerms.discount.daysDue = elements.ITD05
                    invoice.invoiceTerms.discount.total = elements.ITD08
                }
            }
            if (segment === "FOB") {
                invoice.shippingTerms.shippingPayment = EDIMaps.shipmentPaymentMap[elements.FOB01]
                invoice.shippingTerms.deliveryAddressType = EDIMaps.addressTypeMap[elements.FOB02]
                invoice.shippingTerms.withLiftGate = elements.FOB03 === "WITHLIFTGATE"
            }
            if (segment === "IT1") {
                if (Object.keys(currentLineItem).length) {
                    invoice.lineItems.push({...currentLineItem})
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
                invoice.total = (parseFloat(elements.TDS01) / 100).toFixed(2)
            }
            if (segment === "TXI") {
                const taxRef = EDIMaps.taxMap[elements.TXI01]
                invoice.jurisdiction = elements.TXI05
                invoice.taxes[taxRef] = {
                    amount: elements.TXI02,
                    percent: elements.TXI03,
                    definedBy: elements.TXI04,
                    TIN: elements.TXI09,
                }
            }
            if (segment === "CAD") {
                invoice.carrier.type = EDIMaps.carrierMethodMap[elements.CAD01]
                invoice.carrier.SCAC = elements.CAD04
                invoice.carrier.name = elements.CAD05
            }
            if (segment === "ISS") {
                invoice.shipment.items = elements.ISS01
                invoice.shipment.weight = elements.ISS03
                invoice.shipment.weightUnit = elements.ISS04
                invoice.shipment.volume = elements.ISS05
                invoice.shipment.volumeUnit = elements.ISS06
            }
            if (segment === "CTT") {
                if (Object.keys(currentLineItem).length) {
                    invoice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }
                invoice.uniqueItems = elements.CTT01
            }
        }
        return invoice;
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 };
    }
}

export const read846 = (data) => {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)
    const inventoryAdvice = {
        lineItems: []
    }
    let currentLineItem = {}
    let errorLocation
    try {
        for (let line of lines) { 
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                inventoryAdvice.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                inventoryAdvice.senderID = elements.ISA06
                inventoryAdvice.receiverID = elements.ISA08
                inventoryAdvice.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                )).toISOString()
                inventoryAdvice.isTest = elements.ISA15 === "T"
                inventoryAdvice.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                inventoryAdvice.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                inventoryAdvice.STCode = elements.ST01
                inventoryAdvice.STControlNumber = elements.ST02
            }
            if (segment === "BIA") {
                inventoryAdvice.periodOrReferenceNumber = elements.BIA03
            }
            if (segment === "LIN") {
                if (Object.values(currentLineItem).length) {
                    inventoryAdvice.lineItems.push({...currentLineItem})
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
                    inventoryAdvice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }
            }
        }
        return inventoryAdvice
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
                purchaseOrder.senderID = elements.ISA06
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
                purchaseOrder.purpose = EDIMaps.purcahseOrderPurposeMap[elements.BEG01]
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
export const read856 = (data) => {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)
    const asn = {
        shipment: {
            shipTo: {},
            shipFrom: {}
        },
        order: {},
        packages: {}
    }
    let currentHLCode = null
    let currentHLID = null
    let currentHLParentID = null
    let currentShippingParty = null
    let errorLocation
    try {
        for (let line of lines) {
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation = segment
            if (segment === "ISA") {
                asn.vendor = EDIMaps.vendorMap[elements.ISA06.trim()] || elements.ISA06.trim()
                asn.senderID = elements.ISA06
                asn.receiverID = elements.ISA08
                asn.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4)) - 1,
                    parseInt(elements.ISA09.slice(4,6)), 
                    parseInt(elements.ISA10.slice(0,2)),
                    parseInt(elements.ISA10.slice(2,4))
                    
                )).toISOString()
                asn.isTest = elements.ISA15 === "T"
                asn.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                asn.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                asn.STCode = elements.ST01
                asn.STControlNumber = elements.ST02
            }
            if (segment === "HL") {
                currentHLID = elements.HL01
                currentHLParentID = elements.HL02
                currentHLCode = elements.HL03
            }
            if (segment === "REF" && elements.REF01 === "BM") {
                asn.shipment.BOL = elements.REF02
            }
    
            // SHIPMENT LEVEL
            if (currentHLCode === "S") {
                if (segment === "TD1") {
                    asn.shipment.packages = parseInt(elements.TD102)
                    // asn.shipment.weight = elements.TD107
                    // asn.shipment.units = elements.TD108 
                }
                if (segment === "TD5") {
                    asn.shipment.SCAC = elements.TD503
                    asn.shipment.transportMethod = elements.TD504
                }
                if (segment === "N1") {
                    currentShippingParty = elements.N101
                }
                if (currentShippingParty === "ST") {
                    if (segment === "N1") {
                        asn.shipment.shipTo.name = elements.N102
                    }
                    if (segment === "N3") {
                        asn.shipment.shipTo.address1 = elements.N301
                        asn.shipment.shipTo.address2 = elements.N302
                    }
                    if (segment === "N4") {
                        asn.shipment.shipTo.city = elements.N401
                        asn.shipment.shipTo.state = elements.N402
                        asn.shipment.shipTo.zip = elements.N403
                    }
                } else if (currentShippingParty === "SF") {
                    if (segment === "N1") {
                        asn.shipment.shipFrom.name = elements.N102
                    }
                    if (segment === "N3") {
                        asn.shipment.shipFrom.address1 = elements.N301
                        asn.shipment.shipFrom.address2 = elements.N302
                    }
                    if (segment === "N4") {
                        asn.shipment.shipFrom.city = elements.N401
                        asn.shipment.shipFrom.state = elements.N402
                        asn.shipment.shipFrom.zip = elements.N403
                    }
                }
            }
    
            // ORDER LEVEL
            if (currentHLCode === "O") {
                if (segment === "PRF") {
                    asn.order = {
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
                    if (!asn.packages[currentHLID]) {
                        asn.packages[currentHLID] = {
                            trackingNumber: "",
                            lineItems: {}
                        }
                    }
                    asn.packages[currentHLID].trackingNumber = elements.REF02
                }
            }
    
            // ITEM LEVEL
            if (currentHLCode === "I" && asn.packages[currentHLParentID]) {
                if (segment === "LIN") {
                    if (!asn.packages[currentHLParentID].lineItems[currentHLID]) {
                        asn.packages[currentHLParentID].lineItems[currentHLID] = {}
                    }
                    asn.packages[currentHLParentID].lineItems[currentHLID].upc = elements.LIN03
                    asn.packages[currentHLParentID].lineItems[currentHLID].sku = trimLeadingZeros(elements.LIN05)
                    asn.packages[currentHLParentID].lineItems[currentHLID].modelNumber = elements.LIN07
                }
                if (segment === "SN1" && asn.packages[currentHLParentID].lineItems[currentHLID]) {
                    asn.packages[currentHLParentID].lineItems[currentHLID].quantity = parseInt(elements.SN102)
                    asn.packages[currentHLParentID].lineItems[currentHLID].units = elements.SN103
                }
                if (segment === "PID" && asn.packages[currentHLParentID].lineItems[currentHLID]) {
                    asn.packages[currentHLParentID].lineItems[currentHLID].description = elements.PID05
                }
            }
        }
        const parsedPackages = Object.values(asn.packages).map(pack => ({ ...pack, lineItems: Object.values(pack.lineItems) }))
        asn.packages = parsedPackages
        return asn
    } catch (err) {
        return { error: err.message, segment: errorLocation, position: 0 };
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
                functionalAcknowledgement.senderID = elements.ISA06
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