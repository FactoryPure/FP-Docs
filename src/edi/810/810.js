import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import ISA from "../headersAndTrailers/ISA";
import Overview from "./components/Overview";
import GS from "../headersAndTrailers/GS";
import IEA from "../headersAndTrailers/IEA";
import GE from "../headersAndTrailers/GE";
import ST from "../headersAndTrailers/ST";
import BIG from "./components/BIG";
import NTE from "./components/NTE";
import CUR from "./components/CUR";
import N1 from "./components/N1";
import N3 from "./components/N3";
import N4 from "./components/N4";
import ITD from "./components/ITD";
import FOB from "./components/FOB";
import IT1 from "./components/IT1";
import TDS from "./components/TDS";
import TXI from "./components/TXI";
import CAD from "./components/CAD";
import ISS from "./components/ISS";
import CTT from "./components/CTT";
import SE from "../headersAndTrailers/SE";
import PID from "./components/PID";
import REF from "./components/REF";


export default function EightTen() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                FactoryPure EDI 810
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">Release: 1.0</h2>
            <div className="flex gap-[32px]">
                <div className="w-[70%]">
                    <Overview />
                    <ISA  />
                    <GS functionalGroupIdentifierCode="IN" />
                    <ST transactionSetIdentifierCode={810} />
                    <BIG />
                    <NTE />
                    <CUR />
                    <REF />
                    <div id="n1-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">N1 LOOP - Repeat: &gt;1</p>
                        <N1 />
                        <N3 />
                        <N4 />
                    </div>
                    <ITD />
                    <FOB />
                    <div id="it1-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">IT1 LOOP - Repeat: 200000</p>
                        <IT1/>
                        <div id="pid-loop" className="p-[8px] bg-grey/20 rounded-[4px] shadow-small">
                            <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">PID LOOP - Repeat: 1000</p>
                            <PID />
                        </div>
                    </div>
                    <TDS />
                    <TXI />
                    <CAD />
                    <div id="iss-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">ISS LOOP - Repeat: &gt;1</p>
                        <ISS/>
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
                            <HashLink to="#isa">ISA Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#gs">GS Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#st">ST Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#big">BIG Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#nte">NTE Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#cur">CUR Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ref">REF Segment</HashLink>
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
                            <HashLink to="#itd">ITD Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#fob">FOB Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#it1-loop">IT1 Loop</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#it1">IT1 Segment</HashLink>
                                </li>
                                <li>
                                    <HashLink to="#pid-loop">PID Loop</HashLink>
                                </li>
                                <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                    <li>
                                        <HashLink to="#pid">PID Segment</HashLink>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#tds">TDS Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#txi">TXI Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#cad">CAD Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#iss-loop">ISS Loop</HashLink>
                            <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
                                <li>
                                    <HashLink to="#iss">ISS Segment</HashLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <HashLink to="#se">SE Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ge">GE Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#iea">IEA Segment</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}