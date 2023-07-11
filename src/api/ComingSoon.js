import { Link } from "react-router-dom";

export default function ComingSoon() {
    return (
        <div className="pt-[64px]">
            <div className="p-[32px] rounded-[4px] shadow-small bg-darkaccent w-fit text-center mx-auto">
                <h1 className="text-offwhite text-[32px] font-bold leading-[1] mb-[16px]">Public API coming soon.</h1>
                <p className="text-offwhite">Please fill out the <Link className="underline" to={"/contact"}>contact form</Link> if you would like to be updated on the development status.</p>
            </div>
        </div>
    )
}