import { HashLink } from "react-router-hash-link";
import BackButton from "./components/BackButton";

export default function EightFortySix() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                FactoryPure EDI 846
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">Release: 1.0</h2>
            <div className="flex gap-[32px]">
                <div id="overview" className="text-offwhite w-[70%] rounded-[4px] p-[32px] shadow-small bg-darkaccent">
                    <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Headings</h2>
                    <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                        <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                            <div>Id</div>
                            <div>Segment Name</div>
                            <div>Req</div>
                            <div>Max Use</div>
                            <div>Repeat</div>
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
                            <div>BIA</div>
                            <div>Beginning segment for inventory advice</div>
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
                            <div>Repeat</div>
                            <div>Notes</div>
                        </div>
                        <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                            <div>LIN</div>
                            <div>Item Identification</div>
                            <div>M</div>
                            <div>&gt;1</div>
                            <div>LOOP - LIN</div>
                            <div></div>
                        </div>
                        <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                            <div>PID</div>
                            <div>Item Description</div>
                            <div>O</div>
                            <div>1</div>
                            <div>LOOP - LIN</div>
                            <div></div>
                        </div>
                        <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                            <div>CTP</div>
                            <div>Item Cost</div>
                            <div>M</div>
                            <div>1</div>
                            <div>LOOP - LIN</div>
                            <div></div>
                        </div>
                        <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                            <div>QTY</div>
                            <div>Item Available Quantity</div>
                            <div>M</div>
                            <div>1</div>
                            <div>LOOP - LIN</div>
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
                            <div>Repeat</div>
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
                <div className="text-offwhite w-[30%] rounded-[4px] p-[32px] shadow-small bg-darkaccent h-fit sticky top-[32px]">
                    <h3 className="text-offwhite font-bold mb-[8px] leading-[1]">On this page</h3>
                    <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                        <li>
                            <HashLink to="#overview">Overview</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}