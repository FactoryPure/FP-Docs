import { SegmentNotes } from "./SegmentRenderer"
import { REQUIREMENT_SHORT, flattenSegments, formatRepeat } from "./specTree"

const GRID = "grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px]"
const ROW = "text-offwhite col-span-full pb-[4px] mb-[8px] border-b border-darkgrey"

export default function SpecOverview({ spec }) {
    const segments = flattenSegments(spec)

    return (
        <div id="overview" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[32px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">
                Transaction Set Structure
            </h2>
            <div className={`text-offwhite ${GRID} mb-[32px]`}>
                <div className={`font-bold text-[12px] uppercase ${GRID} ${ROW}`}>
                    <div>Id</div>
                    <div>Segment Name</div>
                    <div>Req</div>
                    <div>Max Use</div>
                    <div>Loop</div>
                    <div>Notes</div>
                </div>
                {segments.map((segment) => (
                    <div key={segment.anchorId} className={`${GRID} ${ROW}`}>
                        <div>{segment.name}</div>
                        <div>{segment.description || segment.name}</div>
                        <div>{REQUIREMENT_SHORT[segment.required] || segment.required}</div>
                        <div>{formatRepeat(segment.maxUse)}</div>
                        <div>{segment.loopName}</div>
                        <SegmentNotes segment={segment} />
                    </div>
                ))}
            </div>
        </div>
    )
}
