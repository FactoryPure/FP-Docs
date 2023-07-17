import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import ISA from "../headersAndTrailers/ISA";
import Overview from "./components/Overview";
import GS from "../headersAndTrailers/GS";
import IEA from "../headersAndTrailers/IEA";
import GE from "../headersAndTrailers/GE";
import ST from "./components/ST";
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
import SE from "./components/SE";

export default function EightFortySix() {
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
                    <ISA />
                    <GS />
                    <ST />
                    <BIG />
                    <NTE />
                    <CUR />
                    <N1 />
                    <N3 />
                    <N4 />
                    <ITD />
                    <FOB />
                    <IT1/>
                    <TDS />
                    <TXI />
                    <CAD />
                    <ISS />
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
                    </ul>
                </div>
            </div>
        </>
    )
}