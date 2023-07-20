import { HashLink } from "react-router-hash-link";

export default function IT1() {
    return (
        <div id="it1" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">IT1 Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify the basic and most frequently used line item data for the invoice and related transactions</p>
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
                    <div>IT1</div>
                    <div>Baseline Item Data</div>
                    <div>M</div>
                    <div>1</div>
                    <div>IT1</div>
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
                    <div>IT101</div>
                    <div>350</div>
                    <div>Assigned Identification</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/20</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT102</div>
                    <div>358</div>
                    <div>Quantity Invoiced</div>
                    <div>M</div>
                    <div>R</div>
                    <div>1/10</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT103</div>
                    <div>355</div>
                    <div>Unit or Basis for Measurement Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT104</div>
                    <div>212</div>
                    <div>Unit Price</div>
                    <div>M</div>
                    <div>R</div>
                    <div>1/17</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT106</div>
                    <div>235</div>
                    <div>Product/Service ID Qualifer</div>
                    <div>X</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>CB</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT107</div>
                    <div>234</div>
                    <div>Product/Service ID</div>
                    <div>X</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT108</div>
                    <div>235</div>
                    <div>Product/Service ID Qualifer</div>
                    <div>X</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>VC</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT109</div>
                    <div>234</div>
                    <div>Product/Service ID</div>
                    <div>X</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT110</div>
                    <div>235</div>
                    <div>Product/Service ID Qualifer</div>
                    <div>X</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>UK</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>IT111</div>
                    <div>234</div>
                    <div>Product/Service ID</div>
                    <div>X</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                </div>
            </div>            
        </div>
    )
}