export default function Topbar() {
    return (
        <nav className="shadow-small bg-darkaccent">
            <div className="max-w-[1440px] mx-auto flex gap-[64px] items-center px-[36px] py-[12px]">
                <a className="font-bai font-medium text-[20px] text-offwhite block w-fit" href="/">
                    <p className="leading-[1]">FactoryPure</p>
                    <p className="font-light text-accent leading-[1] flex justify-between">
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
                <ul className="text-offwhite font-bold flex items-center gap-[32px]">
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
                <a className="uppercase ml-auto py-[4px] px-[16px] bg-accent rounded-[4px] text-darkness font-bold" href="/contact">
                    Contact
                </a>
            </div>
        </nav>
    )
}