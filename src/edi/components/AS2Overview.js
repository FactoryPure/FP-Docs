export default function AS2Overview() {
    return (
        <div id="as2">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">AS2</h2>
            <p className="text-offwhite mb-[16px]">We currently only support EDI using the AS2 protocol over http. Our suppliers will need to supply and receive/store a self-signed x509 certificate for signing, encryption, and decryption. If you want to send messages over https you may need to supply an additional ssl certificate.</p>
            <p className="text-offwhite font-bold mb-[4px] text-[18px]">Connection Information</p>
            <div className="grid grid-cols-2 mb-[16px] border-x border-darkgrey">
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-t border-darkgrey">
                    <p className="text-offwhite">ENDPOINT</p>
                    <p className="text-offwhite">http(s)://service.mftgateway.com/receiver</p>
                </div>
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-darkgrey">
                    <p className="text-fire font-bold">TESTING ENVIRONMENT</p>
                </div>
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-darkgrey">
                    <p className="text-offwhite">STATION / AS2-To</p>
                    <p className="text-offwhite">fp-test-station</p>
                </div>
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-darkgrey">
                    <p className="text-offwhite">ISA/GS ID &amp; QUALIFIER</p>
                    <p className="text-offwhite">ZZ*FACTORYPUREEDIT</p>
                </div>
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-darkgrey">
                    <p className="text-fire font-bold">PRODUCTION ENVIRONMENT</p>
                </div>
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-darkgrey">
                    <p className="text-offwhite">STATION / AS2-To</p>
                    <p className="text-offwhite">fp-production-station</p>
                </div>
                <div className="col-span-full grid grid-cols-2 p-[8px] border-b border-darkgrey">
                    <p className="text-offwhite">ISA/GS ID &amp; QUALIFIER</p>
                    <p className="text-offwhite">ZZ*FACTORYPUREEDIP</p>
                </div>
            </div>
            <p className="text-offwhite">If you need to trade, replace, or update a certificate please contact us to set up a meeting.</p>
        </div>
    )
}