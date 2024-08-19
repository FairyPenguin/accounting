import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import React from "react";

const tabsData: TabData[] = [
    {
        id: "1",
        title: "Browse Logs",
        horizontalTabs: [{ name: "Overview", component: <h3>Overview component</h3> }],
    },
    { id: "2", title: "E-mail Line", horizontalTabs: [{ name: "Overview", component: <h3>Overview component</h3> }] },
    {
        id: "3",
        title: "System Monitor",
        horizontalTabs: [{ name: "Overview", component: <h3>Overview component</h3> }],
    },
];

export const SettingsInformationComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"System Information:"} />;
};
