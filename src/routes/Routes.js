import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import EightFiftySix from "../edi/856";
import EDIOverview from "../edi/EDIOverview";

export default function Router() {
    return (
        <>
            <Routes>
                <Route index={true} element={ <Hero /> } />
                <Route path="edi">
                    <Route index={true} element={ <EDIOverview /> } />
                    <Route path="810" element={ <EightFiftySix /> } />
                    <Route path="846" element={ <EightFiftySix /> } />
                    <Route path="850" element={ <EightFiftySix /> } />
                    <Route path="856" element={ <EightFiftySix /> } />
                    <Route path="997" element={ <EightFiftySix /> } />                
                </Route>
                <Route path="api">

                </Route>
            </Routes>
        </>
    )
}