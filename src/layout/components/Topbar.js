export default function Topbar() {
    return (
        <nav class="shadow-small bg-darkaccent px-[36px] py-[12px] flex gap-[64px] items-center">
            <a class="font-bai font-medium text-[20px] text-offwhite block w-fit" href="/">
                <p class="leading-[1]">FactoryPure</p>
                <p class="font-light text-accent leading-[1] flex justify-between">
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>s</span>
                </p>
            </a>
            <ul class="text-offwhite font-bold flex items-center gap-[32px]">
                <li>
                    <a href="/edi">
                        EDI
                    </a>
                </li>
                <li>
                    <a href="/api">
                        API
                    </a>
                </li>
            </ul>
            <a class="uppercase ml-auto py-[4px] px-[16px] bg-accent rounded-[4px] text-darkness font-bold" href="/contact">
                Contact
            </a>
        </nav>
    )
}