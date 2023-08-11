import { HashLink } from "react-router-hash-link";

export default function ISS() {
    return (
        <div id="iss" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">ISS Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify summary details of total items shipped in terms of quantity, weight, and volume</p>
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
                    <div>ISS</div>
                    <div>Invoice Shipment Summary</div>
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
                    <div>ISS01</div>
                    <div>382</div>
                    <div>Number of Units Shipped</div>
                    <div>M</div>
                    <div>R</div>
                    <div>1/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISS02</div>
                    <div>355</div>
                    <div>Unit or Basis for Measurement Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>EA</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISS03</div>
                    <div>81</div>
                    <div>Weight</div>
                    <div>M</div>
                    <div>R</div>
                    <div>1/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISS04</div>
                    <div>355</div>
                    <div>Unit or Basis for Measurement Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>GR, KG, LB, OZ</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISS05</div>
                    <div>183</div>
                    <div>Volume</div>
                    <div>O</div>
                    <div>R</div>
                    <div>1/8</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>ISS06</div>
                    <div>355</div>
                    <div>Unit or Basis for Measurement Code</div>
                    <div>C</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>CC, CI</div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">If SAC04 is used, SAC05 must also be used.</div>
                </div>
            </div>
        </div>
    )
}