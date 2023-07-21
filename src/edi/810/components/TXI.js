import { HashLink } from "react-router-hash-link";

export default function TXI() {
    return (
        <div id="txi" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">TXI Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify tax information</p>
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
                    <div>TXI</div>
                    <div>Tax Information</div>
                    <div>M</div>
                    <div>10</div>
                    <div>TXI</div>
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
                    <div>TXI01</div>
                    <div>963</div>
                    <div>Tax Type Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>ANY</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TXI02</div>
                    <div>782</div>
                    <div>Monetary Amount</div>
                    <div>X</div>
                    <div>R</div>
                    <div>1/18</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TXI03</div>
                    <div>954</div>
                    <div>Percent</div>
                    <div>X</div>
                    <div>R</div>
                    <div>1/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TXI04</div>
                    <div>955</div>
                    <div>Tax Jurisdiction Code Qualifier</div>
                    <div>X</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>VD</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TXI05</div>
                    <div>956</div>
                    <div>Tax Jurisdiction Code</div>
                    <div>X</div>
                    <div>AN</div>
                    <div>1/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>TXI09</div>
                    <div>325</div>
                    <div>Tax Identification Number</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/20</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}