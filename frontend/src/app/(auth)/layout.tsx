import Footer from "@/shared/layouts/footer";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col text-black dark:text-white-dark">
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
