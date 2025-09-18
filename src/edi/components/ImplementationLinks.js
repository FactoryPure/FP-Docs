import { NavLink } from "react-router-dom"
import { scrollToTop } from "../../helpers"

export default function ImplementationLinks() {
    return (
        <div id="guides">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">
                Implementation Guides
            </h2>
            <div className="flex gap-[16px] flex-col w-fit">
                <NavLink
                    className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] transition-all hover:scale-[1.025]"
                    to="/edi/810"
                    onClick={scrollToTop}
                >
                    810 Invoice
                </NavLink>
                <NavLink
                    className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]"
                    to="/edi/846"
                    onClick={scrollToTop}
                >
                    846 Inventory Advice
                </NavLink>
                <NavLink
                    className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]"
                    to="/edi/850"
                    onClick={scrollToTop}
                >
                    850 Purchase Order
                </NavLink>
                <NavLink
                    className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]"
                    to="/edi/855"
                    onClick={scrollToTop}
                >
                    855 Purchase Order Acknowledgement
                </NavLink>
                <NavLink
                    className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]"
                    to="/edi/856"
                    onClick={scrollToTop}
                >
                    856 Advance Ship Notice
                </NavLink>
                <NavLink
                    className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px] hover:scale-[1.025]"
                    to="/edi/997"
                    onClick={scrollToTop}
                >
                    997 Functional Acknowledgement
                </NavLink>
            </div>
        </div>
    )
}
