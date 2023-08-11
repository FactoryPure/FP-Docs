import { HashLink } from "react-router-hash-link";

export default function ITD() {
    return (
        <div id="itd" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">ITD Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify the terms of sale</p>
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
                    <div>ITD</div>
                    <div>Terms of Sale/Deferred Terms of Sale</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
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
                    <div>ITD01</div>
                    <div>336</div>
                    <div>Terms Type Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>05, 08</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ITD02</div>
                    <div>333</div>
                    <div>Terms Basis Date Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/2</div>
                    <div>3</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ITD03</div>
                    <div>338</div>
                    <div>Terms Discount Percent</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>1/6</div>
                    <div></div>
                </div>
                <div className="col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]">
                        <div>ITD04</div>
                        <div>370</div>
                        <div>Terms Discount Due Date</div>
                        <div>C</div>
                        <div>DT</div>
                        <div>8/8</div>
                        <div></div>
                    </div>
                    <div className="col-span-8 mt-[8px]">
                        <p className="font-bold">If FactoryPure receives a Terms discount, the Terms Discount Due Date(ITD04) or Terms Discount Days (ITD05) must be used. Do not use both</p>
                    </div>
                </div>
                <div className="col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]">
                        <div>ITD05</div>
                        <div>351</div>
                        <div>Terms Discount Days Due</div>
                        <div>C</div>
                        <div>N0</div>
                        <div>1/3</div>
                        <div></div>
                    </div>
                    <div className="col-span-8 mt-[8px]">
                        <p className="font-bold">If FactoryPure receives a Terms discount, the Terms Discount Due Date(ITD04) or Terms Discount Days (ITD05) must be used. Do not use both</p>
                    </div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ITD06</div>
                    <div>446</div>
                    <div>Terms Net Due Date</div>
                    <div>C</div>
                    <div>ID</div>
                    <div>8/8</div>
                    <div></div>
                </div>
                <div className="col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]">
                        <div>ITD07</div>
                        <div>386</div>
                        <div>Terms Net Days</div>
                        <div>C</div>
                        <div>N0</div>
                        <div>1/3</div>
                        <div></div>
                    </div>
                    <div className="col-span-8 mt-[8px]">
                        <p className="font-bold">Use number of days from invoice date (BIG01) to due date. Terms Net Due Date (ITD06) can be used instead. Do not use both.</p>
                    </div>
                </div>
                <div className="col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]">
                        <div>ITD08</div>
                        <div>362</div>
                        <div>Terms Discount Amount</div>
                        <div>C</div>
                        <div>N2</div>
                        <div>1/10</div>
                        <div></div>
                    </div>
                    <div className="col-span-8 mt-[8px]">
                        <p className="font-bold">If FactoryPure receives a Terms discount, the Terms Discount Amount (ITD08) must be used.</p>
                    </div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>ITD09</div>
                    <div>388</div>
                    <div>Terms Deferred Due Date</div>
                    <div>O</div>
                    <div>DT</div>
                    <div>8/8</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>ITD10</div>
                    <div>389</div>
                    <div>Deferred Amount Due</div>
                    <div>C</div>
                    <div>N2</div>
                    <div>1/10</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>ITD11</div>
                    <div>342</div>
                    <div>Percent of Invoice Payable</div>
                    <div>C</div>
                    <div>R</div>
                    <div>1/5</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ITD12</div>
                    <div>352</div>
                    <div>Description</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/80</div>
                    <div></div>
                </div>
            </div>            
        </div>
    )
}