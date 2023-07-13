export default function SN1() {
    return (
        <div id="sn1" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">SN1 Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify line-item detail relative to shipment.</p>
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
                    <div>SN1</div>
                    <div>Item Detail</div>
                    <div>M</div>
                    <div>1</div>
                    <div>HL (Item)</div>
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
                    <div>SN101</div>
                    <div>350</div>
                    <div>Assigned Identification</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/20</div>
                    <div>22</div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SN102</div>
                    <div>382</div>
                    <div>Number of Units Shipped</div>
                    <div>M</div>
                    <div>R</div>
                    <div>1/10</div>
                    <div></div>
                    <div className="col-span-full font-bold px-[8px] my-[8px]">Total number of packages.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>SN103</div>
                    <div>355</div>
                    <div>Unit or Basis for Measurement Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>EA</div>
                </div>
            </div>
        </div>
    )
}