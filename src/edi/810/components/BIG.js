import { HashLink } from "react-router-hash-link";

export default function BIG() {
    return (
        <div id="big" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">BIG Segment</h2>
            <p className="text-offwhite mb-[16px]">To indicate the beginning of an invoice transaction set and transmit identifying numbers and dates</p>
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
                    <div>BIG</div>
                    <div>Beginning Segment for Invoice</div>
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
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>BIG01</div>
                    <div>373</div>
                    <div>Date</div>
                    <div>M</div>
                    <div>DT</div>
                    <div>8/8</div>
                    <div></div>
                    <div className="col-span-7 mt-[8px]">
                        <p className="font-bold">Invoice date</p>
                    </div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>BIG02</div>
                    <div>76</div>
                    <div>Invoice Number</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/22</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>BIG03</div>
                    <div>373</div>
                    <div>Date</div>
                    <div>M</div>
                    <div>DT</div>
                    <div>8/8</div>
                    <div></div>
                    <div className="col-span-7 mt-[8px]">
                        <p className="font-bold">Purchase order date</p>
                    </div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>BIG04</div>
                    <div>324</div>
                    <div>Purchase Order Number</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/22</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>BIG05</div>
                    <div>328</div>
                    <div>Release Number</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/30</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>BIG06</div>
                    <div>327</div>
                    <div>Change Order Sequence Number</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/8</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey">
                    <div>BIG07</div>
                    <div>640</div>
                    <div>Transaction Type Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>DI</div>
                </div>
            </div>
        </div>
    )
}