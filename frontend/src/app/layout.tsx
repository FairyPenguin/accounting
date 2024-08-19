import { Metadata } from "next";
import "../shared/styles/tailwind.css";
import "../shared/styles/typography.css";
import { Nunito } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-perfect-scrollbar/dist/css/styles.css";
import ProviderComponent from "@/shared/layouts/provider-component";

export const metadata: Metadata = {
    title: {
        template: "%s | SuperRabbit",
        default: "SuperRabbit",
    },
    icons: {
        icon: "/favicon.png",
    },
};
// const nunito = Nunito({
//     weight: ["400", "500", "600", "700", "800"],
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--font-nunito",
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ProviderComponent>
                    {children}
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </ProviderComponent>
            </body>
        </html>
    );
}
