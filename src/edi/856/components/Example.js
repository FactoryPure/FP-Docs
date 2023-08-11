export default function Example() {
    return (
        <div id="example" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mt-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Example Shipping Notice</h2>
            <pre className="whitespace-pre-line text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small">
                ISA*00*          *00*          *ZZ*FACTORYPUREEDIP*ZZ*VENDOREDIID    *230811*1145*U*00400*000000001*O*P*|~<br/>
                GS*IB*VENDOREDIID*FACTORYPUREEDIP*20230811*1145*1*X*004010~<br/>
                ST*846*0001~<br/>
                BSN*00*99999-1*20230811*1145*0001~<br/>
                HL*1**S~<br/>
                TD1*PLT*1~<br/>
                TD5*B*2*AACT*T*AAA Cooper~<br/>
                REF*BM*123456789~<br/>
                DTM*011*20230811~<br/>
                N1*ST*Vendor Warehouse~<br/>
                N3*123 St~<br/>
                N4*CITY*TX*78233*US~<br/>
                N1*ST*Customer Name~<br/>
                N3*321 Dr~<br/>
                N4*CITY*TX*78704*US~<br/>
                HL*2*1*O~<br/>
                PRF*99999***20230811~<br/>
                HL*3*2*P~<br/>
                REF*2I*123456789~<br/>
                HL*4*3*I~<br/>
                LIN****SK*VENDOR-SKU~<br/>
                SN1**1*EA~<br/>
                PID*F****Portable generator~<br/>
                CTT*1~<br/>
                SE*23*0001~<br/>
                GE*1*1~<br/>
                IEA*1*000000001~<br/>
            </pre>
        </div>
    )
}