import { NavLink } from "react-router-dom"
import BackButton from "../components/BackButton"
import { scrollToTop } from "../../helpers"
import { useEffect, useState } from "react";
import { read810, read846, read850, read856, read997 } from "./helpers v1.0/read";
import { getTransactionType, syncCatcher, validateEDIParserResult } from "./helpers v1.0/helpers";
import { map810, map846, map850, map856, map997, model810, model846, model850, model856, model997, testAgainstModel } from "./helpers v1.0/models";


function renderJavascriptObject (object) {
    const initialKeys = Object.keys(object || {});


    function renderObject (arg) {
        if (typeof arg === "object") {
            return <ul></ul>
        }
    }


    function navigateObj(arg, depth) {
        const keys = Object.keys(arg);
        return keys.map(key => {
            if (typeof arg[key] === "object") {
                return <ul className={`${initialKeys.includes(key) ? "" : "pl-[32px]"} py-[4px] text-offwhite`}>{key}: {Array.isArray(arg[key]) ? "[" : "{"}<br/>{navigateObj(arg[key])}{Array.isArray(arg[key]) ? "]" : "}"},</ul>
            } else {
                return <li className={`${initialKeys.includes(key) ? "" : "pl-[32px]"} py-[4px]`}>{key}: {typeof arg[key] === "boolean" ? JSON.stringify(arg[key]) : arg[key]},</li>
            }
        })
    }

    return (
        <ul>
            {
                navigateObj(object)// keys.map(key => <li>{key}</li>)
            }
        </ul>
    )
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
                        {fileOutput.javascriptObject ? renderJavascriptObject(JSON.parse(fileOutput.javascriptObject)) : fileOutput.outputMessage}
                    </div>
                    
                </div>
            </div>
        </div>
    ) 
}




















        // for (let message of messages) {
        //     const { fileName, fileContents } = message
        //     const transactionType = getTransactionType(fileContents)
        //     let returned997
        //     switch (transactionType) {
        //         case "810":
        //             const [invoice, err810] = syncCatcher(() => read810(fileContents));
        //             if (err810) {
        //                 console.error(err810);
        //                 break;
        //             }
        //             const [testedInvoice, validate810Errors] = testAgainstModel(invoice, model810, map810);
        //             returned997 = await service.handle810(testedInvoice.senderID, testedInvoice.receiverID, testedInvoice, validate810Errors)
        //             break
        //         case "846":
        //             const [inventoryAdvice, err846] = syncCatcher(() => read846(fileContents))
        //             if (err846) {
        //                 console.error(err846)
        //                 break
        //             }
        //             const [testedInventoryAdvice, validate846Errors] = testAgainstModel(inventoryAdvice, model846, map846)
        //             returned997 = await service.handle846(testedInventoryAdvice.senderID, testedInventoryAdvice.receiverID, testedInventoryAdvice, validate846Errors)
        //             break
        //         case "856":
        //             const [ASN, err856] = syncCatcher(() => read856(fileContents)) 
        //             if (err856) {
        //                 console.error(err856)
        //                 break
        //             }
        //             const [testedASN, validate856Errors] = testAgainstModel(ASN, model856, map856)
        //             returned997 = await service.handle856(testedASN.senderID, testedASN.receiverID, testedASN, validate856Errors)
        //             break
        //         case "997":
        //             const [parsed997, err997] = syncCatcher(() => read997(fileContents))
        //             if (err997) {
        //                 console.error(err856)
        //                 break
        //             } else {
        //                 console.log(parsed997)
        //             }
        //             break
        //         default: 
        //             console.log("No readable message")
        //     }
        //     if (returned997) {
        //         sendMessage(
        //             stationIdentifier,
        //             partnerIdentifier,
        //             `FactoryPure Functional Acknowledgement`,
        //             `997FA_FACTORYPURE_${new Date().getFullYear()}${`0${new Date().getMonth() + 1}`.slice(-2)}${`0${new Date().getDate()}`.slice(-2)}_${`0${new Date().getHours()}`.slice(-2)}${`0${new Date().getMinutes()}`.slice(-2)}${`0${new Date().getSeconds()}`.slice(-2)}.edi`,
        //             returned997
        //         )
        //     }
        //     if (transactionType) {
        //         saveEDIFileToBucket(fileContents, fileName, partnerIdentifier, stationIdentifier)
        //     }
        // }