export default function ImplementationLinks() {
    return (
        <div id="guides">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Implementation Guides</h2>
            <div className="flex gap-[16px] flex-col w-fit">
                <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] transition-all hover:scale-[1.025]" href="/edi/810">810 Invoice</a>
                <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/846">846 Inventory Advice</a>
                <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/850">850 Purchase Order</a>
                <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/856">856 Advance Ship Notice</a>
                <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/997">997 Functional Acknowledgement</a>
            </div>
        </div>
    )
}