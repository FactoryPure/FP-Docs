export default function PID() {
    return (
        <div id="pid" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">PID Segment</h2>
            <p className="text-offwhite mb-[16px]">To describe the item in free-form format. Assists in identifiying discrepancies in product map.</p>
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
                    <div>PID</div>
                    <div>Item Description</div>
                    <div>M</div>
                    <div>1</div>
                    <div>LIN</div>
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
                    <div>PID01</div>
                    <div>349</div>
                    <div>Item Descrption Type</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/1</div>
                    <div>F</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PID02</div>
                    <div>750</div>
                    <div>Product Characteristic Code</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>2/3</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PID03</div>
                    <div>559</div>
                    <div>Agency Qualifier Code</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PID04</div>
                    <div>751</div>
                    <div>Product Description Code</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/12</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PID05</div>
                    <div>352</div>
                    <div>Description</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/80</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}