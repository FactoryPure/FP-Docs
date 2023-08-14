import { HashLink } from "react-router-hash-link";

export default function CAD() {
    return (
        <div id="cad" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">CAD Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify transportation details for the transaction</p>
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
                    <div>CAD</div>
                    <div>Carrier Detail</div>
                    <div>M</div>
                    <div>1</div>
                    <div>CAD</div>
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
                    <div>CAD01</div>
                    <div>91</div>
                    <div>Transportation Method/Type Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>1/2</div>
                    <div>T</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>CAD02</div>
                    <div>206</div>
                    <div>Equipment Initial</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/4</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>CAD03</div>
                    <div>207</div>
                    <div>Equipment Number</div>
                    <div>O</div>
                    <div>AN</div>
                    <div>1/10</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>CAD04</div>
                    <div>140</div>
                    <div>Standard Carrier Alpha Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/4</div>
                    <div></div>
                </div>
                <div className="col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]">
                        <div>CAD05</div>
                        <div>387</div>
                        <div>Routing</div>
                        <div>M</div>
                        <div>AN</div>
                        <div>1/35</div>
                        <div></div>
                    </div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">Carrier name</div>

                </div>
                {/* <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] border-b border-darkgrey mb-[8px]">
                    <div>CAD06</div>
                    <div>368</div>
                    <div>Shipment/Order Status Code</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>1/2</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[14px] my-[8px] font-bold text-accent">This field is not used by FactoryPure.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>CAD07</div>
                    <div>128</div>
                    <div>Reference Identification Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/3</div>
                    <div>2I</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>CAD08</div>
                    <div>127</div>
                    <div>Reference Identification</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/30</div>
                    <div></div>
                </div> */}
            </div>
        </div>
    )
}