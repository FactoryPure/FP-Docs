export default function ConventionsOverview() {
    return (
        <div id="conventions">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Conventions</h2>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">File Naming</p>
            <p className="text-offwhite mb-[8px]">File naming conventions are important to our storage system. Please use the following format when sending files.</p>
            <ul className="text-offwhite mb-[16px] pl-[8px] ml-[8px] leading-[1.75]">
                <li>
                    810IN_VENDORNAME_YYYYMMDD_HHMMSS.edi
                </li>
                <li>
                    846IB_VENDORNAME_YYYYMMDD_HHMMSS.edi
                </li>
                <li>
                    856SH_VENDORNAME_YYYYMMDD_HHMMSS.edi
                </li>
                <li>
                    997FA_VENDORNAME_YYYYMMDD_HHMMSS.edi
                </li>
            </ul>
            <p className="text-offwhite mb-[8px]">And expect the following format when receiving files.</p>
            <ul className="text-offwhite mb-[16px] pl-[8px] ml-[8px] leading-[1.75]">
                <li>
                    850PO_FACTORYPURE_YYYYMMDD_HHMMSS.edi
                </li>
                <li>
                    997FA_FACTORYPURE_YYYYMMDD_HHMMSS.edi
                </li>
            </ul>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">MDN &amp; Functional Acknowledgements</p>
            <p className="text-offwhite mb-[8px]">MDN is optional, by default we will send and request MDN.</p>
            <p className="text-offwhite mb-[16px]">We will always send a functional acknowledgement, if you do not receive one then you can assume that the message was not received.</p>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Message Expectations</p>
            <p className="text-offwhite mb-[8px]">We will only send and receive one functional group and one transaction set per message.</p>
            <p className="text-offwhite mb-[8px]">On advanced shipping notices, please only send one order and only include the items that have been shippped. Tracking numbers are required and each pack level must include one tracking number.</p>
        </div>
    )
}