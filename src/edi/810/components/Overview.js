import { HashLink } from "react-router-hash-link"

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
                    <HashLink className="text-[14px] underline" to={"/edi#ids"}>
                        Sender/Receiver ID Info
                    </HashLink>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>GS</div>
                    <div>Functional Group Header</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <HashLink className="text-[14px] underline" to={"/edi#ids"}>
                        Sender/Receiver ID Info
                    </HashLink>
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
                    <div>BIG</div>
                    <div>Beginning segment for Invoice</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>NTE</div>
                    <div>Note/Special Instruction</div>
                    <div>O</div>
                    <div>100</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>CUR</div>
                    <div>Currency</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>REF</div>
                    <div>Reference Identification</div>
                    <div>M</div>
                    <div>12</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N1</div>
                    <div>Name</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N3</div>
                    <div>Address Information</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>N4</div>
                    <div>Geographic Location</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ITD</div>
                    <div>Terms of Sale/Deferred Terms of Sale</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                {/* <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>DTM</div>
                    <div>Date/Time Reference</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div> */}
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>FOB</div>
                    <div>F.O.B. Related Instructions</div>
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
                    <div>IT1</div>
                    <div>Baseline Item Data</div>
                    <div>M</div>
                    <div>1</div>
                    <div>IT1</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PID</div>
                    <div>Product/Item Description</div>
                    <div>M</div>
                    <div>1</div>
                    <div>PID</div>
                    <div></div>
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
                    <div>TDS</div>
                    <div>Total Monetary Value Summary</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TXI</div>
                    <div>Tax Information</div>
                    <div>O</div>
                    <div>&gt;1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>CAD</div>
                    <div>Carrier Detail</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SAC</div>
                    <div>Service, Promotion, Allowance, Or Charge Information</div>
                    <div>O</div>
                    <div>1</div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISS</div>
                    <div>Invoice Shipment Summary</div>
                    <div>M</div>
                    <div>&gt;1</div>
                    <div>ISS</div>
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
                    <div>GE</div>
                    <div>Functional Group Trailer</div>
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
