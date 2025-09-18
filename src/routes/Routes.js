import { Route, Routes } from "react-router-dom"
import ComingSoon from "../api/ComingSoon"
import Hero from "../components/Hero"
import ContactScreen from "../contact/ContactScreen"
import EightTen from "../edi/810/810"
import EightFortySix from "../edi/846/846"
import EightFifty from "../edi/850/850"
import EightFiftySix from "../edi/856/856"
import NineNineSeven from "../edi/997/997"
import EDIOverview from "../edi/EDIOverview"
import Playground from "../edi/playground/Playground"
import EightFiftyFive from "../edi/855/855"

export default function Router() {
    return (
        <>
            <Routes>
                <Route index={true} element={<Hero />} />
                <Route path="edi">
                    <Route index={true} element={<EDIOverview />} />
                    <Route path="playground" element={<Playground />} />
                    <Route path="810" element={<EightTen />} />
                    <Route path="846" element={<EightFortySix />} />
                    <Route path="850" element={<EightFifty />} />
                    <Route path="855" element={<EightFiftyFive />} />
                    <Route path="856" element={<EightFiftySix />} />
                    <Route path="997" element={<NineNineSeven />} />
                </Route>
                <Route path="api">
                    <Route index={true} element={<ComingSoon />} />
                </Route>
                <Route path="/contact" element={<ContactScreen />} />
            </Routes>
        </>
    )
}
