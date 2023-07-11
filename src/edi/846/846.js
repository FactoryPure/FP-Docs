import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import BIA from "./components/BIA";
import CTP from "./components/CTP";
import CTT from "./components/CTT";
import GE from "./components/GE";
import GS from "./components/GS";
import IEA from "./components/IEA";
import ISA from "./components/ISA";
import LIN from "./components/LIN";
import Overview from "./components/Overview";
import PID from "./components/PID";
import QTY from "./components/QTY";
import SE from "./components/SE";
import ST from "./components/ST";

export default function EightFortySix() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                FactoryPure EDI 846
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">Release: 1.0</h2>
            <div className="flex gap-[32px]">
                <div className="w-[70%]">
                    <Overview />
                    <ISA />
                    <GS />
                    <ST />
                    <BIA />
                    <div className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px] text-[18px]">LIN LOOP</p>
                        <LIN />
                        <PID />
                        <CTP />
                        <QTY />
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
                            <HashLink to="#bia">BIA Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#lin">LIN Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#pid">PID Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ctp">CTP Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#qty">QTY Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ctt">CTT Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ctt">SE Trailer</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ctt">GE Trailer</HashLink>
                        </li>
                        <li>
                            <HashLink to="#IEA">IEA Trailer</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}