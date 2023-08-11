export default function Example() {
    return (
        <div id="example" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mt-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">Example Inventory Advice</h2>
            <pre className="whitespace-pre-line text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small">
                ISA*00*          *00*          *ZZ*FACTORYPUREEDIP*ZZ*VENDOREDIID    *230811*1145*U*00400*000000001*O*P*|~<br/>
                GS*IB*VENDOREDIID*FACTORYPUREEDIP*20230811*1145*1*X*004010~<br/>
                ST*846*0001~<br/>
                BIA*22*SI*DAILY*20230811~<br/>
                LIN****SK*VENDOR-SKU***DV*warehouse-1~<br/>
                PID*F****Inverter Generator~<br/>
                CTP**UCP*123.45~<br/>
                QTY*V2*120~<br/>
                CTT*1~<br/>
                SE*8*0001~<br/>
                GE*1*1~<br/>
                IEA*1*000000001~<br/>
            </pre>
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px] mt-[16px]">Example Inventory Advice (Out of Stock)</h2>
            <pre className="whitespace-pre-line text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small">
                ISA*00*          *00*          *ZZ*FACTORYPUREEDIP*ZZ*VENDOREDIID    *230811*1145*U*00400*000000001*O*P*|~<br/>
                GS*IB*VENDOREDIID*FACTORYPUREEDIP*20230811*1145*1*X*004010~<br/>
                ST*846*0001~<br/>
                BIA*22*SI*DAILY*20230811~<br/>
                LIN****SK*VENDOR-SKU***DV*warehouse-1~<br/>
                PID*F****Inverter Generator~<br/>
                CTP**UCP*123.45~<br/>
                LDT*AS*7*DY~<br/>
                QTY*V2*0~<br/>
                CTT*1~<br/>
                SE*8*0001~<br/>
                GE*1*1~<br/>
                IEA*1*000000001~<br/>
            </pre>
        </div>
    )
}