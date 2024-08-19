import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import React from "react";

const tabsData: TabData[] = [
    {
        id: "document-templates",
        title: "Document Templates",
        horizontalTabs: [
            { name: "Templates", component: <h3>Templates component</h3> },
            { name: "Themes", component: <h3>Themes component</h3> },
            { name: "Fonts", component: <h3>Fonts component</h3> },
            { name: "Background", component: <h3>Background component</h3> },
        ],
    },
    {
        id: "notifications",
        title: "Notifications",
        horizontalTabs: [{ name: "Overview", component: <h3>Notifications component</h3> }],
    },
    {
        id: "numbering-schemas",
        title: "Numbering Schemas",
        horizontalTabs: [{ name: "Overview", component: <h3>Numbering Schemas component</h3> }],
    },
    {
        id: "expressions",
        title: "Expressions",
        horizontalTabs: [{ name: "Overview", component: <h3>Expressions component</h3> }],
    },
];

export const SettingsTemplatesComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"Templates:"} />;
};
