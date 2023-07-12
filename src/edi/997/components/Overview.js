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
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-darkgrey">
                    <div>AK1</div>
                    <div>Functional Group Response Header</div>
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
                    <div>LOOP</div>
                    <div>Notes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey">
                    <div>AK2</div>
                    <div>Transaction Set Response Header</div>
                    <div>O</div>
                    <div>1</div>
                    <div>AK2</div>
                    <div>N1/0300L</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey">
                    <div>AK5</div>
                    <div>Transaction Set Response Trailer</div>
                    <div>O</div>
                    <div>1</div>
                    <div>AK2</div>
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
                    <div>AK9</div>
                    <div>Functional Group Response Trailer</div>
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
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Notes</h2>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite grid grid-cols-[100px_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <p>1/0100</p>
                    <p>
                        These acknowledgments shall not be acknowledged, thereby preventing an endless cycle of
                        acknowledgments of acknowledgments. Nor shall a Functional Acknowledgment be sent to report errors
                        in a previous Functional Acknowledgment.
                        <br/>
                        The Functional Group Header Segment (GS) is used to start the envelope for the Functional
                        Acknowledgment Transaction Sets. In preparing the functional group of acknowledgments, the applicationsender's code and the application receiver's code, taken from the functional group being acknowledged,
                        are exchanged; therefore, one acknowledgment functional group responds to only those functional groups
                        from one application receiver's code to one application sender's code.
                        There is only one Functional Acknowledgment Transaction Set per acknowledged functional group.
                    </p>
                </div>
                <div className="text-offwhite grid grid-cols-[100px_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <p>1/0200</p>
                    <p>
                        AK1 is used to respond to the functional group header and to start the acknowledgment for a functional
                        group. There shall be one AK1 segment for the functional group that is being acknowledged.
                        The Functional Acknowledgement is generated at the point of translation, intended for the originator (not
                        any intermediate parties).

                    </p>
                </div>
                <div className="text-offwhite grid grid-cols-[100px_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <p>1/0300</p>
                    <p>
                        AK2 is used to start the acknowledgment of a transaction set within the received functional group. The
                        AK2 segments shall appear in the same order as the transaction sets in the functional group that has
                        been received and is being acknowledged.
                    </p>
                </div>
                <div className="text-offwhite grid grid-cols-[100px_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <p>1/0300</p>
                    <p>
                        AK2 is used to start the acknowledgment of a transaction set within the received functional group. The
                        AK2 segments shall appear in the same order as the transaction sets in the functional group that has
                        been received and is being acknowledged. 
                    </p>
                </div>
            </div>
        </div>
    )
}
