import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import React from "react";

const tabsData: TabData[] = [
    {
        id: "vendor-settings",
        title: "Vendor Settings",
        horizontalTabs: [
            { name: "Default Values", component: <h3 key="default-values">Default Values</h3> },
            { name: "Payments Terms", component: <h3 key="payments-terms">Payments Terms</h3> },
            { name: "Invoicing", component: <h3 key="invoicing">Invoicing</h3> },
            { name: "Availability", component: <h3 key="availability">Availability</h3> },
        ],
    },
    {
        id: "client-settings",
        title: "Client Settings",
        horizontalTabs: [
            { name: "Default Values", component: <h3 key="client-default-values">Default Values</h3> },
            { name: "Payment Terms", component: <h3 key="client-payment-terms">Payment Terms</h3> },
            { name: "Invoicing", component: <h3 key="client-invoicing">Invoicing</h3> },
            { name: "Satisfaction Survey", component: <h3 key="satisfaction-survey">Satisfaction Survey</h3> },
        ],
    },
];

export const SettingsClientsAndVendorsComponent: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"Clients and Vendors:"} />;
};
