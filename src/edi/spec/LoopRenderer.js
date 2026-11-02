import SegmentRenderer from "./SegmentRenderer"
import { formatRepeat } from "./specTree"

export function SpecItemRenderer({ item, rules, depth = 0 }) {
    if (item.type === "loop") return <LoopRenderer loop={item} rules={rules} depth={depth} />
    if (item.type === "segment") return <SegmentRenderer segment={item} rules={rules} />
    return null
}

export default function LoopRenderer({ loop, rules, depth = 0 }) {
    if (loop.isEnvelope) {
        return loop.items.map((item, idx) => <SpecItemRenderer key={idx} item={item} rules={rules} depth={depth} />)
    }

    const optional = loop.repeatMinimum === 0 ? " (optional)" : ""

    return (
        <div
            id={loop.anchorId}
            className={`p-[8px] rounded-[4px] shadow-small mb-[32px] ${depth > 0 ? "bg-grey/20" : "bg-darkgrey"}`}
        >
            <p className="text-fire font-bold leading-[1] mb-[8px] text-[18px]">
                {loop.name} LOOP{loop.description ? ` - ${loop.description}` : ""} - Repeat:{" "}
                {formatRepeat(loop.repeatMaximum)}
                {optional}
            </p>
            {loop.items.map((item, idx) => (
                <SpecItemRenderer key={idx} item={item} rules={rules} depth={depth + 1} />
            ))}
        </div>
    )
}
