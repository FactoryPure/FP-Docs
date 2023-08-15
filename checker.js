const testObject = {
  test: "1",
  best: [
    {
      regressed: 1233,
      impressed: 123,
    },
    {
      regressed: "1233",
      impressed: "string",
      upc: "Cstring",
      sku: "Cstring",
      model: "Cstring"
    }
  ],
  rest: {
    vest: "1"
  },
}
const testModel = {
  test: "!string",
  best: [
    {
      regressed: "!number",
      impressed: "?string",
      upc: "Cstring",
      sku: "Cstring",
      model: "Cstring"
    }
  ],
  rest: {
    vest: "!string",
    lest: "?number",
    nest: "!number",
    guessed: {
      stressed: {
        pressed: "!string"
      }
    }
  },
}
const testMap = {
  test: { position: 1, segment: "N1"},
  best: [
    {
      regressed: { position: 1, segment: "N1"},
      impressed: { position: 1, segment: "N1"},
      upc: { position: 1, segment: "N1"},
      sku: { position: 2, segment: "N1"},
      model: { position: 3, segment: "N1"}
    }
  ],
  rest: {
    vest: { position: 1, segment: "N1"},
    lest: { position: 1, segment: "N1"},
    nest: { position: 1, segment: "N1"},
    guessed: {
      position: 0, 
      segment: "N1",
      stressed: {
        position: 0, 
        segment: "N1",
        pressed: { position: 1, segment: "N1"}
      }
    }
  },
}

console.log(validateEDIParserResult(testObject, testModel, testMap, "purchaseOrder")[1])

// ------- TESTING WITH EDI DOC -------- //

const getDelimiters = (data) => {
  const elementDelimiter = data[103]
  const compositeDelimiter = data[104]
  const lineTerminator = data[105]
  return { elementDelimiter, compositeDelimiter, lineTerminator }
}
const getSegments = (data, lineSeparator) => {
  return data.split(lineSeparator).filter(l => l.length)
}
const getElements = (line, separator) => {
  const elements = line.split(separator)
  const segmentType = elements[0]
  return Object.fromEntries(elements.map((el, index) => [`${segmentType}` + `0${index}`.slice(-2), el]))
}

const map850 = {
  senderID: { position: 6, segment: "ISA" },
  receiverID: { position: 8, segment: "ISA" },
  ISAControlNumber: { position: 13, segment: "ISA" },
  GSControlNumber: { position: 6, segment: "GS" },
  STControlNumber: { position: 2, segment: "ST" },
  isTest: { position: 15, segment: "ISA" },
  purpose: { position: 1, segment: "BEG" },
  purchaseOrderNumber: { position: 3, segment: "BEG" },
  createdAt: { position: 5, segment: "BEG" },
  note: { position: 1, segment: "MSG" },
  carrierInfo: {
    accountNumber: { position: 2, segment: "REF" },
    SCACCode: { position: 3, segment: "TD5" },
    carrierName: { position: 5, segment: "TD5" },
    insuranceCost: { position: 5, segment: "SAC" },
    deliveryAddressType: { position: 2, segment: "FOB"},
    withLiftGate: { position: 3, segment: "FOB"}
  },
  shipFrom: {
    name: { position: 2, segment: "N1"},
    address1: { position: 1, segment: "N3"},
    address2: { position: 2, segment: "N3"},
    city: { position: 1, segment: "N4"},
    state: { position: 2, segment: "N4"},
    zip: { position: 3, segment: "N4"},
    country: { position: 4, segment: "N4"}
  },
  shipTo: {
    name: { position: 2, segment: "N1"},
    address1: { position: 1, segment: "N3"},
    address2: { position: 2, segment: "N3"},
    city: { position: 1, segment: "N4"},
    state: { position: 2, segment: "N4"},
    zip: { position: 3, segment: "N4"},
    country: { position: 4, segment: "N4"}
  },
  lineItems: [
    {
      quantity: { position: 2, segment: "PO1" },
      price: { position: 4, segment: "PO1" },
      upc: { position: 7, segment: "PO1" },
      sku: { position: 9, segment: "PO1" },
      modelNumber: { position: 11, segment: "PO1" }
    }
  ]
}

