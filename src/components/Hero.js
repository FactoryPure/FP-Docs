export default function Hero() {
    return (
        <section className="flex items-center justify-center text-center pt-[64px]">
            <div className="p-[64px] rounded-[4px] backdrop-blur-md bg-[rgb(255,255,255,0.05)] w-fit">
                <h1 className="text-offwhite font-bold text-[36px] leading-[1] mb-[8px]">FactoryPure Developer Portal</h1>
                <p className="text-offwhite text-[18px] mb-[24px]">Complete documentation and integration guides for our partners.</p>
                <div className="flex justify-center gap-[16px]">
                    <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/edi">EDI Hub</a>
                    <a className="py-[4px] px-[16px] bg-accent text-darkness font-bold rounded-[4px]" href="/api">API Hub</a>
                </div>
            </div>
        </section>
    )
}