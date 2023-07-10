import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AS2Overview from "./components/AS2Overview";
import ConventionsOverview from "./components/ConventionsOverview";
export default function EDIOverview() {
    return <section>
        <h1 className="text-[32px] font-bold text-offwhite leading-[1] mb-[32px]">FactoryPure EDI</h1>
        <div className="flex gap-[32px]">
            <div className="w-[70%] p-[16px] bg-darkaccent rounded-[4px] shadow-small">
                <AS2Overview />
                <ConventionsOverview />
                <div className="flex gap-[16px] flex-wrap">
                    <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/edi/810">810 Invoice</a>
                    <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/edi/846">846 Inventory Advice</a>
                    <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/edi/850">850 Purchase Order</a>
                    <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/edi/856">856 Advance Ship Notice</a>
                    <a class="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/edi/997">997 Functional Acknowledgement</a>
                </div>
            </div>
            <div className="w-[30%] p-[16px] bg-darkaccent rounded-[4px] shadow-small sticky top-[32px] h-fit">
                <h3 className="text-offwhite font-bold mb-[8px]">On this page</h3>
                <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                    <li>
                        <HashLink to="#as2">AS2</HashLink>
                    </li>
                    <li>
                        <HashLink to="#conventions">Conventions</HashLink>
                    </li>
                    <li>
                        <HashLink to="#ids">Sender / Receiver ID's</HashLink>
                    </li>
                    <li>
                        <HashLink to="#guides">Implementation Guides</HashLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}