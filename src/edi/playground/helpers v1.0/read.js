import { getDelimiters, getElements, getSegments } from "./helpers.js"

export function read810 (fileContents) {
    let errorLocation = {};
    try {
        const contents = fileContents;
        const elementSeparator = contents.substr(103,1);
        const subelementSeparator = contents.substr(104,1);
        const segmentSeparator = contents.substr(105,1);
        const rows = contents.split(segmentSeparator).map(l => l.replace("\n", ""));

        const invoice810 = {
            // additional_charges_and_allowances: []
            notes: [],
            tracking_number: [],
            bill_of_lading_number: []
        }
        const lineItems = {}

        const vendorMap = {
            "SENDERID": "SENDERID",
            "TESTINGHOUSE": "WESTINGHOUSE"
        }
        const deliveryMap = {
            "ST": "ship_to",
            "SF": "ship_from"
        }
        const locationMap = {
            "H": "Home Address",
            "BS": "Place of Business",
            "TM": "Terminal",
        }
        const shipmentPaymentMap = {
            "CC": "Collect",
        }
        const referenceMap = {
            "BM": "bill_of_lading_number",
            "2I": "tracking_number"
        }
        const transportTermsMap = {
            "01": "Incoterms",
        }
        const deliveryTermsMap = {
            "EXW": "Ex Works",
        }
        const carrierMethodMap = {
            "T": "Best Way (Shippers Option)",
        }
        const unitsMap = {
            "CC": "Cubic Centimeter",
            "CI": "Cubic Inches",
            "GR": "Gram",
            "KG": "Kilogram",
            "LB": "Pound",
            "OZ": "Ounce"
        }
        const taxMap = {
            "AA": "Stadium Tax",
            "AB": "Surtax",
            "AT": "Assessment",
            "BP": "Business Privilege Tax",
            "CA": "City Tax",
            "CB": "Threshold Tax",
            "CG": "Federal Value-added Tax (GST) on Goods",
            "CI": "City Rental Tax",
            "CP": "County/Parish Sales Tax",
            "CR": "County Rental Tax",
            "CS": "City Sales Tax",
            "CT": "County Tax",
            "CV": "Federal Value-added Tax (GST) on Services",
            "DL": "Default Labor Tax",
            "EQ": "Equipment Tax",
            "ET": "Energy Tax",
            "EV": "Environmental Tax",
            "F1": "FICA Tax",
            "F2": "FICA Medicare Tax",
            "F3": "FICA Social Security Tax",
            "FD": "Federal Tax",
            "FF": "Fuel Super Fund Tax",
            "FI": "Federal Income Tax Withholding",
            "FL": "Fuel L.U.S.T. Tax (Leaking Underground Storage Tank)",
            "FR": "Franchise Tax",
            "FS": "Fuel Spill Tax",
            "FT": "Federal Excise Tax",
            "GR": "Gross Receipts Tax",
            "GS": "Goods and Services Tax",
            "HS": "Public Health and Education Tax",
            "HT": "Handicap Tax",
            "HZ": "Hazardous Waste Tax",
            "LB": "Labor By Trade Tax",
            "LO": "Local Tax (Not Sales Tax)",
            "LS": "State and Local Sales Tax",
            "LT": "Local Sales Tax (All Applicable Sales Taxes by Taxing Authority Below the State Level)",
            "LU": "Leaky Underground Storage Tank (LUST) Tax (federal)",
            "LV": "Leaky Underground Storage Tank (LUST) Tax (state)",
            "MA": "Material Tax",
            "MN": "Minimum Tax",
            "MP": "Municipal Tax",
            "MS": "Miscellaneous State Tax",
            "MT": "Metropolitan Transit Tax",
            "OH": "Other Taxes",
            "OT": "Occupational Tax",
            "PG": "State or Provincial Tax on Goods",
            "PS": "State or Provincial Tax on Services",
            "SA": "State or Provincial Fuel Tax",
            "SB": "Secondary Percentage Tax",
            "SC": "School Tax",
            "SE": "State Excise Tax",
            "SF": "Superfund Tax",
            "SL": "State and Local Tax",
            "SP": "State/Provincial Tax",
            "SR": "State Rental Tax",
            "SS": "State Tax on Specific Labor",
            "ST": "State Sales Tax",
            "SU": "Sales and Use Tax",
            "SX": "Enhanced 911 - State Excise Tax",
            "T1": "Pre-threshold Tax",
            "T2": "Post Threshold Tax",
            "TD": "Telecommunications Device for the Deaf (TDD) Service Excise Tax",
            "TT": "Telecommunications Tax",
            "TX": "All Taxes",
            "UL": "License Tax",
            "UT": "Utility Users' Tax",
            "VA": "Value Added Tax",
            "WS": "Well Service",
            "ZA": "911-City Tax",
            "ZB": "911-County Tax",
            "ZC": "911-Excise Tax",
            "ZD": "911-State Tax",
            "ZE": "911-Tax",
            "ZZ": "Mutually Defined",
        }
        const SACChargeAllowanceMap = {
            "A": "Allowance",
            "C": "Charge"
        }
        const SACTypeMap = {
            "D240": "Freight",
            "D980": "Insurance"
        }

        let item;
        let transportRef;
        let referenceCode;
        let shippingRef;

        let dateRef;
        let taxRef;

        for (let row = 0; row < rows.length; row++) {
            // console.log(row+1 + " " + rows[row])
            const elements = rows[row].split(elementSeparator);
            let segmentName;
                
            // let SAC = {};

            for (let el = 0; el < elements.length; el++) {
                if (el === 0) segmentName = elements[el];
                let elementName = segmentName + String(el).padStart(2, 0)
                errorLocation = {segment: segmentName, position: el};
                // console.log("   " + elementName + ": " + elements[el]);
                
                if (elementName === "ISA06") invoice810.vendor = vendorMap[elements[el].trim()] || elements[el];
                if (elementName === "ISA06") invoice810.senderID = elements[el];
                if (elementName === "ISA08") invoice810.receiverID = elements[el];
                if (elementName === "ISA08") invoice810.isTest = elements[el] === "FACTORYPUREEDIT";
                if (elementName === "ISA13") invoice810.ISAControlNumber = elements[el];
                if (elementName === "GS06") invoice810.GSControlNumber = elements[el];
                if (elementName === "ST01") invoice810.STCode = elements[el];
                if (elementName === "ST02") invoice810.STControlNumber = elements[el];

                if (elementName === "BIG01") invoice810.invoice_date = elements[el];
                if (elementName === "BIG02") invoice810.invoice_number = elements[el];
                if (elementName === "BIG03") invoice810.purchase_order_date = elements[el];
                if (elementName === "BIG04") invoice810.purchase_order_number = elements[el];
                if (elementName === "BIG07") invoice810.transaction_type = elements[el];
                    // DI DEBIT INVOICE
                if (elementName === "NTE01" && !invoice810.notes) invoice810.notes = [];
                if (elementName === "NTE02") invoice810.notes.push(elements[el]);
                    // list of codes, but only GEN is listed. Are all applicable? Can a code be used twice?
                
                if (elementName === "CUR01") invoice810.entity = elements[el];
                if (elementName === "CUR02") invoice810.currency = elements[el];

                if (elementName === "N101") shippingRef = deliveryMap[elements[el]];
                if (elementName === "N102") invoice810[shippingRef] = {
                    name: elements[el]
                };
                if (elementName === "N103") invoice810[shippingRef].set_by = elements[el];
                    // 91 Assigned by Seller or Seller's Agent
                    // 92 Assigned by Buyer or Buyer's Agent
                    // 94 Code assigned by the organization that is the ultimate destination of the transactionset
                if (elementName === "N104") invoice810[shippingRef].set_by_id = elements[el];
                    // Code identifying a party or other code - 00001 For FactoryPure website?
                if (elementName === "N301") invoice810[shippingRef].address = elements[el];
                if (elementName === "N302") invoice810[shippingRef].address += elements[el];

                if (elementName === "N401") invoice810[shippingRef].city = elements[el];
                if (elementName === "N402") invoice810[shippingRef].state = elements[el];
                if (elementName === "N403") invoice810[shippingRef].zip = elements[el];
                if (elementName === "N404") invoice810[shippingRef].country = elements[el];
                
                // NOT getting rendered in the PDF atm. Also not in the implementation guide.
                // if (elementName === "PER01" && elements[el] === "DC") invoice810[shippingRef].phone = null;
                // if (elementName === "PER04") invoice810[shippingRef].phone = elements[el];

                // all/most will be paid by buyer (BP)?
                // shipping terms
                if (elementName === "FOB01") invoice810.shipping_terms = {shipping_payment: shipmentPaymentMap[elements[el]]};
                if (elementName === "FOB02") invoice810.shipping_terms.delivery_location = locationMap[elements[el]];
                if (elementName === "FOB03" && elements[el]) invoice810.shipping_terms.description = elements[el];
                // if (elementName === "FOB04") transportRef = transportTermsMap[elements[el]];
                // if (elementName === "FOB05") invoice810.shipping_terms[transportRef] = deliveryTermsMap[elements[el]];
                
                // terms of sale
                if (elementName === "ITD01") invoice810.invoice_terms = elements[el] === "08" ? {discount: {}} : {}
                if (elementName === "ITD02" && elements[el] === "3") invoice810.invoice_terms.effective_date = invoice810.invoice_date;
                if (invoice810.invoice_terms && invoice810.invoice_terms.discount) {
                    if (elementName === "ITD03") invoice810.invoice_terms.discount.percent = elements[el];
                    if (elementName === "ITD04" && elements[el]) invoice810.invoice_terms.discount.due_date = elements[el];
                    if (elementName === "ITD05" && !invoice810.invoice_terms.discount.due_date) invoice810.invoice_terms.discount.days_due = elements[el];
                    if (elementName === "ITD08") invoice810.invoice_terms.discount.total = elements[el];
                }
                if (elementName === "ITD06" && elements[el]) invoice810.invoice_terms.due_date = elements[el];
                if (elementName === "ITD07" && !invoice810.invoice_terms.due_date) invoice810.invoice_terms.days_due = elements[el];            
                if (elementName === "ITD12") invoice810.invoice_terms.description = elements[el];

                // NOT getting rendered in the PDF ATM. ALSO not in the implementation guide.
                // if (elementName === "DTM01") dateRef = elements[el];
                // if (elementName === "DTM02" && elements[el] === "008") invoice810.purchase_order_received_date = elements[el];
                // if (elementName === "DTM02" && elements[el] === "011") invoice810.shipped_date = elements[el];

                if (elementName === "IT101") {
                    item = elements[el];
                    lineItems[item] = {};
                }
                if (elementName === "IT102") lineItems[item].quantity = elements[el];
                if (elementName === "IT103") lineItems[item].measurement = elements[el];
                if (elementName === "IT104") lineItems[item].price = elements[el];
                // if (elementName === "IT106") referenceCode = elements[el];
                if (elementName === "IT107" && elements[el]) lineItems[item].upc = elements[el]; // if (elementName === "IT107") lineItems[item].sku = elements[el];
                // if (elementName === "IT108") referenceCode = elements[el];
                if (elementName === "IT109" && elements[el]) lineItems[item].vendor_sku = elements[el]; // if (elementName === "IT109" && referenceCode === "VC") lineItems[item].vendor_sku = elements[el];
                // if (elementName === "IT110") referenceCode = elements[el];
                if (elementName === "IT111" && elements[el]) lineItems[item].model_number = elements[el]; // if (elementName === "IT111" && referenceCode === "UP") lineItems[item].upc = elements[el];

                if (elementName === "PID05") lineItems[item].description = elements[el];
                
                if (elementName === "TDS01") invoice810.total = elements[el];
                
                if (elementName === "TXI01" && !invoice810.taxes) invoice810.taxes = {};
                if (elementName === "TXI01") taxRef = taxMap[elements[el]];
                if (elementName === "TXI02") invoice810.taxes[taxRef] = {amount: elements[el]}
                if (elementName === "TXI03") invoice810.taxes[taxRef].percent = elements[el];
                if (elementName === "TXI04") invoice810.taxes[taxRef].defined_by = elements[el];
                if (elementName === "TXI05") invoice810.jurisdiction = elements[el];
                if (elementName === "TXI09") invoice810.taxes[taxRef].TIN = elements[el];
                
                if (elementName === "CAD01") invoice810.carrier = { type: carrierMethodMap[elements[el]]}
                if (elementName === "CAD04") invoice810.carrier.SCAC = elements[el];
                if (elementName === "CAD05") invoice810.carrier.name = elements[el];
                // if (elementName === "CAD07" && elements[el] === "2I") invoice810.carrier.tracking_number = "";
                // if (elementName === "CAD08" && invoice810.carrier.tracking_number !== undefined) invoice810.carrier.tracking_number = elements[el];

                // if (elementName === "SAC01") SAC.charge_type = SACChargeAllowanceMap[elements[el]]
                // if (elementName === "SAC02") SAC.type = SACTypeMap[elements[el]];
                // if (elementName === "SAC05") { 
                //     SAC.amount = elements[el];
                //     invoice810.additional_charges_and_allowances.push(SAC);
                //     SAC = {};
                // }

                if (elementName === "REF01" && referenceMap[elements[el]]) referenceCode = referenceMap[elements[el]];
                if (elementName === "REF02" && referenceCode) {
                    invoice810[referenceCode] ? invoice810[referenceCode] = new Set(invoice810[referenceCode].concat(elements[el])) : invoice810[referenceCode] = new Set([elements[el]]);
                    let tempValue = [];
                    for (let obj of invoice810[referenceCode].values()) {
                        tempValue.push(obj);
                    }
                    invoice810[referenceCode] = tempValue;
                }
                if (elementName === "ISS01") invoice810.shipment = {items: elements[el]};
                //ea only
                // if (elementName === "ISS02") invoice810.items = elements[el];
                if (elementName === "ISS03") invoice810.shipment.weight = elements[el];
                if (elementName === "ISS04") invoice810.shipment.weight_unit = unitsMap[elements[el]];
                if (elementName === "ISS05") invoice810.shipment.volume = elements[el];
                if (elementName === "ISS06") invoice810.shipment.volume_unit = unitsMap[elements[el]];

                if (elementName === "CTT01") invoice810.unique_items = elements[el];
            }
        }
        invoice810.line_items = Object.values(lineItems);

        // console.log("{")
        // Object.keys(invoice810).forEach(k => {
        //     if (typeof invoice810[k] !== "object") console.log(`    ${k}: ${invoice810[k]}`)
        //     else {
        //         console.log("    " + k + ": {")
        //         Object.keys(invoice810[k]).forEach(p => {
        //             console.log(`        ${p}: ${JSON.stringify(invoice810[k][p])}`)
        //         })
        //         console.log("    }")
        //     }
        // })
        // console.log("}");

        return invoice810;
    } catch (err) {
        return { error: err.message, segment: errorLocation.segment, position: errorLocation.position };
    }
}
export const read846 = (data) => {
    let errorLocation = {};
    try {
        const { elementDelimiter, lineTerminator } = getDelimiters(data)
        const lines = getSegments(data, lineTerminator)
        const inventoryAdvice = {
            senderID: "",
            receiverID: "",
            ISAControlNumber: "",
            GSControlNumber: "",
            STControlNumber: "",
            isTest: false,
            createdAt: "",
            periodOrReferenceNumber: "",
            lineItems: []
        }
        let currentLineItem = {}
        for (let line of lines) { 
            const elements = getElements(line, elementDelimiter)
            const segment = Object.values(elements)[0]
            errorLocation.segment = segment;
            errorLocation.element = ""
            if (segment === "ISA") {
                inventoryAdvice.senderID = elements.ISA06
                inventoryAdvice.receiverID = elements.ISA08
                inventoryAdvice.createdAt = new Date(Date.UTC(
                    `20` + elements.ISA09.slice(0,2), 
                    parseInt(elements.ISA09.slice(2,4).replaceAll("0", "")) - 1,
                    parseInt(elements.ISA09.slice(4,6).replaceAll("0", "")), 
                    parseInt(elements.ISA10.slice(0,2).replaceAll("0", "")),
                    parseInt(elements.ISA10.slice(2,4).replaceAll("0", ""))
                )).toISOString()
                inventoryAdvice.isTest = elements.ISA15 === "T"
                inventoryAdvice.ISAControlNumber = elements.ISA13
            }
            if (segment === "GS") {
                inventoryAdvice.GSControlNumber = elements.GS06
            }
            if (segment === "ST") {
                inventoryAdvice.STControlNumber = elements.ST02
            }
            if (segment === "BIA") {
                inventoryAdvice.periodOrReferenceNumber = elements.BIA03
            }
            if (segment === "LIN") {
                if (currentLineItem && Object.values(currentLineItem).length) {
                    inventoryAdvice.lineItems.push({...currentLineItem})
                    currentLineItem = {
                        sku: "",
                        description: "",
                        unitCost: null,
                        leadTime: "",
                        availableQuantity: 0
                    }
                }
                currentLineItem.upc = elements.LIN03
                currentLineItem.sku = elements.LIN05
                currentLineItem.modelNumber = elements.LIN07
            }
            if (segment === "PID") {
                currentLineItem.description = elements.PID05
            }
            if (segment === "CTP") {
                currentLineItem.unitCost = elements.CTP03
            }
            if (segment === "LDT") {
                currentLineItem.leadTime = elements.LDT02
            }
            if (segment === "QTY") {
                currentLineItem.availableQuantity = parseInt(elements.QTY02 || 0)
            }
            if (segment === "CTT") {
                if (currentLineItem && Object.values(currentLineItem).length) {
                    inventoryAdvice.lineItems.push({...currentLineItem})
                    currentLineItem = {}
                }        
            }
        }
        
        console.log(inventoryAdvice);
        console.log("reader version above")
        return inventoryAdvice
    } catch (err) {
        return { error: err.message, segment: errorLocation.segment, position: errorLocation.position };
    }
}
export const read856 = (data) => {
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    const lines = getSegments(data, lineTerminator)
    const asn = {
        senderID: "",
        receiverID: "",
        ISAControlNumber: "",
        GSControlNumber: "",
        STControlNumber: "",
        isTest: false,
        createdAt: "",
        shipment: {
            packages: 0,
            weight: 0,
            SCAC: "",
            transportMethod: "",
            contact: {
                name: "",
                phone: "",
                email: ""
            },
            customer: {
                address1: "",
                address2: "",
                city: "",
                state: "",
                zip: ""
            },
            shippedFrom: {
                address1: "",
                address2: "",
                city: "",
                state: "",
                zip: ""
            }
        },
        order: {
        },
        packages: {}
    }
    let currentHLCode = null
    let currentHLID = null
    let currentHLParentID = null
    let currentShippingParty = null
    for (let line of lines) {
        const elements = getElements(line, elementDelimiter)
        const segment = Object.values(elements)[0]
        if (segment === "ISA") {
            asn.senderID = elements.ISA06
            asn.receiverID = elements.ISA08
            asn.createdAt = new Date(Date.UTC(
                `20` + elements.ISA09.slice(0,2), 
                parseInt(elements.ISA09.slice(2,4).replaceAll("0", "")) - 1,
                parseInt(elements.ISA09.slice(4,6).replaceAll("0", "")), 
                parseInt(elements.ISA10.slice(0,2).replaceAll("0", "")),
                parseInt(elements.ISA10.slice(2,4).replaceAll("0", ""))
                
            )).toISOString()
            asn.isTest = elements.ISA15 === "T"
            asn.ISAControlNumber = elements.ISA13
        }
        if (segment === "GS") {
            asn.GSControlNumber = elements.GS06
        }
        if (segment === "ST") {
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

        if (segment === "TD1") {
            asn.shipment.packages = elements.TD102
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
                asn.shipment.customer = {
                    name: elements.N102,
                }
            }
            if (segment === "N3") {
                asn.shipment.customer.address1 = elements.N301
                asn.shipment.customer.address2 = elements.N302
            }
            if (segment === "N4") {
                asn.shipment.customer.city = elements.N401
                asn.shipment.customer.state = elements.N402
                asn.shipment.customer.zip = elements.N403
            }
        } else if (currentShippingParty === "SF") {
            if (segment === "N1") {
                asn.shipment.shippedFrom = {
                    name: elements.N102,
                }
            }
            if (segment === "N3") {
                asn.shipment.shippedFrom.address1 = elements.N301
                asn.shipment.shippedFrom.address2 = elements.N302
            }
            if (segment === "N4") {
                asn.shipment.shippedFrom.city = elements.N401
                asn.shipment.shippedFrom.state = elements.N402
                asn.shipment.shippedFrom.zip = elements.N403
            }
        }
        

        // ORDER LEVEL

        if (segment === "PRF") {
            asn.order = {
                purchaseOrder: elements.PRF01,
                createdAt: elements.PRF04
                    ? new Date(Date.UTC(elements.PRF04.slice(0, 4), parseInt(elements.PRF04.slice(4, 6)) - 1, elements.PRF04.slice(6, 8))).toISOString()
                    : ''
            }
        }

        // PACK LEVEL

        if (segment === "REF" && elements.REF01 === "2I") {
            if (currentHLCode !== "P") {
                asn.shipment.trackingNumber.add(elements.REF02)
            } else {
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

        if (segment === "LIN") {
            if (!asn.packages[currentHLParentID]) {
                asn.packages[currentHLParentID] = {
                    trackingNumber: "",
                    lineItems: {}
                }
            }
            if (!asn.packages[currentHLParentID].lineItems[currentHLID]) {
                asn.packages[currentHLParentID].lineItems[currentHLID] = {}
            }
            asn.packages[currentHLParentID].lineItems[currentHLID].upc = elements.LIN03
            asn.packages[currentHLParentID].lineItems[currentHLID].sku = elements.LIN05
            asn.packages[currentHLParentID].lineItems[currentHLID].modelNumber = elements.LIN07

        }
        if (segment === "SN1") {
            asn.packages[currentHLParentID].lineItems[currentHLID].quantity = elements.SN102
            asn.packages[currentHLParentID].lineItems[currentHLID].units = elements.SN103
        }
        if (segment === "PID") {
            asn.packages[currentHLParentID].lineItems[currentHLID].description = elements.PID05
        }
    }
    const parsedPackages = Object.values(asn.packages).map(pack => ({ ...pack, lineItems: Object.values(pack.lineItems) }))
    asn.packages = parsedPackages
    return asn
}
export function read997 (fileContents, eSeparator, subESeparator, SegSeparator, file) {
    const contents = fileContents // || fs.readFileSync(file, 'utf8');
    const elementSeparator = eSeparator || contents.substr(103,1);
    const subelementSeparator = subESeparator || contents.substr(104,1);
    const segmentSeparator = SegSeparator || contents.substr(105,1);
    const rows = contents.split(segmentSeparator).map(l => l.replace("\n", "").replace("\r", ""));

    const ack997 = {};

    const setMap = {
        "IN": "Invoice Information (810,819)",
        "IB": "Inventory Inquiry/Advice (846)",
        "PO": "Purchase Order (850)",
        "SH": "Ship Notice/Manifest (856)"
    }
    const statusMap = {
        //"A": "Accepted",
        "A": true,
        // "E": "Accepted But Errors Were Noted",
        // "M": "Rejected, Message Authentication Code (MAC) Failed",
        // "R": "Rejected",
        "R": false
        // "W": "Rejected, Assurance Failed Validity Tests",
        // "X": "Rejected, Content After Decryption Could Not Be Analyzed"
    }

    for (let row = 0; row < rows.length; row++) {
        // console.log(row+1 + " " + rows[row])
        const elements = rows[row].split(elementSeparator);
        let segmentName;

        for (let el = 0; el < elements.length; el++) {
            if (el === 0) segmentName = elements[el];
            let elementName = segmentName + String(el).padStart(2, 0)
            console.log("   " + elementName + ": " + elements[el]);
            
            if (elementName === "AK101") ack997.group_type = setMap[elements[el]];
            if (elementName === "AK101") ack997.group_code = elements[el];
            if (elementName === "AK102") ack997.group_control_number = elements[el];
            
            if (elementName === "AK201") ack997.transaction_set_type = elements[el];
            if (elementName === "AK202") ack997.transaction_set_control_number = elements[el];

            if (elementName === "AK501") ack997.st_accepted = statusMap[elements[el]];

            if (elementName === "AK901") ack997.gs_accepted = statusMap[elements[el]];
            if (elementName === "AK902") ack997.sets_in_group = elements[el];
            if (elementName === "AK903") ack997.sets_received = elements[el];
            if (elementName === "AK904") ack997.sets_accepted = elements[el];
        }
    }

    console.log("{")
    Object.keys(ack997).forEach(k => {
        if (typeof ack997[k] !== "object") console.log(`    ${k}: ${ack997[k]}`)
        else {
            console.log("    " + k + ": {")
            Object.keys(ack997[k]).forEach(p => {
                console.log(`        ${p}: ${JSON.stringify(ack997[k][p])}`)
            })
            console.log("    }")
        }
    })
    console.log("}");

    return ack997;
}