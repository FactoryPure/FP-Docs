export default function ImplementationLinks() {
    return (
        <>
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Implementation Guides</h2>
            <div className="flex gap-[16px] flex-col w-fit">
                <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] transition-all hover:scale-[1.025]" href="/edi/810">810 Invoice</a>
                <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/846">846 Inventory Advice</a>
                <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/850">850 Purchase Order</a>
                <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/856">856 Advance Ship Notice</a>
                <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" href="/edi/997">997 Functional Acknowledgement</a>
            </div>
        </>
    )
}