export const map810 = {
    currency: {position: "2", segment: "CUR"},
    entity: {position: 1, segment: "CUR"},
    vendor: {position: 6, segment: "ISA"},
    ISAControlNumber: {position: 13, segment: "ISA"},
    GSControlNumber: {position: 6, segment: "GS"},
    STCode: {position: 1, segment: "ST"},
    STControlNumber: {position: 2, segment: "ST"},
    invoice_date: {position: 1, segment: "BIG"},
    invoice_number: {position: 2, segment: "BIG"},
    isTest: {position: 8, segment: "ISA"},
    purchase_order_date: {position: 3, segment: "BIG"},
    purchase_order_number: {position: 4, segment: "BIG"},
    bill_of_lading_number: {position: 2, segment: "REF"},
    tracking_number: {position: 2, segment: "REF"},
    notes: {position: 2, segment: "NTE"},
    ship_from: {
      position: 1, 
      segment: "N1",
      name: {position: 2, segment: "N1"},
      // N103/N104 no longer used
      // set_by: {position: 3, segment: "N1"},
      // set_by_id: {position: 4, segment: "N1"},
      address: {position: 1, segment: "N3"},
      city: {position: 1, segment: "N4"},
      state: {position: 2, segment: "N4"},
      country: {position: 4, segment: "N4"},
      zip: {position: 3, segment: "N4"},
  },
    ship_to: {
        position: 1, 
        segment: "N1",
        name: {position: 2, segment: "N1"},
        // N103/04 no longer used
        // set_by: {position: 3, segment: "N1"},
        // set_by_id: {position: 4, segment: "N1"},
        address: {position: 1, segment: "N3"},
        city: {position: 1, segment: "N4"},
        state: {position: 2, segment: "N4"},
        country: {position: 4, segment: "N4"},
        zip: {position: 3, segment: "N4"},
    },
    shipping_terms: {
        position: 1,
        segment: "FOB",
        shipping_payment: {position: 1, segment: "FOB"},
        delivery_location: {position: 2, segment: "FOB"},
        description: {position: 3, segment: "FOB"},
        // FOB04/05 not used anymore - Incoterms: {position: 5, segment: "FOB"},
    },
    invoice_terms: {
        position: 1,
        segment: "ITD",
        effective_date: {position: 2, segment: "ITD"},
        discount: {
            position: 1,
            segment: "ITD",
            percent: {position: 3, segment: "ITD"},
            due_date: {position: 4, segment: "ITD"},
            days_due: {position: 5, segment: "ITD"},
            total: {position: 8, segment: "ITD"},
        },
        due_date: {position: 6, segment: "ITD"},
        days_due: {position: 7, segment: "ITD"},
        description: {position: 12, segment: "ITD"}
    },
    total: {position: 1, segment: "TDS"},
    transaction_type: {position: 7, segment: "BIG"},
    shipment: {
        position: 1, 
        segment: "ISS",
        items: {position: 1, segment: "ISS"},
        weight: {position: 3, segment: "ISS"},
        weight_unit: {position: 4, segment: "ISS"},
        volume: {position: 5, segment: "ISS"},
        volume_unit: {position: 6, segment: "ISS"},
    },
    taxes: {
        position: 1,
        segment: "TXI",
        'Federal Value-added Tax (GST) on Goods': {
          position: 1,
          segment: "TXI",
          amount: {position: 2, segment: "TXI"},
          percent: {position: 3, segment: "TXI"},
          defined_by: {position: 4, segment: "TXI"},
        }
    },
    jurisdiction: {position: 5, segment: "TXI"},
    carrier: {
        position: 1,
        segment: "CAD",
        type: {position: 1, segment: "CAD"},
        SCAC: {position: 4, segment: "CAD"},
        name: {position: 5, segment: "CAD"},
        // tracking_number: {position: 8, segment: "CAD"},
    },
    unique_items: {position: 1, segment: "CTT"},
    line_items:
        {
            position: 1,
            segment: "IT1",
            quantity: {position: 2, segment: "IT1"},
            measurement: {position: 3, segment: "IT1"},
            price: {position: 4, segment: "IT1"},
            upc: {position: 7, segment: "IT1"},
            vendor_sku: {position: 9, segment: "IT1"},
            model_number: {position: 11, segment: "IT1"},
            description: {position: 5, segment: "PID"},
        }
  }
  export const model810 = {
      currency: "a",
      entity: "a",
      vendor: 'a',
      ISAControlNumber: '000003438',
      GSControlNumber: '1320',
      STCode: '810',
      STControlNumber: '1004',
      invoice_date: '20101204',
      invoice_number: '217224',
      isTest: false,
      purchase_order_date: '20101204',
      purchase_order_number: 'P792940',
      bill_of_lading_number: [],
      tracking_number: [],
      notes: [],
      ship_from: {
        name: 'Vendor Warehouse',
        address: '123 St',
        city: 'City',
        state: 'TX',
        zip: '78233',
        country: 'US'
      },
      ship_to: {
          name: 'Gabe Bigelow',
          // N103/04 no longer used
          // set_by: '92',
          // set_by_id: '00001',
          address: '100 Madison Street',
          city: 'Gould',
          state: 'AR',
          country: "USA",
          zip: '71643'
      },
      shipping_terms: {
          shipping_payment: "Collect",
          delivery_location: "Home",
          description: 'This is the description',
          // FOB04/05 not used anymore - Incoterms: 'Ex Works'
      },
      invoice_terms: { 
          effective_date: '20101204',
          conditionals: [
              {
                  discount: {
                      total: "0",
                      conditionals: [
                          ["days_due", "due_date"]
                      ]
                  }
              },
              ["days_due", "due_date"],
          ]
      },
      total: '21740',
      shipment: {
          items: '2',
          weight: '123',
          weight_unit: 'Kilogram',
          volume: '10000',
          volume_unit: 'Cubic Centimeter'
      },
      taxes: {
          'Federal Value-added Tax (GST) on Goods': { amount: '10000', percent: '', defined_by: 'VD' }
      },
      jurisdiction: 'OH',
      carrier: {
          type: "Best Way (Shippers option)",
          SCAC: 'RNLO',
          name: 'R & L Carriers',
        //  tracking_number: '624534672'
      },
      unique_items: '8',
      line_items: [
          {
              quantity: '4',
              measurement: 'EA',
              price: '8.60',
              description: "A",
              conditionals: [
                ["vendor_sku", "upc", "model_number"]
              ]
          }
      ]
  }
  
  export const map846 = {
    senderID: { position: 6, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    createdAt: { position: 4, segment: "BIA" },
    periodOrReferenceNumber: { position: 3, segment: "BIA" },
    lineItems: {
      upc: { position: 3, segment: "LIN" },
      sku: { position: 5, segment: "LIN" },
      modelNumber: { position: 7, segment: "LIN" },
      description: { position: 5, segment: "PID" },
      unitCost: { position: 3, segment: "CTP" },
      leadTime: { position: 2, segment: "LDT" },
      availableQuantity: { position: 2, segment: "QTY" }
    }
  }
  export const model846 = {
    senderID: "a",
    receiverID: "a",
    ISAControlNumber: "a",
    GSControlNumber: "a",
    STControlNumber: "a",
    isTest: false,
    createdAt: "a",
    periodOrReferenceNumber: "a",
    lineItems: [
      {
        sku: "a",
        description: "a",
        availableQuantity: 0
      }
    ]
  };
  
  export const map850 = {
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
        UPC: { position: 7, segment: "PO1" },
        SKU: { position: 9, segment: "PO1" },
        modelNumber: { position: 11, segment: "PO1" }
      }
    ]
  }
  export const model850 = {
    senderID: 'a',
    receiverID: 'a',
    ISAControlNumber: 'a',
    GSControlNumber: 'a',
    STControlNumber: 'a',
    isTest: false,
    purpose: 'a',
    purchaseOrderNumber: 'a',
    createdAt: 'a',
    carrierInfo: {
      accountNumber: 'a',
      SCACCode: 'a',
      carrierName: 'a',
      deliveryAddressType: 'a',
    },
    shipFrom: {
      name: 'a',
      address1: 'a',
      city: 'a',
      state: 'a',
      zip: 'a',
    },
    shipTo: {
      name: 'a',
      address1: 'a',
      city: 'a',
      state: 'a',
      zip: 'a',
    },
    lineItems: [
      {
        quantity: 1,
        price: "1234",
        conditionals: [
          "upc", "sku", "modelNumber"
        ]
      }
    ]
  }
  
  export const map856 = {
    senderID: { position: 6, segment: "ISA" },
    receiverID: { position: 8, segment: "ISA" },
    ISAControlNumber: { position: 13, segment: "ISA" },
    GSControlNumber: { position: 6, segment: "GS" },
    STControlNumber: { position: 2, segment: "ST" },
    isTest: { position: 15, segment: "ISA" },
    createdAt: { position: 3, segment: "BSN" },
    shipment: {
      position: 1,
      segment: "HL",
      packages: { position: 2, segment: "TD1" },
      SCAC: { position: 3, segment: "TD5" },
      transportMethod: { position: 4, segment: "TD5" },
      customer: {
        position: 1,
        segment: "N1",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        zip: { position: 3, segment: "N4" }
      },
      shippedFrom: {
        position: 1,
        segment: "N1",
        name: { position: 2, segment: "N1" },
        address1: { position: 1, segment: "N3" },
        address2: { position: 2, segment: "N3" },
        city: { position: 1, segment: "N4" },
        state: { position: 2, segment: "N4" },
        zip: { position: 3, segment: "N4" }
      }
    },
    order: {
      position: 1,
      segment: "HL",
      purchaseOrder: { position: 1, segment: "PRF" },
      createdAt: { position: 4, segment: "PRF" }
    },
    packages: {
      position: 1,
      segment: "HL",
      trackingNumber: { position: 2, segment: "REF" },
      lineItems: {
        position: 1,
        segment: "LIN",
        quantity: { position: 2, segment: "SN1" },
        units: { position: 3, segment: "SN1" },
        upc: { position: 3, segment: "LIN" },
        sku: { position: 5, segment: "LIN" },
        modelNumber: { position: 7, segment: "LIN" }
      }
    }
  };
  export const model856 = {
    senderID: "a",
    receiverID: "a",
    ISAControlNumber: "a",
    GSControlNumber: "a",
    STControlNumber: "s",
    isTest: false,
    createdAt: "a",
    shipment: {
        packages: 0,
        SCAC: "a",
        transportMethod: "a",
        contact: {
            name: "a",
            phone: "a",
            email: "a"
        },
        customer: {
            address1: "a",
            city: "a",
            state: "a",
            zip: "a"
        },
        shippedFrom: {
          address1: "a",
          city: "a",
          state: "a",
          zip: "a"
        }
    },
    order: {
      purchaseOrder: "a",
      createdAt: "a"
    },
    packages: [
      {
        trackingNumber: "a",
        lineItems: [
          {
            quantity: 0,
            units: "EA",
            conditionals: [
              ["upc", "sku", "modelNumber"]
            ]
          }
        ]
      }
    ]
  }
  
  
