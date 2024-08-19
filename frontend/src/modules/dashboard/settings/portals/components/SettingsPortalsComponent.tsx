import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import React from "react";

const tabsData: TabData[] = [
    {
        id: "1",
        title: "Client Portal",
        horizontalTabs: [
            { name: "Overview", component: <h3 key="client-portal-overview">Overview of Client Portal</h3> },
        ],
    },
    {
        id: "2",
        title: "Vendor Portal",
        horizontalTabs: [
            { name: "Overview", component: <h3 key="vendor-portal-overview">Overview of Vendor Portal</h3> },
        ],
    },
    {
        id: "3",
        title: "Client Groups & Rights",
        horizontalTabs: [
            {
                name: "All Client Groups & Rights",
                component: <h3 key="all-client-groups-rights">All Client Groups & Rights</h3>,
            },
        ],
    },
    {
        id: "4",
        title: "Quote Request Form",
        horizontalTabs: [
            { name: "Overview", component: <h3 key="quote-request-form-overview">Overview of Quote Request Form</h3> },
        ],
    },
];

export const SettingsPortalComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"Portals:"} />;
};
