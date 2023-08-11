export default function Example() {
    return (
        <div id="example" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mt-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Example Purchase Order</h2>
            <pre className="whitespace-pre-line text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small overflow-auto">
                ISA*00*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*00*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*ZZ*FACTORYPUREEDIP*ZZ*VENDOREDIID&nbsp;&nbsp;&nbsp;&nbsp;*230811*1145*U*00400*000000001*O*P*|~<br/>
                GS*PO*VENDOREDIID*FACTORYPUREEDIP*20230811*1145*1*X*004010~<br/>
                ST*850*0001~<br/>
                BEG*00*NE*99999**20230811~<br/>
                REF*11*123456789~<br/>
                SAC*A*D980***10000~<br/>
                N9*L1*MESSAGE TO FOLLOW~<br/>
                MSG*Customer will need liftgate~<br/>
                N1*SF*Vendor Warehouse~<br/>
                N3*123 St~<br/>
                N4*CITY*TX*78233*US~<br/>
                N1*ST*Customer Name~<br/>
                N3*321 Dr~<br/>
                N4*CITY*TX*78704*US~<br/>
                FOB*CC*H*WITHLIFTGATE~<br/>
                TD5*B*2*AACT*T*AAA Cooper~<br/>
                PO1*001*1*EA*1234.56*PE*CB*FACTORYPURE-SKU*SK*VENDOR-SKU~<br/>
                CTT*1~<br/>
                SE*17*0001~<br/>
                GE*1*1~<br/>
                IEA*1*000000001~<br/>
            </pre>
        </div>
    )
}