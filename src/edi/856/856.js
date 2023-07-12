import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import GE from "../headersAndTrailers/GE";
import GS from "../headersAndTrailers/GS";
import IEA from "../headersAndTrailers/IEA";
import ISA from "../headersAndTrailers/ISA";
import Overview from "./components/Overview";
import SE from "./components/SE";
import ST from "./components/ST";

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
                    <GS />
                    <ST />
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