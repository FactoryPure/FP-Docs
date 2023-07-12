import { HashLink } from "react-router-hash-link";

export default function Overview() {
    return (
        <div id="overview" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Headings</h2>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>Id</div>
                    <div>Segment Name</div>
                    <div>Req</div>
                    <div>Max Use</div>
                    <div>Loop</div>
                    <div>Notes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA</div>
                    <div>Interchange Control Header</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <HashLink className="text-[14px] underline" to={"/edi#ids"}>Sender/Receiver ID Info</HashLink>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>GS</div>
                    <div>Functional Group Header</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <HashLink className="text-[14px] underline" to={"/edi#ids"}>Sender/Receiver ID Info</HashLink>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ST</div>
                    <div>Transaction Set Header</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>BSN</div>
                    <div>Beginning segment for shipping notice</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Details</h2>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>Id</div>
                    <div>Segment Name</div>
                    <div>Req</div>
                    <div>Max Use</div>
                    <div>Loop</div>
                    <div>Notes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>HL</div>
                    <div>Hierarchical Loop</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Shipment)</div>
                    <div>Code = S (shipment)</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TD1</div>
                    <div>Carrier Details - Quantity &amp; Weight</div>
                    <div>O</div>
                    <div>1</div>
                    <div>HL (Shipment)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TD5</div>
                    <div>Carrier Details - Routing</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Shipment)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>REF</div>
                    <div>Reference Identification</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Shipment)</div>
                    <div>Bill of lading</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>DTM</div>
                    <div>Date / Time Reference</div>
                    <div>O</div>
                    <div>1</div>
                    <div>HL (Shipment)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N1</div>
                    <div>Name</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1 (HL-Shipment)</div>
                    <div>Ship to</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N3</div>
                    <div>Address Information</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1 (HL-Shipment)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N4</div>
                    <div>Geographic Location</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1 (HL-Shipment)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>HL</div>
                    <div>Hierarchical Loop</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Order)</div>
                    <div>Code = O (order)</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PRF</div>
                    <div>Purchase Order Reference</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (order)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>HL</div>
                    <div>Hierarchical Loop</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Pack)</div>
                    <div>Code = P (pack)</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>REF</div>
                    <div>Reference Identification</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Pack)</div>
                    <div>Tracking number</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>HL</div>
                    <div>Hierarchical Loop</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Item)</div>
                    <div>Code = I (item)</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN</div>
                    <div>Line Item Information</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Item)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PID</div>
                    <div>Line Item Description</div>
                    <div>O</div>
                    <div>1</div>
                    <div>HL (Item)</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SN1</div>
                    <div>Item Detail - Shipment</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Item)</div>
                    <div>Quantity &amp; units</div>
                </div>
            </div>
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Summary</h2>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>Id</div>
                    <div>Segment Name</div>
                    <div>Req</div>
                    <div>Max Use</div>
                    <div>Loop</div>
                    <div>Notes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>CTT</div>
                    <div>Transaction totals</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>GE</div>
                    <div>Functional Group Trailer</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SE</div>
                    <div>Transaction Set Trailer</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IEA</div>
                    <div>Interchange Control Trailer</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Notes</h2>
            <div className="text-offwhite mb-[32px]">
                <ol className="list-decimal pl-[8px] ml-[8px]">
                    <li className="text-offwhite">
                        Please include only one purchase order on each ASN.
                    </li>
                    <li className="text-offwhite">
                        Do not include items that did not ship on the ASN.                    
                    </li>
                    <li className="text-offwhite">
                        Please include only one shipment on each ASN. If the purchase order must be sent in multiple shipments, please send one ASN for each.
                    </li>
                    <li className="text-offwhite">
                        ASN must include all relevant tracking numbers at the pack level.
                    </li>
                </ol>
            </div>
        </div>
    )
}