export const vendorMap = {
    "12/2625221452": "Westinghouse",
    "SENDERID": "SENDERID",
    "TESTINGHOUSE": "WESTINGHOUSE"
}
export const addressTypeMap = {
    "H": "Home Address",
    "BS": "Place of Business",
    "TM": "Terminal",
}
export const shipmentPaymentMap = {
    "CC": "Collect",
    "DE": "Per Contract",
    "PP": "Prepaid By Seller"
}
export const transportTermsMap = {
    "01": "Incoterms",
}
export const deliveryTermsMap = {
    "EXW": "Ex Works",
}
export const carrierMethodMap = {
    "T": "Best Way (Shippers Option)",
}
export const unitsMap = {
    "CC": "Cubic Centimeter",
    "CI": "Cubic Inches",
    "GR": "Gram",
    "KG": "Kilogram",
    "LB": "Pound",
    "OZ": "Ounce"
}
export const taxMap = {
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
export const SACChargeAllowanceMap = {
    "A": "Allowance",
    "C": "Charge"
}
export const SACTypeMap = {
    "D240": "Freight",
    "D980": "Insurance"
}
export const purchaseOrderPurposeMap = {
    "00": "ORIGINAL",
    "01": "CHANGE",
    "05": "CANCEL"
}
export const purchaseOrderAcceptanceMap = {
    "AC": "Acknowledge - With Detail and Change",
    "AD": "Acknowledge - With Detail, No Change",
    "AE": "Acknowledge - With Exception Detail Only",
    "AH": "Acknowledge - Hold Status",
    "AK": "Acknowledge - No Detail or Change",
    "AP": "Acknowledge - Product Replenishment",
    "AT": "Accepted",
    "NA": "No Acknowledgment Needed",
    "RD": "Reject with Detail",
    "RF": "Reject with Exception Detail Only",
    "RJ": "Rejected - No Detail",
    "RN": "Rejected - Not as Agreed",
    "RO": "Rejected With Counter Offer",
    "RV": "Rejected - Violates Industry Practices",
    "ZZ": "Mutually Defined",
}
export const lineItemAcceptanceMap = {
    "AA": "Item Accepted - Order Forwarded to Alternate Supplier Location",
    "AC": "Item Accepted and Shipped",
    "AR": "Item Accepted and Released for Shipment",
    "BP": "Item Accepted - Partial Shipment, Balance Backordered",
    "DR": "Item Accepted - Date Rescheduled",
    "IA": "Item Accepted",
    "IB": "Item Backordered",
    "IC": "Item Accepted - Changes Made",
    "ID": "Item Deleted",
    "IE": "Item Accepted, Price Pending",
    "IF": "Item on Hold, Incomplete Description",
    "IH": "Item on Hold",
    "IP": "Item Accepted - Price Changed",
    "IQ": "Item Accepted - Quantity Changed",
    "IR": "Item Rejected",
    "IS": "Item Accepted - Substitution Made",
    "IW": "Item on Hold-Waiver Required",
    "R1": "Item Rejected, Not a Contract Item",
    "R2": "Item Rejected, Invalid Item Product Number",
    "R3": "Item Rejected, Invalid Unit of Issue",
    "R4": "Item Rejected, Contract Item not Available",
    "R5": "Item Rejected, Reorder Item as a Just in Time (JIT) Order",
    "R6": "Item Rejected, Reorder Item as an Extended Delivery Order (EDO)",
    "R7": "Item Rejected, Reorder Item as a Drop Shipment",
    "R8": "Item Rejected, Reorder Item as a Surge Order",
    "SP": "Item Accepted - Schedule Date Pending",    
}
export const setMap = {
    "IN": "Invoice Information (810,819)",
    "IB": "Inventory Inquiry/Advice (846)",
    "PR": "Purchase Order Acknowledgement (855)",
    "PO": "Purchase Order (850)",
    "SH": "Ship Notice/Manifest (856)"
}
export const statusMap = {
    //"A": "Accepted",
    "A": true,
    // "E": "Accepted But Errors Were Noted",
    // "M": "Rejected, Message Authentication Code (MAC) Failed",
    // "R": "Rejected",
    "R": false
    // "W": "Rejected, Assurance Failed Validity Tests",
    // "X": "Rejected, Content After Decryption Could Not Be Analyzed"
}