const read850 = (data) => {
    const purchaseOrder = {
        senderID: "",
        receiverID: "",
        ISAControlNumber: "",
        GSControlNumber: "",
        STControlNumber: "",
        isTest: false,
        purpose: "",
        purchaseOrderNumber: "",
        createdAt: "",
        note: "",
        carrierInfo: {
            accountNumber: "",
            SCACCode: "",
            carrierName: "",
            insuranceCost: 0,
            deliveryAddressType: "",
            withLiftGate: false
        },
        shipFrom: {
            name: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: ""
        },
        shipTo: {
            name: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: ""
        },
        lineItems: []
    }
    const addLineItem = ({
        quantity,
        price,
        upc,
        sku,
        modelNumber
    }) => {
        purchaseOrder.lineItems.push({
            quantity,
            price,
            upc,
            sku,
            modelNumber
        })
    }
    const purposeMap = {
        "00": "ORIGINAL",
        "01": "CHANGE",
        "05": "CANCEL"
    }
    const addressTypeMap = {
        "H": "Home Address",
        "BS": "Place of Business",
        "TM": "Terminal"
    }
    const { elementDelimiter, lineTerminator } = getDelimiters(data)
    let currentShippingParty = ""
    const lines = getSegments(data, lineTerminator)
    for (let line of lines) { 
        const elements = getElements(line, elementDelimiter)
        const segment = Object.values(elements)[0]
        if (segment === "ISA") {
            purchaseOrder.senderID = elements.ISA06
            purchaseOrder.receiverID = elements.ISA08
            purchaseOrder.createdAt = new Date(Date.UTC(
                `20` + elements.ISA09.slice(0,2), 
                parseInt(elements.ISA09.slice(2,4).replaceAll("0", "")) - 1,
                parseInt(elements.ISA09.slice(4,6).replaceAll("0", "")), 
                parseInt(elements.ISA10.slice(0,2).replaceAll("0", "")),
                parseInt(elements.ISA10.slice(2,4).replaceAll("0", ""))
            )).toISOString()
            purchaseOrder.isTest = elements.ISA15 === "T"
            purchaseOrder.ISAControlNumber = elements.ISA13
        }
        if (segment === "GS") {
            purchaseOrder.GSControlNumber = elements.GS06
        }
        if (segment === "ST") {
            purchaseOrder.STControlNumber = elements.ST02
        }
        if (segment === "BEG") {
            purchaseOrder.purpose = purposeMap[elements.BEG01]
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
                purchaseOrder.shipTo.address2 = elements.N302 || ""
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
                purchaseOrder.shipFrom.name = elements.N102
            }
            if (segment === "N3") {
                purchaseOrder.shipFrom.address1 = elements.N301
                purchaseOrder.shipFrom.address2 = elements.N302 || ""
            }
            if (segment === "N4") {
                purchaseOrder.shipFrom.city = elements.N401
                purchaseOrder.shipFrom.state = elements.N402
                purchaseOrder.shipFrom.zip = elements.N403
                purchaseOrder.shipFrom.country = elements.N404
            }
        }
        if (segment === "FOB") {
            purchaseOrder.carrierInfo.deliveryAddressType = addressTypeMap[elements.FOB02]
            purchaseOrder.carrierInfo.withLiftGate = elements.FOB03 === "WITHLIFTGATE"
        }
        if (segment === "TD5") {
            purchaseOrder.carrierInfo.SCACCode = elements.TD503
            purchaseOrder.carrierInfo.carrierName = elements.TD505
        }
        if (segment === "PO1") {
            addLineItem({
                quantity: parseInt(elements.PO102),
                price: parseFloat(elements.PO104),
                upc: elements.PO107 || "",
                sku: elements.PO109 || "",
                modelNumber: elements.PO111 || ""
            })
        }
    }
    return purchaseOrder
}
const model850 = {
  senderID: '!string',
  receiverID: '!string',
  ISAControlNumber: '!string',
  GSControlNumber: '!string',
  STControlNumber: '!string',
  isTest: "!boolean",
  purpose: '!string',
  purchaseOrderNumber: '!string',
  createdAt: '!string',
  carrierInfo: {
    accountNumber: '!string',
    SCACCode: '!string',
    carrierName: '!string',
    deliveryAddressType: '!string',
  },
  shipFrom: {
    name: '!string',
    address1: '!string',
    address2: '?string',
    city: '!string',
    state: '!string',
    zip: '!string',
  },
  shipTo: {
    name: '!string',
    address1: '!string',
    address2: '?string',
    city: '!string',
    state: '!string',
    zip: '!string',
  },
  lineItems: [
    {
      quantity: "!number",
      price: "!number",
      upc: "Cstring",
      sku: "Cstring",
      modelNumber: "Cstring"
    }
  ]
}

const parsed850 = read850(`ISA*00*          *00*          *ZZ*FACTORYPUREEDIP*ZZ*VENDOREDIID    *230811*1145*U*00400*000000001*O*P*|~
GS*PO*FACTORYPUREEDIP*VENDOREDIID*20230811*1145*1*X*004010~
ST*850*0001~
BEG*00*NE*99999**20230811~
REF*11*123456789~
SAC*A*D980***10000~
N9*L1*MESSAGE TO FOLLOW~
MSG*Customer will need liftgate~
N1*SF*Vendor Warehouse~
N3*123 St~
N4*CITY*TX*78233*US~
N1*ST*Customer Name~
N3*321 Dr~
N4*CITY*TX*78704*US~
FOB*CC*H*WITHLIFTGATE~
TD5*B*2*AACT*T*AAA Cooper~
PO1*001*1*EA*1234.56*PE***SK*VENDOR-SKU~
CTT*1~
SE*17*0001~
GE*1*1~
IEA*1*000000001~`.replaceAll("\n", ""))
console.log(validateEDIParserResult(parsed850, model850, map850, "purchaseOrder")[1])