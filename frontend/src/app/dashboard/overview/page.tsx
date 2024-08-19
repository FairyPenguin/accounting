import Overview from "@/shared/components/dashboard/Overview";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Overview",
};

const DashboardOverviewPage = () => {
    return <Overview />;
};

export default DashboardOverviewPage;
