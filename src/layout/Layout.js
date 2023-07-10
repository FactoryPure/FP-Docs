import Topbar from "./components/Topbar";

export default function Layout({ children }) {
    return <>
        <Topbar />
        <main class="relative py-[48px] px-[36px]">
            {children}
        </main>
    </>
}