import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { fetchSpec, fetchRules, fetchSpecPublishedAt } from "../api"
import BackButton from "../components/BackButton"
import { SpecItemRenderer } from "./LoopRenderer"
import SpecOverview from "./SpecOverview"
import { TRANSACTION_DOCS } from "./examples"
import { annotateSpec } from "./specTree"

export default function SpecPage() {
    const { transactionType } = useParams()
    const [specData, setSpecData] = useState(null)
    const [rules, setRules] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)
        Promise.all([fetchSpec(transactionType), fetchRules()])
            .then(([data, rulesData]) => {
                if (cancelled) return
                setSpecData(data)
                setRules(rulesData)
            })
            .catch((err) => !cancelled && setError(err.message))
            .finally(() => !cancelled && setLoading(false))
        return () => {
            cancelled = true
        }
    }, [transactionType])

    const specVersion = specData?.specVersion
    const [specUpdatedAt, setSpecUpdatedAt] = useState(null)

    useEffect(() => {
        if (!specVersion) return
        let cancelled = false
        setSpecUpdatedAt(null)
        // The publish date is a nice-to-have, so failures just leave it off
        fetchSpecPublishedAt(specVersion)
            .then((publishedAt) => !cancelled && setSpecUpdatedAt(publishedAt))
            .catch(() => {})
        return () => {
            cancelled = true
        }
    }, [specVersion])

    const spec = useMemo(() => (specData ? annotateSpec(specData.spec) : []), [specData])
    const docs = TRANSACTION_DOCS[transactionType]

    if (loading || error) {
        return (
            <section>
                <BackButton previousLink="/edi#guides" />
                {loading ? (
                    <p className="text-offwhite text-[18px]">Loading spec...</p>
                ) : (
                    <p className="text-red-400 text-[18px]">Error: {error}</p>
                )}
            </section>
        )
    }

    return (
        <section>
            <BackButton previousLink="/edi#guides" />
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                FactoryPure EDI {transactionType}
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">{specData.name}</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            {docs?.release && (
                <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Release: {docs.release}</h2>
            )}
            {specVersion && (
                <p className="text-offwhite text-[14px] mb-[32px]">
                    Generated from spec v{specVersion}
                    {specUpdatedAt && ` (last updated ${new Date(specUpdatedAt).toLocaleDateString("en-CA")})`}
                </p>
            )}
            <div className="flex gap-[32px]">
                <div className="w-[70%]">
                    <SpecOverview spec={spec} />
                    {spec.map((item, idx) => (
                        <SpecItemRenderer key={idx} item={item} rules={rules} />
                    ))}
                    {docs?.example && (
                        <div id="example" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mt-[32px]">
                            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">
                                {docs.exampleTitle}
                            </h2>
                            <pre className="whitespace-pre text-white text-[14px] p-[8px] bg-darkgrey rounded-[4px] shadow-small overflow-auto">
                                {docs.example}
                            </pre>
                        </div>
                    )}
                </div>
                <div className="text-offwhite w-[30%] rounded-[4px] p-[32px] shadow-small bg-darkaccent h-fit sticky top-[32px]">
                    <h3 className="text-offwhite font-bold mb-[8px] leading-[1]">On this page</h3>
                    <NavList items={buildNavItems(spec, !!docs?.example)} />
                </div>
            </div>
        </section>
    )
}

function NavList({ items }) {
    return (
        <ul className="pl-[8px] list-disc ml-[8px] text-offwhite">
            {items.map((item) => (
                <li key={item.id}>
                    <HashLink to={`#${item.id}`}>{item.label}</HashLink>
                    {item.children && item.children.length > 0 && <NavList items={item.children} />}
                </li>
            ))}
        </ul>
    )
}

function buildNavItems(spec, hasExample) {
    const items = [{ id: "overview", label: "Overview" }]
    const walk = (item, target) => {
        if (item.type === "loop" && item.isEnvelope) {
            item.items.forEach((child) => walk(child, target))
        } else if (item.type === "loop") {
            const loopNav = { id: item.anchorId, label: item.label, children: [] }
            item.items.forEach((child) => walk(child, loopNav.children))
            target.push(loopNav)
        } else if (item.type === "segment") {
            target.push({ id: item.anchorId, label: `${item.name} Segment` })
        }
    }
    spec.forEach((item) => walk(item, items))
    if (hasExample) items.push({ id: "example", label: "Example" })
    return items
}
