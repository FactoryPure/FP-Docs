import { HashLink } from "react-router-hash-link";
import BackButton from "../components/BackButton";
import GS from "../headersAndTrailers/GS";
import ISA from "../headersAndTrailers/ISA";
import Overview from "./components/Overview";
import ST from "../headersAndTrailers/ST";
import AK1 from "./components/AK1.js";
import AK2 from "./components/AK2";
import AK5 from "./components/AK5";
import AK9 from "./components/AK9";
import SE from "./components/SE";
import GE from "../headersAndTrailers/GE";
import IEA from "../headersAndTrailers/IEA";

export default function NineNineSeven() {
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
                    <GS functionalGroupIdentifierCode={"FA"} />
                    <ST transactionSetIdentifierCode={997} />
                    <AK1 />
                    <div id="lin-loop" className="p-[8px] bg-darkgrey rounded-[4px] shadow-small mb-[32px]">
                        <p className="text-fire text-[20px] font-bold leading-[1] mb-[8px]">AK2 LOOP - Repeat: 1</p>
                        <AK2 />
                        <AK5 />
                    </div>
                    <AK9 />
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
                            <HashLink to="#ak1">AK1 Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ak2">AK2 Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ak5">AK5 Segment</HashLink>
                        </li>
                        <li>
                            <HashLink to="#ak9">AK9 Segment</HashLink>
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