export function testAgainstModel (object, model, modelMap, pathHead) {
    const errorHolder = [];
  
    function checkArrayObjectsForUndefined (object, pathName, model) {
      // console.log("\n");
      // console.log(pathName)
      let modelPath = pathName.filter(p => p !== pathHead);
      let modelSection = model;
      while (modelPath.length) {
        modelSection = modelSection[modelPath.splice(0,1)];
      }
      if (typeof modelSection === "object" && modelSection[0]){
        for (let i = 0; i < object.length; i++) {
          if (typeof object[i] === 'object') {
            const missingKeys = Object.keys(modelSection[0]).filter(prop => !object[i][prop] && prop !== "conditionals") || [];
            if (Object.keys(modelSection[0]).includes("conditionals")) {
              checkConditionals(object[i], pathName, model);
            }
            for (let key of missingKeys) {
              let curPath = pathName.filter(p => p !== pathHead);
              let curObject = modelMap[curPath.splice(0,1)];
              while (curPath.length) {
                curObject = curObject[curPath.splice(0,1)];
              }
              curObject = curObject[key];
  
              errorHolder.push({
                position: curObject.position || "",
                segment: curObject.segment || "",
                message: `${pathName.join(".")}[${i}] malformed: must include ${missingKeys.join(" and ")}`
              });
            }
          }
        }
      }
    }
    function checkForUndefined (object, pathName) {
        const keys = Object.keys(object);
        let curPath = pathName.filter(p => p !== pathHead);
        let curObject = modelMap[curPath.splice(0,1)] || modelMap;
        while (curPath.length) {
          curObject = curObject[curPath.splice(0,1)];
        }
        if (keys.length === 0) {
          errorHolder.push({
            position: curObject.position,
            segment: curObject.segment,
            message: `${pathName.join(".")} is defined but is malformed or is missing data.`
          });
          // errorHolder.push(`${pathName.join(".")} is defined but is malformed or is missing data.`)
        }
        if (keys.some(p => (object[p] === undefined || object[p] === "") && object[p] !== 0)) {
            keys.forEach(p => {
                if ((object[p] === undefined || object[p] === "") && object[p] !== 0) {
                    
                  curObject ? errorHolder.push({
                    position: curObject.position || curObject[p].position || "",
                    segment: curObject.segment || curObject[p].segment || "",
                    message: `${pathName.join(".")} malformed: must include ${p}`
                  }) : errorHolder.push({
                    position: "",
                    segment: "",
                    message: `${pathName.join(".")} malformed: must include ${p}`
                  });
                  //errorHolder.push(`${pathName.join(".")}.${p} is not defined.`);
                }
            });
        }
    }
    function checkConditionals (object, pathName, model) {
        const modelPath = pathName.filter(n => n !== pathHead);
        let modelSection = model;
        while (modelPath.length > 0) {
            modelSection = modelSection[modelPath.splice(0,1).join("")]
        };
        if (!modelSection) {
            modelSection = model;
            const modelPath = pathName.filter(n => n !== pathHead);
            while (modelPath.length > 1) {
                modelSection = modelSection[modelPath.splice(0, 1).join("")];
            }
            const objectName = modelPath.splice(0, 1).join("");
            if (modelSection.conditionals) {
              modelSection = modelSection["conditionals"].find(e => !Array.isArray(e))[objectName];
            }
        }
        if (Array.isArray(modelSection)) return //remove return if missing errors ----- modelSection = modelSection[0];
  
        const missingProps = Object.keys(modelSection).filter(key => key !== "conditionals" && !Object.keys(object).includes(key));
        if (missingProps.length) {
          for (let key of missingProps) {
            let curPath = pathName.filter(p => p !== pathHead & p !== "undefined");
            let curObject = modelMap[curPath.splice(0,1)] || modelMap;
            while (curPath.length) {
              curObject = curObject[curPath.splice(0,1)];
            }
            curObject = curObject[key];
  
            errorHolder.push({
              position: curObject.position || "",
              segment: curObject.segment || "",
              message: `${pathName.join(".")} malformed: must include ${key}`
            });
          }
          //errorHolder.push(`${pathName.join(".")} must include ${missingProps.join(" and ")}`)
        }
  
        if (modelSection.conditionals) {
            for (let condition of modelSection.conditionals) {
                if (Array.isArray(condition) && !condition.some(key => Object.keys(object).includes(key))) {
                  for (let c of condition) {
                    let curPath = pathName.filter(p => p !== pathHead);
                    let curObject = modelMap[curPath.splice(0,1)];
                    while (curPath.length) {
                      curObject = curObject[curPath.splice(0,1)];
                    }
                    curObject = curObject[c];
                    errorHolder.push({
                      position: curObject.position || "",
                      segment: curObject.segment || "",
                      message: `${pathName.join(".")} missing conditional: ${c}. Must include ${condition.join(" OR ")}`
                    });
                  }
                  //errorHolder.push(`${pathName.filter(p => p !== "conditionals" && isNaN(Number(p))).join(".")} must include ${condition.join(" OR ")}`)
                } else if (Object.keys(condition).every(key => Object.keys(object).includes(key))  ) {
                  //checkConditionals(object[Object.keys(condition)[0]], pathName.concat(Object.keys(condition)[0]), model)
                }
            }
        }
    }
    
    function navigateObj (object, pathName = [pathHead]) {
        if (typeof object === "object" && Array.isArray(object)) checkArrayObjectsForUndefined(object, pathName, model);
        if (typeof object === "object" && !Array.isArray(object)) {
            checkForUndefined(object, pathName);
            checkConditionals(object, pathName, model);
  
            for (let prop of Object.keys(object)) {
                if (typeof object[prop] === "object") navigateObj(object[prop], pathName.concat(prop));     
            }
        }
        return [object, errorHolder];
    }
  
    return navigateObj(object)
}
  