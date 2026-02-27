export default function ConventionsOverview() {
    return (
        <div id="conventions">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Conventions</h2>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">File Naming</p>
            <p className="text-offwhite mb-[8px]">
                File naming is not critical to our system and we can receive files with or without a specific format, or
                even without a name. You can expect the following format when receiving files:
            </p>
            <ul className="text-offwhite mb-[16px] pl-[8px] ml-[8px] leading-[1.75]">
                <li>[transaction type]-[ISO date in ms].edi</li>
                <li>Examples:</li>
                <li>850-{Date.now()}.edi</li>
                <li>997-{Date.now()}.edi</li>
            </ul>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">
                MDN &amp; Functional Acknowledgements
            </p>
            <p className="text-offwhite mb-[8px]">MDN is optional, by default we will send and request MDN.</p>
            <p className="text-offwhite mb-[16px]">
                We will always send a functional acknowledgement in response to non functional acknowledgement messages,
                if you do not receive one then you can assume that the message was not received.
            </p>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Message Expectations</p>
            <p className="text-offwhite mb-[8px]">We will only send and receive one functional group per message.</p>
            <p className="text-offwhite">
                On advanced shipping notices, please only send one order and only include the items that have been
                shippped. Tracking numbers are required and each pack level must include one tracking number.
            </p>
        </div>
    )
}
