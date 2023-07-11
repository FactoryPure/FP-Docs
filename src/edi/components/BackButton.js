import { HashLink } from "react-router-hash-link";

export default function BackButton({ previousLink }) {
    return (
        <HashLink to={previousLink} className="cursor-pointer absolute top-0 left-[36px] py-[4px] px-[8px] bg-fire text-darkness font-bold text-[14px] leading-[1]">Back To Overview</HashLink>
    )
}