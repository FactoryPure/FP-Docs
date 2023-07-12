export default function FOB() {
    return (
        <div id="fob" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">FOB Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify transportation instructions relating to shipment.</p>
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
                    <div>N4</div>
                    <div>F.O.B. Related Instructions</div>
                    <div>M</div>
                    <div>1</div>
                    <div>N1</div>
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
                    <div>FOB01</div>
                    <div>146</div>
                    <div>Shipment Method of Payment</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>CC, DE</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>FOB02</div>
                    <div>309</div>
                    <div>Location Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/2</div>
                    <div>TM, H, BS</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>FOB03</div>
                    <div>352</div>
                    <div>Description</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/80</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">If FOB02 = H, then this will either be WITHLIFTGATE or WITHOUTLIFTGATE. Please add shipping option accordingly.</div>
                </div>
            </div>
        </div>
    )
}