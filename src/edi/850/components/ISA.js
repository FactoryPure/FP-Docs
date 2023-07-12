import { HashLink } from "react-router-hash-link";

export default function ISA() {
    return (
        <div id="isa" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">ISA Header</h2>
            <p className="text-offwhite mb-[16px]">To start and identify an interchange of one functional group and interchange-related control segments</p>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Usage</p>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
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
            </div>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Elements</p>
            <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>Ref</div>
                    <div>ID</div>
                    <div>Element Name</div>
                    <div>Req</div>
                    <div>Type</div>
                    <div>Min/max</div>
                    <div>Codes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA01</div>
                    <div>I01</div>
                    <div>Authorization Information Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>00</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA02</div>
                    <div>I02</div>
                    <div>Authorization Information</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>10/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA03</div>
                    <div>I03</div>
                    <div>Security Information Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>00</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA04</div>
                    <div>I04</div>
                    <div>Security Information</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>10/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA05</div>
                    <div>I05</div>
                    <div>Interchange ID Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>All Valid X12 Codes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA06</div>
                    <div>I06</div>
                    <div>Interchange Sender ID</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>15/15</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA07</div>
                    <div>I05</div>
                    <div>Interchange ID Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>All Valid X12 Codes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA08</div>
                    <div>I07</div>
                    <div>Interchange Receiver ID</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>15/15</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA09</div>
                    <div>I08</div>
                    <div>Interchange Date</div>
                    <div>M</div>
                    <div>DT</div>
                    <div>6/6</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA10</div>
                    <div>I09</div>
                    <div>Interchange Time</div>
                    <div>M</div>
                    <div>TM</div>
                    <div>4/4</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA11</div>
                    <div>I10</div>
                    <div>Interchange Control Standards Identifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/1</div>
                    <div>X</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA12</div>
                    <div>I11</div>
                    <div>Interchange Control Version Number</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>5/5</div>
                    <div>00400</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA13</div>
                    <div>I12</div>
                    <div>Interchange Control Number</div>
                    <div>M</div>
                    <div>N0</div>
                    <div>9/9</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA14</div>
                    <div>I13</div>
                    <div>Acknowledgement Requested</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/1</div>
                    <div>0</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA15</div>
                    <div>I14</div>
                    <div>Usage Indicator</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/1</div>
                    <div>P, T</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISA16</div>
                    <div>I15</div>
                    <div>Component Element Separator</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/1</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}