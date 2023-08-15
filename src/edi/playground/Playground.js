import { NavLink } from "react-router-dom"
import BackButton from "../components/BackButton"
import { scrollToTop } from "../../helpers"
import { useEffect, useState } from "react";
import { read810, read846, read850, read856, read997 } from "./helpers v1.0/read";
import { getTransactionType, syncCatcher, validateEDIParserResult } from "./helpers v1.0/helpers";
import { map810, map846, map850, map856, map997, model810, model846, model850, model856, model997, testAgainstModel } from "./helpers v1.0/models";


const safePrinter = (object) => {
    try {
        return JSON.stringify(JSON.parse(object), null, 2)
    } catch {
        return "null"
    }
}

export default function Playground ({}) {
    const [fileInput, setFileInput] = useState();
    const [fileOutput, setFileOutput] = useState({outputMessage: "", errors: []});

    const fileReader = {
        "810": (fileContents) => read810(fileContents),
        "846": (data) => read846(data),
        "850": (data) => read850(data),
        "856": (data) => read856(data),
        "997": (fileContents) => read997(fileContents),
    }
    const models = {
        "810": model810,
        "846": model846,
        "850": model850,
        "856": model856,
        "997": model997
    }
    const maps = {
        "810": map810,
        "846": map846,
        "850": map850,
        "856": map856,
        "997": map997
    }
    
    useEffect(() => { 
        if (typeof fileInput === "string" && fileInput.length >= 105) {
            const fileContents = fileInput;
            const transactionType = getTransactionType(fileInput);
            if (!fileReader[transactionType]) { 
                setFileOutput({ outputMessage: "Nothing could be returned.", errors: [{message: "ISA, GS, or ST Header is malformed. Cannot detect transaction type. Please check your file again."}]})
            } else {
                const parsedFile = fileReader[transactionType](fileContents.replaceAll("\n", "").replaceAll("\r", ""));
                if (parsedFile.error) {
                    setFileOutput({
                        outputMessage: "A catastrophic error occurred. Please refer to the documentation and restructure your file.",
                        errors: [{message: parsedFile.error, segment: parsedFile.segment, position: parsedFile.position}]
                    })
                } else {
                    const [returnedFile, errors] = validateEDIParserResult(parsedFile, models[transactionType], maps[transactionType], transactionType)
                    setFileOutput({
                        javascriptObject: JSON.stringify(returnedFile),
                        errors: errors
                    })
                }
            }
        }
    }, [fileInput]);

    return (
        <div>
            <BackButton previousLink={"/edi"}/>
            <h1 className="text-offwhite font-bold text-[32px] leading-[1] mb-[16px]">
                EDI Playground
            </h1>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[8px]">Version: 4010</h2>
            <h2 className="text-offwhite font-bold text-[24px] leading-[1] mb-[32px]">Release: 1.0</h2>

            <div className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent flex flex-col gap-[32px]">

                <div className="border-b-[1px] border-offwhite pb-[32px]">
                    <h3 className="capitalize font-bold text-[24px] mb-[8px]">Input</h3>
                    {fileOutput.errors.length > 0 && <div>
                        <h3 className="capitalize font-bold text-[24px] mb-[8px]">Errors</h3>
                        {fileOutput.errors.map(e => 
                            <div className="py-[8px]">
                                {e.segment && e.position && <p className="text-lightred">SEGMENT: {e.segment}:{e.position}</p>}
                                <p className="text-[lightpink]">{e.message}</p>
                            </div>
                        )}
                    </div>}
                    <label className="font-bold capitalize">Raw Text</label>
                    <textarea placeholder="Paste your sample file here" className="w-[100%] h-[500px] bg-darkness font-bai text-[16px] p-[8px] border-[1px] border-darkness focus:border-accent outline-none rounded" value={fileInput} onChange={({target}) => {setFileInput(target.value)}}></textarea>
                </div>
                
                <div className="flex flex-col gap-[16px]">
                    <h3 className="capitalize font-bold text-[24px] mb-[8px]">Output</h3>

                    <div className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkness">
                        {fileOutput.javascriptObject ? <pre>{safePrinter(fileOutput.javascriptObject)}</pre> : fileOutput.outputMessage}
                    </div>
                </div>
            </div>
        </div>
    ) 
}