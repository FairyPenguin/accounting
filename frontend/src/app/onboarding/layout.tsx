import Footer from "@/shared/layouts/footer";
import { PublicNavbar } from "@/shared/layouts/PublicNavbar";

const OnBoardingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex min-h-screen flex-col text-black dark:text-white-dark">
            <PublicNavbar />
            <div className="flex-1">{children}</div>
            <Footer />
        </section>
    );
};

export default OnBoardingLayout;
