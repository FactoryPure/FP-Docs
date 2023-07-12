import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import GS from "./components/GS";
import ISA from "./components/ISA";
import Overview from "./components/Overview";
import ST from "./components/ST";
import AK1 from "./components/AK1.js";
import AK2 from "./components/AK2";
import AK5 from "./components/AK5";
import AK9 from "./components/AK9";

export default function EightFortySix() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                FactoryPure EDI 997
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">Release: 1.0</h2>
            <div className="flex gap-[32px]">
                <div className="w-[70%]">
                    <Overview />
                    <ISA />
                    <GS />
                    <ST />
                    <AK1 />
                    <div id="lin-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px]">AK2 LOOP - Repeat: 1</p>
                        <AK2 />
                        <AK5 />
                    </div>
                    <AK9 />
                    
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