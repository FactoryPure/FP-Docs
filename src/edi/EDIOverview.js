import { HashLink } from "react-router-hash-link";
import AS2Overview from "./components/AS2Overview";
import ConventionsOverview from "./components/ConventionsOverview";
import ImplementationLinks from "./components/ImplementationLinks";
import SenderReceiverIds from "./components/SenderReceiverIds";
import PlaygroundOverview from "./playground/PlaygroundOverview";
export default function EDIOverview() {
    return <section>
        <h1 className="text-[32px] font-bold text-offwhite leading-[1] mb-[32px]">FactoryPure EDI</h1>
        <div className="flex gap-[32px]">
            <div className="w-[65%] p-[32px] bg-darkaccent rounded-[4px] shadow-small flex flex-col gap-[32px]">
                <AS2Overview />
                <ConventionsOverview />
                <SenderReceiverIds />
                <ImplementationLinks />
                <PlaygroundOverview />
            </div>
            <div className="w-[35%] p-[32px] bg-darkaccent rounded-[4px] shadow-small sticky top-[32px] h-fit">
                <h3 className="text-offwhite font-bold mb-[8px] leading-[1]">On this page</h3>
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