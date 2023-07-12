export default function PRF() {
    return (
        <div id="prf" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">PRF Segment</h2>
            <p className="text-offwhite mb-[16px]">To provide a reference to a specific purchase order.</p>
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
                    <div>PRF</div>
                    <div>Purchase Order Reference</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Order)</div>
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
                    <div>PRF01</div>
                    <div>324</div>
                    <div>Purchase Order Number</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/22</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PRF02</div>
                    <div>328</div>
                    <div>Release Number</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/30</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PRF03</div>
                    <div>327</div>
                    <div>Change Order Sequence Number</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/8</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PRF04</div>
                    <div>373</div>
                    <div>Date</div>
                    <div>O</div>
                    <div>DT</div>
                    <div>8/8</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}