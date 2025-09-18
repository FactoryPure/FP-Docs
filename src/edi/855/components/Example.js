export default function Example() {
    return (
        <div id="example" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mt-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">
                Example Purchase Order Acknowledgement
            </h2>
            <pre className="whitespace-pre-line text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small overflow-auto">
                ISA*00*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*00*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*ZZ*FACTORYPUREEDIP*ZZ*VENDOREDIID&nbsp;&nbsp;&nbsp;&nbsp;*230811*1145*U*00400*000000001*O*P*|~
                <br />
                GS*PO*FACTORYPUREEDIP*VENDOREDIID*20230811*1145*1*X*004010~
                <br />
                ST*850*0001~
                <br />
                BAK*00*AD*123456*20250918~
                <br />
                N1*ST*John Doe~
                <br />
                N3*123 Test Road~
                <br />
                N4*Town*TX*78640*US~
                <br />
                PO1*001*1*EA*123.45****SK*TEST-SKU~
                <br />
                ACK*IA*1~
                <br />
                CTT*1~
                <br />
                SE*9*0001~
                <br />
                GE*1*1~
                <br />
                IEA*1*000000001~
                <br />
            </pre>
        </div>
    )
}
