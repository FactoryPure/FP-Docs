import Topbar from "./components/Topbar";

export default function Layout({ children }) {
    return <>
        <Topbar />
        <main class="max-w-[1440px] mx-auto relative py-[48px] px-[36px]">
            {children}
        </main>
    </>
}