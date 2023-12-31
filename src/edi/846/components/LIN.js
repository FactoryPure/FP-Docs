export default function LIN() {
    return (
        <div id="lin" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">LIN Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify basic item identification data.</p>
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
                    <div>LIN</div>
                    <div>Item Identification</div>
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
                    <div>LIN01</div>
                    <div>350</div>
                    <div>Assigned Identification</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/20</div>
                    <div>22</div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN02</div>
                    <div>235</div>
                    <div>Product ID Qualifier</div>
                    <div>C</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>UP</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN03</div>
                    <div>234</div>
                    <div>Product UPC</div>
                    <div>C</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN04</div>
                    <div>235</div>
                    <div>Product ID Qualifier</div>
                    <div>C</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>SK</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN05</div>
                    <div>234</div>
                    <div>Product SKU</div>
                    <div>C</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN06</div>
                    <div>235</div>
                    <div>Product ID Qualifier</div>
                    <div>C</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>MN</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN07</div>
                    <div>234</div>
                    <div>Product Model Name / Number</div>
                    <div>C</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN08</div>
                    <div>235</div>
                    <div>Product ID Qualifier</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>DV</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>LIN09</div>
                    <div>234</div>
                    <div>Location Code</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] my-[8px] font-bold">Code for the warehouse that the product will be shipped from.</div>
                </div>
            </div>
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Notes</h2>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite grid grid-cols-[100px_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <p>1.</p>
                    <p>
                        At least one combination of LIN02+LIN03, LIN04+LIN05, or LIN06+LIN07 must be present
                    </p>
                </div>
            </div>
        </div>
    )
}