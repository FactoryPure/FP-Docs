import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import EightTen from "../edi/810";
import EightFortySix from "../edi/846";
import EightFifty from "../edi/850";
import EightFiftySix from "../edi/856";
import NineNineSeven from "../edi/997";
import EDIOverview from "../edi/EDIOverview";

export default function Router() {
    return (
        <>
            <Routes>
                <Route index={true} element={ <Hero /> } />
                <Route path="edi">
                    <Route index={true} element={ <EDIOverview /> } />
                    <Route path="810" element={ <EightTen /> } />
                    <Route path="846" element={ <EightFortySix /> } />
                    <Route path="850" element={ <EightFifty /> } />
                    <Route path="856" element={ <EightFiftySix /> } />
                    <Route path="997" element={ <NineNineSeven /> } />                
                </Route>
                <Route path="api">

                </Route>
            </Routes>
        </>
    )
}