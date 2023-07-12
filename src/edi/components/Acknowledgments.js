export default function Acknowledgments() {
    return (
        <div id="ids">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Acknowledgements</h2>
            <p className="text-offwhite mb-[8px]">
                These acknowledgments shall not be acknowledged, thereby preventing an endless cycle of acknowledgments of acknowledgments. Nor shall a Functional Acknowledgment be sent to 
                report errors in a previous Functional Acknowledgment.
            </p>
            <p>
                The Functional Group Header Segment (GS) is used to start the envelope for the Functional Acknowledgment Transaction Sets. In preparing the functional group of acknowledgments, 
                the applicationsender's code and the application receiver's code, taken from the functional group being acknowledged, are exchanged; therefore, one acknowledgment functional
                group responds to only those functional groups from one application receiver's code to one application sender's code. There is only one Functional Acknowledgment Transaction 
                Set per acknowledged functional group.
            </p>
            <p>
                AK1 is used to respond to the functional group header and to start the acknowledgment for a functional group. There shall be one AK1 segment for the functional group that is
                being acknowledged. The Functional Acknowledgement is generated at the point of translation, intended for the originator (not any intermediate parties).
            </p>
            <p>
                AK2 is used to start the acknowledgment of a transaction set within the received functional group. The AK2 segments shall appear in the same order as the transaction sets in
                the functional group that has been received and is being acknowledged.
            </p>
        </div>
    )
}