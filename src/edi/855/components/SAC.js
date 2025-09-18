export default function SAC() {
    return (
        <div id="sac" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">SAC Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify additional charges associated with the purchase order.</p>
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
                    <div>SAC</div>
                    <div>Service, Promotion, Allowance, or Charge Information</div>
                    <div>O</div>
                    <div>1</div>
                    <div>SAC</div>
                    <div>Insurance / shipping add-ons</div>
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
                    <div>SAC01</div>
                    <div>248</div>
                    <div>Allowance or Charge Indicator</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/1</div>
                    <div>A, C</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SAC02</div>
                    <div>1300</div>
                    <div>Service, Promotion, Allowance, or Charge Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>4/4</div>
                    <div>D240, D980</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SAC03</div>
                    <div>559</div>
                    <div>Agency Qualifier Code</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] font-bold my-[8px] text-accent">This field is not used by FactoryPure.</div>

                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SAC04</div>
                    <div>1301</div>
                    <div>Agency Service, Promotion, Allowance, or Charge Code</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/10</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] font-bold my-[8px] text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SAC05</div>
                    <div>610</div>
                    <div>Amount</div>
                    <div>M</div>
                    <div>N2</div>
                    <div>1/10</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">Monetary amount.</div>
                </div>
            </div>
        </div>
    )
}