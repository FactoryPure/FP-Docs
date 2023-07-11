import BackButton from "./components/BackButton";

export default function EightFifty() {
    return (
        <>
            <BackButton previousLink={"/edi#guides"} />
            <h1 className="text-offwhite">
                EDI 850 Implementation Guide
            </h1>
        </>
    )
}