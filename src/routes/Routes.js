import { Route, Routes } from "react-router-dom"
import ComingSoon from "../api/ComingSoon"
import Hero from "../components/Hero"
import ContactScreen from "../contact/ContactScreen"
import EDIOverview from "../edi/EDIOverview"
import Playground from "../edi/playground/Playground"
import SpecPage from "../edi/spec/SpecPage"

export default function Router() {
    return (
        <>
            <Routes>
                <Route index={true} element={<Hero />} />
                <Route path="edi">
                    <Route index={true} element={<EDIOverview />} />
                    <Route path="playground" element={<Playground />} />
                    <Route path=":transactionType" element={<SpecPage />} />
                </Route>
                <Route path="api">
                    <Route index={true} element={<ComingSoon />} />
                </Route>
                <Route path="/contact" element={<ContactScreen />} />
            </Routes>
        </>
    )
}
