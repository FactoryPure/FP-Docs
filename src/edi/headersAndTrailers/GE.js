export default function GE() {
    return (
        <div id="ge" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">GE Trailer</h2>
            <p className="text-offwhite mb-[16px]">To indicate the end of a functional group and to provide control information.</p>
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
                    <div>GE</div>
                    <div>Functional Group Trailer</div>
                    <div>M</div>
                    <div>1</div>
                    <div></div>
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
                    <div>GE01</div>
                    <div>97</div>
                    <div>Number of Included Transaction Sets</div>
                    <div>M</div>
                    <div>N0</div>
                    <div>1/6</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>GE02</div>
                    <div>28</div>
                    <div>Group Control Number</div>
                    <div>M</div>
                    <div>N0</div>
                    <div>1/9</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}