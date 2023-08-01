import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import GE from "../headersAndTrailers/GE";
import GS from "../headersAndTrailers/GS";
import IEA from "../headersAndTrailers/IEA";
import ISA from "../headersAndTrailers/ISA";
import BSN from "./components/BSN";
import Overview from "./components/Overview";
import SE from "../headersAndTrailers/SE";
import ST from "../headersAndTrailers/ST";
import HL from "./components/HL";
import PRF from "./components/PRF";
import TD5 from "./components/TD5";
import TD1 from "./components/TD1";
import REF from "./components/REF";
import DTM from "./components/DTM";
import N3 from "./components/N3";
import N4 from "./components/N4";
import N1 from "./components/N1";
import LIN from "./components/LIN";
import SN1 from "./components/SN1";
import PID from "./components/PID";
import CTT from "./components/CTT";

export default function EightFiftySix() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                FactoryPure EDI 856
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">Release: 1.0</h2>
            <div className="flex gap-[32px]">
                <div className="w-[70%]">
                    <Overview />
                    <ISA />
                    <GS functionalGroupIdentifierCode={"SH"} />
                    <ST transactionSetIdentifierCode={856} />
                    <BSN />
                    <div id="hls-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">HL LOOP (Shipment) - Repeat: 1</p>
                        <HL code={"S"} name={"Shipment"} />
                        <TD1 />
                        <TD5 />
                        <REF referenceIdentifierCode={"BM"} name={"Bill of lading"} level={"Shipment"} index={0} />
                        <DTM />
                        <div id="n1-loop" className="p-[8px] bg-darkness rounded-[4px] shadow-small">
                            <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">N1 LOOP - Repeat: &gt;1</p>
                            <N1 />
                            <N3 />
                            <N4 />
                        </div>
                    </div>
                    <div id="hlo-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">HL LOOP (Order) - Repeat: 1</p>
                        <HL code={"O"} name={"Order"} />
                        <PRF />
                    </div>
                    <div id="hlp-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">HL LOOP (Pack) - Repeat: &gt;1</p>
                        <HL code={"P"} name={"Pack"} />
                        <REF referenceIdentifierCode={"2I"} name={"Tracking number"} level={"Pack"} index={1} />
                    </div>
                    <div id="hli-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">HL LOOP (Item) - Repeat: &gt;1</p>
                        <HL code={"I"} name={"Item"} />
                        <LIN />
                        <SN1 />
                        <PID />
                    </div>
                    <CTT />
                    <SE />
                    <GE />
                    <IEA />
                </div>
                <div className="text-offwhite w-[30%] rounded-[4px] p-[32px] shadow-small bg-darkaccent h-fit sticky top-[32px] max-h-[calc(100vh-64px)] overflow-auto">
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
                            <HashLink to="#bsn">BSN Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#hls-loop">HL Loop (Shipment)</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#hls">HL Segment (Shipment)</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#td1">TD1 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#td5">TD5 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#ref0">REF Segment (Bill of lading)</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#dtm">DTM Segment</HashLink>
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
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#hlo-loop">HL Loop (Order)</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#hlo">HL Segment (Order)</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#prf">PRF Segment</HashLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#hlp-loop">HL Loop (Pack)</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#hlp">HL Segment (Pack)</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#ref1">REF Segment (Tracking info)</HashLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#hli-loop">HL Loop (Item)</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#hli">HL Segment (Item)</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#lin">LIN Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#sn1">SN1 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#pid">PID Segment</HashLink>
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
                    </ul>
                </div>
            </div>
        </>
    )
}