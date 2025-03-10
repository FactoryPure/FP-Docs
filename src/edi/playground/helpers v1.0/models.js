export const map810 = {
    vendor: { position: 6, segment: "ISA" },
    senderQualifier: { position: 5, segment: "ISA" },
    senderID: { position: 6, segment: "ISA" },
    receiverQualifier: { position: 7, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    currency: { position: "2", segment: "CUR" },
    entity: { position: 1, segment: "CUR" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STCode: { position: 1, segment: "ST" },
    STControlNumber: { position: 2, segment: "ST" },
    invoiceDate: { position: 1, segment: "BIG" },
    invoiceNumber: { position: 2, segment: "BIG" },
    isTest: { position: 8, segment: "ISA" },
    purchaseOrderDate: { position: 3, segment: "BIG" },
    purchaseOrderNumber: { position: 4, segment: "BIG" },
    BOLNumbers: { position: 2, segment: "REF" },
    trackingNumbers: { position: 2, segment: "REF" },
    notes: { position: 2, segment: "NTE" },
    shipFrom: {
        position: 1,
        segment: "N1",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        country: { position: 4, segment: "N4" },
        zip: { position: 3, segment: "N4" },
    },
    shipTo: {
        position: 1,
        segment: "N1",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        country: { position: 4, segment: "N4" },
        zip: { position: 3, segment: "N4" },
    },
    shippingTerms: {
        position: 1,
        segment: "FOB",
        shippingPayment: { position: 1, segment: "FOB" },
        deliveryAddressType: { position: 2, segment: "FOB" },
        description: { position: 3, segment: "FOB" },
        // FOB04/05 not used anymore - Incoterms: {position: 5, segment: "FOB"},
    },
    invoiceTerms: {
        position: 1,
        segment: "ITD",
        effectiveDate: { position: 2, segment: "ITD" },
        discount: {
            position: 1,
            segment: "ITD",
            percent: { position: 3, segment: "ITD" },
            dueDate: { position: 4, segment: "ITD" },
            daysDue: { position: 5, segment: "ITD" },
            total: { position: 8, segment: "ITD" },
        },
        dueDate: { position: 6, segment: "ITD" },
        daysDue: { position: 7, segment: "ITD" },
        description: { position: 12, segment: "ITD" },
    },
    total: { position: 1, segment: "TDS" },
    transactionType: { position: 7, segment: "BIG" },
    shipment: {
        position: 1,
        segment: "ISS",
        items: { position: 1, segment: "ISS" },
        weight: { position: 3, segment: "ISS" },
        weightUnit: { position: 4, segment: "ISS" },
        volume: { position: 5, segment: "ISS" },
        volumeUnit: { position: 6, segment: "ISS" },
    },
    taxes: {
        position: 1,
        segment: "TXI",
        name: { position: 1, segment: "TXI" },
        amount: { position: 2, segment: "TXI" },
        percent: { position: 3, segment: "TXI" },
        definedBy: { position: 4, segment: "TXI" },
        jurisdiction: { position: 5, segement: "TXI" },
    },
    jurisdiction: { position: 5, segment: "TXI" },
    carrier: {
        position: 1,
        segment: "CAD",
        type: { position: 1, segment: "CAD" },
        SCAC: { position: 4, segment: "CAD" },
        name: { position: 5, segment: "CAD" },
    },
    uniqueItems: { position: 1, segment: "CTT" },
    lineItems: {
        position: 1,
        segment: "IT1",
        quantity: { position: 2, segment: "IT1" },
        measurement: { position: 3, segment: "IT1" },
        price: { position: 4, segment: "IT1" },
        upc: { position: 7, segment: "IT1" },
        sku: { position: 9, segment: "IT1" },
        modelNumber: { position: 11, segment: "IT1" },
        description: { position: 5, segment: "PID" },
    },
}

export const model810 = {
    vendor: "!string",
    senderQualifier: "!string",
    senderID: "!string",
    receiverQualifier: "!string",
    receiverID: "!string",
    currency: "!string",
    entity: "!string",
    ISAControlNumber: "!string",
    GSControlNumber: "!string",
    STCode: "!string",
    STControlNumber: "!string",
    invoiceDate: "!string",
    invoiceNumber: "!string",
    isTest: "!boolean",
    purchaseOrderDate: "!string",
    purchaseOrderNumber: "!string",
    "?BOLNumbers": ["?string"],
    "?trackingNumbers": ["?string"],
    "?notes": ["?string"],
    "?shipFrom": {
        name: "!string",
        address1: "!string",
        address2: "?string",
        city: "!string",
        state: "!string",
        zip: "!string",
        country: "?string",
    },
    shipTo: {
        name: "!string",
        address1: "!string",
        address2: "?string",
        city: "!string",
        state: "!string",
        zip: "!string",
        country: "?string",
    },
    shippingTerms: {
        shippingPayment: "!string",
        deliveryAddressType: "!string",
        // FOB04/05 not used anymore - Incoterms: 'Ex Works'
    },
    invoiceTerms: {
        effectiveDate: "!string",
        "?discount": {
            total: "!string",
            daysDue: "Cstring",
            dueDate: "Cstring",
        },
        daysDue: "Cstring",
        dueDate: "Cstring",
    },
    total: "!string",
    shipment: {
        items: "!string",
        weight: "?string",
        weightUnit: "?string",
        volume: "?string",
        volumeUnit: "?string",
    },
    "?taxes": [
        {
            name: "!string",
            jurisdiction: "?string",
            amount: "Cstring",
            percent: "Cstring",
            definedBy: "?string",
        },
    ],
    jurisdiction: "?string",
    carrier: {
        type: "?string",
        SCAC: "!string",
        name: "!string",
    },
    uniqueItems: "!string",
    lineItems: [
        {
            quantity: "!string",
            measurement: "?string",
            price: "!string",
            description: "?string",
            sku: "?string",
            upc: "?string",
            modelNumber: "?string",
        },
    ],
}

export const map846 = {
    vendor: { position: 6, segment: "ISA" },
    senderQualifier: { position: 5, segment: "ISA" },
    senderID: { position: 6, segment: "ISA" },
    receiverQualifier: { position: 7, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    STCode: { position: 1, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    createdAt: { position: 4, segment: "BIA" },
    periodOrReferenceNumber: { position: 3, segment: "BIA" },
    lineItems: {
        position: 0,
        segment: "LIN/PID/CTP/LDT/QTY",
        upc: { position: 3, segment: "LIN" },
        sku: { position: 5, segment: "LIN" },
        modelNumber: { position: 7, segment: "LIN" },
        locationId: { position: 9, segment: "LIN" },
        description: { position: 5, segment: "PID" },
        unitCost: { position: 3, segment: "CTP" },
        leadTime: { position: 2, segment: "LDT" },
        availableQuantity: { position: 2, segment: "QTY" },
    },
}

export const model846 = {
    vendor: "!string",
    senderQualifier: "!string",
    senderID: "!string",
    receiverQualifier: "!string",
    receiverID: "!string",
    ISAControlNumber: "!string",
    GSControlNumber: "!string",
    STControlNumber: "!string",
    STCode: "!string",
    isTest: "!boolean",
    createdAt: "!string",
    periodOrReferenceNumber: "!string",
    lineItems: [
        {
            upc: "Cstring",
            sku: "Cstring",
            modelNumber: "Cstring",
            locationId: "?string",
            description: "?string",
            availableQuantity: "!number",
            leadTime: "?number",
        },
    ],
}

export const map850 = {
    vendor: { position: 6, segment: "ISA" },
    senderQualifier: { position: 5, segment: "ISA" },
    senderID: { position: 6, segment: "ISA" },
    receiverQualifier: { position: 7, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    STCode: { position: 1, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    purpose: { position: 1, segment: "BEG" },
    purchaseOrderNumber: { position: 3, segment: "BEG" },
    createdAt: { position: 5, segment: "BEG" },
    note: { position: 1, segment: "MSG" },
    carrierInfo: {
        position: 0,
        segment: "REF/TD5/SAC/FOB",
        accountNumber: { position: 2, segment: "REF" },
        SCACCode: { position: 3, segment: "TD5" },
        carrierName: { position: 5, segment: "TD5" },
        insuranceCost: { position: 5, segment: "SAC" },
        deliveryAddressType: { position: 2, segment: "FOB" },
        withLiftGate: { position: 3, segment: "FOB" },
    },
    "?shipFrom": {
        position: 0,
        segment: "N1/N3/N4",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        zip: { position: 3, segment: "N4" },
        country: { position: 4, segment: "N4" },
    },
    shipTo: {
        position: 0,
        segment: "N1/N3/N4",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        zip: { position: 3, segment: "N4" },
        country: { position: 4, segment: "N4" },
    },
    lineItems: {
        position: 0,
        segment: "PO1",
        quantity: { position: 2, segment: "PO1" },
        price: { position: 4, segment: "PO1" },
        upc: { position: 7, segment: "PO1" },
        sku: { position: 9, segment: "PO1" },
        modelNumber: { position: 11, segment: "PO1" },
    },
}

export const model850 = {
    vendor: "!string",
    senderQualifier: "!string",
    senderID: "!string",
    receiverQualifier: "!string",
    receiverID: "!string",
    ISAControlNumber: "!string",
    GSControlNumber: "!string",
    STControlNumber: "!string",
    STCode: "!string",
    isTest: "!boolean",
    purpose: "!string",
    purchaseOrderNumber: "!string",
    createdAt: "!string",
    carrierInfo: {
        accountNumber: "?string",
        SCACCode: "?string",
        carrierName: "?string",
        deliveryAddressType: "!string",
    },
    "?shipFrom": {
        name: "?string",
        address1: "?string",
        address2: "?string",
        city: "?string",
        state: "?string",
        zip: "?string",
    },
    shipTo: {
        name: "!string",
        phone: "?string",
        address1: "!string",
        address2: "?string",
        city: "!string",
        state: "!string",
        zip: "!string",
    },
    lineItems: [
        {
            quantity: "!number",
            price: "!number",
            upc: "Cstring",
            sku: "Cstring",
            modelNumber: "Cstring",
        },
    ],
}

export const map855 = {
    vendor: { position: 6, segment: "ISA" },
    senderQualifier: { position: 5, segment: "ISA" },
    senderID: { position: 6, segment: "ISA" },
    receiverQualifier: { position: 7, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    STCode: { position: 1, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    purpose: { position: 1, segment: "BAK" },
    acceptanceStatus: { position: 2, segment: "BAK" },
    purchaseOrderNumber: { position: 3, segment: "BAK" },
    note: { position: 1, segment: "MSG" },
    insuranceCost: { position: 5, segment: "SAC" },
    "?shipFrom": {
        position: 0,
        segment: "N1/N3/N4",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        zip: { position: 3, segment: "N4" },
        country: { position: 4, segment: "N4" },
    },
    shipTo: {
        position: 0,
        segment: "N1/N3/N4",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        zip: { position: 3, segment: "N4" },
        country: { position: 4, segment: "N4" },
    },
    lineItems: {
        position: 0,
        segment: "PO1",
        quantity: { position: 2, segment: "PO1" },
        price: { position: 4, segment: "PO1" },
        upc: { position: 7, segment: "PO1" },
        sku: { position: 9, segment: "PO1" },
        modelNumber: { position: 11, segment: "PO1" },
        acceptanceStatus: { position: 1, segment: "ACK" },
        acceptedQuantity: { position: 2, segment: "ACK" },
    },
}
export const model855 = {
    vendor: "!string",
    senderQualifier: "!string",
    senderID: "!string",
    receiverQualifier: "!string",
    receiverID: "!string",
    ISAControlNumber: "!string",
    GSControlNumber: "!string",
    STControlNumber: "!string",
    STCode: "!string",
    isTest: "!boolean",
    purpose: "!string",
    purchaseOrderNumber: "!string",
    "?shipFrom": {
        name: "!string",
        address1: "!string",
        address2: "?string",
        city: "!string",
        state: "!string",
        zip: "!string",
    },
    shipTo: {
        name: "!string",
        phone: "?string",
        address1: "!string",
        address2: "?string",
        city: "!string",
        state: "!string",
        zip: "!string",
    },
    lineItems: [
        {
            quantity: "!number",
            price: "!number",
            upc: "Cstring",
            sku: "Cstring",
            modelNumber: "Cstring",
            acceptanceStatus: "!string",
            acceptedQuantity: "?number",
        },
    ],
}

export const map856 = {
    vendor: { position: 6, segment: "ISA" },
    senderQualifier: { position: 5, segment: "ISA" },
    senderID: { position: 6, segment: "ISA" },
    receiverQualifier: { position: 7, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    STCode: { position: 1, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    createdAt: { position: 3, segment: "BSN" },
    shipment: {
        position: 0,
        segment: "HL",
        packages: { position: 2, segment: "TD1" },
        SCAC: { position: 3, segment: "TD5" },
        transportMethod: { position: 4, segment: "TD5" },
        shipTo: {
            position: 0,
            segment: "N1/N3/N4",
            name: { position: 2, segment: "N1" },
            phone: { position: 4, segment: "N1" },
            address1: { position: 1, segment: "N3" },
            address2: { position: 2, segment: "N3" },
            city: { position: 1, segment: "N4" },
            state: { position: 2, segment: "N4" },
            zip: { position: 3, segment: "N4" },
        },
        shipFrom: {
            position: 0,
            segment: "N1/N3/N4",
            name: { position: 2, segment: "N1" },
            address1: { position: 1, segment: "N3" },
            address2: { position: 2, segment: "N3" },
            city: { position: 1, segment: "N4" },
            state: { position: 2, segment: "N4" },
            zip: { position: 3, segment: "N4" },
        },
    },
    order: {
        position: 0,
        segment: "HL",
        purchaseOrder: { position: 1, segment: "PRF" },
        createdAt: { position: 4, segment: "PRF" },
    },
    packages: {
        position: 0,
        segment: "HL",
        trackingNumber: { position: 2, segment: "REF" },
        lineItems: {
            position: 0,
            segment: "SN1/LIN",
            quantity: { position: 2, segment: "SN1" },
            units: { position: 3, segment: "SN1" },
            upc: { position: 3, segment: "LIN" },
            sku: { position: 5, segment: "LIN" },
            modelNumber: { position: 7, segment: "LIN" },
        },
    },
}

export const model856 = {
    vendor: "!string",
    senderQualifier: "!string",
    senderID: "!string",
    receiverQualifier: "!string",
    receiverID: "!string",
    ISAControlNumber: "!string",
    GSControlNumber: "!string",
    STControlNumber: "!string",
    STCode: "!string",
    isTest: "!boolean",
    createdAt: "!string",
    shipment: {
        packages: "!number",
        SCAC: "!string",
        transportMethod: "!string",
        shipTo: {
            name: "!string",
            address1: "!string",
            address2: "?string",
            city: "!string",
            state: "!string",
            zip: "!string",
            country: "?string",
        },
        "?shipFrom": {
            name: "!string",
            address1: "!string",
            address2: "?string",
            city: "!string",
            state: "!string",
            zip: "!string",
            country: "?string",
        },
    },
    order: {
        purchaseOrder: "!string",
        createdAt: "?string",
    },
    packages: [
        {
            trackingNumber: "!string",
            lineItems: [
                {
                    quantity: "!number",
                    units: "?string",
                    upc: "Cstring",
                    sku: "Cstring",
                    modelNumber: "Cstring",
                },
            ],
        },
    ],
}

export const map997 = {
    vendor: { position: 6, segment: "ISA" },
    senderQualifier: { position: 5, segment: "ISA" },
    senderID: { position: 6, segment: "ISA" },
    receiverQualifier: { position: 7, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    STCode: { position: 1, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    createdAt: { position: 3, segment: "BSN" },
    acknowledgedGroupType: { position: 1, segment: "AK1" },
    acknowledgedGroupCode: { position: 1, segment: "AK1" },
    acknowledgedGroupControlNumber: { position: 2, segment: "AK1" },
    acknowledgedTransactionSets: {
        type: { position: 1, segment: "AK2" },
        controlNumber: { position: 2, segment: "AK2" },
        accepted: { position: 1, segment: "AK5" },
    },
    functionalGroupAccepted: { position: 1, segment: "AK9" },
    totalTransactionSets: { position: 2, segment: "AK9" },
    receivedTransactionSets: { position: 3, segment: "AK9" },
    acceptedTransactionSets: { position: 4, segment: "AK9" },
}

export const model997 = {
    vendor: "!string",
    senderQualifier: "!string",
    senderID: "!string",
    receiverQualifier: "!string",
    receiverID: "!string",
    ISAControlNumber: "!string",
    GSControlNumber: "!string",
    STControlNumber: "!string",
    STCode: "!string",
    isTest: "!boolean",
    createdAt: "!string",
    acknowledgedGroupType: "!string",
    acknowledgedGroupCode: "!string",
    acknowledgedGroupControlNumber: "!string",
    acknowledgedTransactionSets: [
        {
            type: "!string",
            controlNumber: "!string",
            accepted: "!boolean",
        },
    ],
    functionalGroupAccepted: "!boolean",
    totalTransactionSets: "?number",
    receivedTransactionSets: "?number",
    acceptedTransactionSets: "?number",
}
