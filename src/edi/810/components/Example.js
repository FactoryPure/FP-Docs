export default function Example() {
    return (
        <div id="example" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mt-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">
                Example Invoice
            </h2>
            <pre className="whitespace-pre-line text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small overflow-auto">
                ISA*00*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*00*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*ZZ*VENDOREDIID&nbsp;&nbsp;&nbsp;&nbsp;*ZZ*FACTORYPUREEDIP*230811*1145*U*00400*000000001*O*P*|~
                <br />
                GS*PO*VENDOREDIID*FACTORYPUREEDIP*20230811*1145*1*X*004010~
                <br />
                ST*810*0001~
                <br />
                BIG*20230811*99999*20230811*99999***DI~
                <br />
                CUR*SE*USD~
                <br />
                REF*BM*123456789~
                <br />
                N1*SF*Vendor Warehouse~
                <br />
                N3*123 St~
                <br />
                N4*CITY*TX*78233*US~
                <br />
                N1*ST*Customer Name~
                <br />
                N3*456 Dr~
                <br />
                N4*CITY*TX*78704*US~
                <br />
                ITD*05*3****20230811~
                <br />
                FOB*CC*H*WITHLIFTGATE~
                <br />
                IT1*001*1*EA*1234.56*PE***SK*VENDOR-SKU~
                <br />
                PID*F****Inverter generator~
                <br />
                TDS*135802~
                <br />
                TXI*CG*123.46**VD*TX****12-4567890~
                <br />
                TXI*LO**0.05~
                <br />
                CAD*T***AACT*AAA Cooper~
                <br />
                ISS*1*EA*215*LB*16268*CI~
                <br />
                CTT*1~
                <br />
                SE*20*0001~
                <br />
                GE*1*1~
                <br />
                IEA*1*000000001~
                <br />
            </pre>
        </div>
    )
}
