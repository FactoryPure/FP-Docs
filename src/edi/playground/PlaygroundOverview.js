import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../helpers";

export default function PlaygroundOverview () {
    return (
        <div id="playground">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">EDI Playground</h2>
            <p className="text-offwhite mb-[8px]">This testing tool can be used to discover and fix errors within your sample file(s) before submitting them for testing with us.</p>
            <div className="flex justify-center">
                <NavLink className="py-[8px] px-[32px] text-[24px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]" to="/edi/playground" onClick={scrollToTop}>EDI Playground</NavLink>
            </div>
        </div>
    )
}