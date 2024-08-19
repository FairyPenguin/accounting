import ConnectionStatus from "@/shared/components/ConnectionStatus";
import ContentAnimation from "@/shared/layouts/content-animation";
import MainContainer from "@/shared/layouts/main-container";
import ScrollToTop from "@/shared/layouts/scroll-to-top";
import Portals from "@/shared/components/portals";
import Sidebar from "@/shared/layouts/sidebar";
import Overlay from "@/shared/layouts/overlay";
import Header from "@/shared/layouts/header";
import LayoutSegments from "./projects/LayoutSegments";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* BEGIN MAIN CONTAINER */}
            <div className="relative">
                <Overlay />

                <ScrollToTop />

                <MainContainer>
                    {/* BEGIN SIDEBAR */}
                    <Sidebar />
                    {/* END SIDEBAR */}

                    <div className="main-content flex min-h-screen flex-col">
                        {/* BEGIN TOP NAVBAR */}
                        <Header />
                        {/* END TOP NAVBAR */}

                        {/* BEGIN CONTENT AREA */}
                        <ContentAnimation>{children}</ContentAnimation>
                    </div>
                    {/* END CONTENT AREA */}
                    {/* <LayoutSegments /> */}

                    <Portals />
                </MainContainer>
            </div>
            <ConnectionStatus />
        </>
    );
}
