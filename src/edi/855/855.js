import { HashLink } from "react-router-hash-link"
import BackButton from "../components/BackButton"
import Overview from "./components/Overview"
import ISA from "../headersAndTrailers/ISA"
import ST from "../headersAndTrailers/ST"
import GS from "../headersAndTrailers/GS"
import SE from "../headersAndTrailers/SE"
import GE from "../headersAndTrailers/GE"
import IEA from "../headersAndTrailers/IEA"
import N1 from "./components/N1"
import N3 from "./components/N3"
import N4 from "./components/N4"
import PO1 from "./components/PO1"
import CTT from "./components/CTT"
import Example from "./components/Example"
import SAC from "./components/SAC"
import ACK from "./components/ACK"
import BAK from "./components/BAK"

export default function EightFiftyFive() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">FactoryPure EDI 855</h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">
                Release: 1.0 (updated 2025-09-18)
            </h2>
            <div className="flex gap-[32px]">
                <div className="w-[70%]">
                    <Overview />
                    <ISA />
                    <GS functionalGroupIdentifierCode={"PR"} />
                    <ST transactionSetIdentifierCode={855} />
                    <BAK />
                    <SAC />
                    <div id="n1-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">
                            N1 LOOP - Repeat: 1 or 2
                        </p>
                        <N1 />
                        <N3 />
                        <N4 />
                    </div>
                    <div id="po1-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">
                            PO1 LOOP - Repeat: &gt;1
                        </p>
                        <PO1 />
                        <ACK />
                    </div>
                    <CTT />
                    <SE />
                    <GE />
                    <IEA />
                </div>
                <div className="text-offwhite w-[30%] rounded-[4px] p-[32px] shadow-small bg-darkaccent h-fit sticky top-[32px]">
                    <h3 className="text-offwhite font-bold mb-[8px] leading-[1]">On this page</h3>
                    <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                        <li>
                            <HashLink to="#overview">Overview</HashLink>
                        </li>
                        <li>
                            <HashLink to="#isa">ISA Header</HashLink>
                        </li>
                        <li>
                            <HashLink to="#gs">GS Header</HashLink>
                        </li>
                        <li>
                            <HashLink to="#st">ST Header</HashLink>
                        </li>
                        <li>
                            <HashLink to="#bak">BAK Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#sac">SAC Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#n1-loop">N1 Loop</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#n1">N1 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#n3">N3 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#n4">N4 Segment</HashLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#po1-loop">PO1 Loop</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#po1">PO1 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#ack">ACK Segment</HashLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#ctt">CTT Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#se">SE Trailer</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ge">GE Trailer</HashLink>
                        </li>
                        <li>
                            <HashLink to="#iea">IEA Trailer</HashLink>
                        </li>
                        <li>
                            <HashLink to="#example">Example Purchase Order Acknowledgement</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Example />
        </>
    )
}
