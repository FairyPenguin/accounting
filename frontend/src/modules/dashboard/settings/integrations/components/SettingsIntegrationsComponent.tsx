import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import React from "react";

const tabsData: TabData[] = [
    {
        id: "periodic-jobs",
        title: "Periodic Jobs",
        horizontalTabs: [{ name: "Overview", component: <h3 key="periodic-jobs-overview">Overview</h3> }],
    },
];

export const SettingsIntegrationsComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"Integrations:"} />;
};
