export default function SenderReceiverIds() {
    return (
        <div id="ids">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Sender / Receiver IDs</h2>
            <p className="text-offwhite mb-[8px]">When testing, we use the sender ID:</p>
            <p className="text-offwhite mb-[8px] ml-[8px] font-bold">ZZ/FACTORYPUREEDIT</p> 
            <p className="text-offwhite mb-[8px]">In Production, we use the sender ID:</p>
            <p className="text-offwhite mb-[8px] ml-[8px] font-bold">ZZ/FACTORYPUREEDIP.</p>
            <p className="text-offwhite">ID will be the same on ISA and GS segments.</p>
        </div>
    )
}