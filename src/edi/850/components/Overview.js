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
                    <div>BEG</div>
                    <div>Beginning segment for purchase order</div>
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
                    <div>N9</div>
                    <div>Reference Identification</div>
                    <div>O</div>
                    <div>1</div>
                    <div>N9</div>
                    <div className="text-[14px]">Free form notes will follow in MSG segment</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>MSG</div>
                    <div>Message Text</div>
                    <div>O</div>
                    <div>1</div>
                    <div>N9</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N1</div>
                    <div>Customer Name</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div className="text-[14px]">Only the customer (ship to) will be added to purchase order.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N3</div>
                    <div>Customer Address</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N4</div>
                    <div>Customer Geographic Location</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>FOB</div>
                    <div>F.O.B. Related Instructions</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div className="text-[14px]">Specifies the type of destination and whether or not liftgate should be added.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TD5</div>
                    <div>Carrier Details</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO1</div>
                    <div>Line Item Information</div>
                    <div>M</div>
                    <div>&gt;1</div>
                    <div>PO1</div>
                    <div className="text-[14px]">PO107 = FactoryPure SKU, PO109 = Supplier SKU</div>
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
        </div>
    )
}