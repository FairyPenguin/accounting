import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import React from "react";

const tabsData: TabData[] = [
    {
        id: "settings",
        title: "Settings",
        horizontalTabs: [
            { name: "Administrator", component: <h3 key="administrator">Administrator</h3> },
            { name: "E-mail", component: <h3 key="email">E-mail</h3> },
            {
                name: "Number & Date Formatting",
                component: <h3 key="number-date-formatting">Number & Date Formatting</h3>,
            },
            { name: "Defaults", component: <h3 key="defaults">Defaults</h3> },
            { name: "Dashboards", component: <h3 key="dashboards">Dashboards</h3> },
            { name: "CRM", component: <h3 key="crm">CRM</h3> },
        ],
    },
    {
        id: "branches",
        title: "Branches",
        horizontalTabs: [{ name: "All Branches", component: <h3 key="all-branches">All Branches</h3> }],
    },
    {
        id: "custom-fields-columns",
        title: "Custom Fields and Columns",
        horizontalTabs: [
            { name: "Custom Fields", component: <h3 key="custom-fields">Custom Fields</h3> },
            { name: "Field Layout", component: <h3 key="field-layout">Field Layout</h3> },
        ],
    },
    {
        id: "hidden-fields",
        title: "Hidden Fields",
        horizontalTabs: [{ name: "All Hidden Fields", component: <h3 key="all-hidden-fields">All Hidden Fields</h3> }],
    },
    {
        id: "branding",
        title: "Branding",
        horizontalTabs: [
            { name: "Logo", component: <h3 key="logo">Logo</h3> },
            { name: "Home Portal", component: <h3 key="home-portal">Home Portal</h3> },
            { name: "Vendor Portal", component: <h3 key="vendor-portal">Vendor Portal</h3> },
            { name: "Client Portal", component: <h3 key="client-portal">Client Portal</h3> },
        ],
    },
    {
        id: "views",
        title: "Views",
        horizontalTabs: [{ name: "All Views", component: <h3 key="all-views">All Views</h3> }],
    },
    {
        id: "security",
        title: "Security",
        horizontalTabs: [
            { name: "Session", component: <h3 key="session">Session</h3> },
            { name: "Home Portal", component: <h3 key="security-home-portal">Home Portal</h3> },
            { name: "Vendor Portal", component: <h3 key="security-vendor-portal">Vendor Portal</h3> },
            { name: "Client Portal", component: <h3 key="security-client-portal">Client Portal</h3> },
        ],
    },
];

export const SettingsGeneralComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"General Configurations:"} />;
};
