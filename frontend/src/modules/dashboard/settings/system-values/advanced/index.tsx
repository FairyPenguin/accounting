import React from "react";
import { CountriesList } from "./countries/components/CountriesList";
import { LanguagesList } from "./languages/components/LanguagesList";
import { CurrenciesList } from "./currencies/components/CurrenciesList";
import { PaymentMethodsList } from "./payment-methods/components/PaymentMethodsList";
import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import { CalculationUnitsList } from "./calculation-units/components/CalculationUnitsList";

const tabsData: TabData[] = [
    {
        id: "languages",
        title: "Languages",
        horizontalTabs: [{ name: "Overview", component: <LanguagesList /> }],
    },
    {
        id: "countries",
        title: "Countries",
        horizontalTabs: [{ name: "Overview", component: <CountriesList /> }],
    },
    {
        id: "currencies",
        title: "Currencies",
        horizontalTabs: [{ name: "All Client Groups & Rights", component: <CurrenciesList /> }],
    },
    {
        id: "calculation-units",
        title: "Calculation Units",
        horizontalTabs: [{ name: "Overview", component: <CalculationUnitsList /> }],
    },
    {
        id: "payment-methods",
        title: "Payment Methods",
        horizontalTabs: [{ name: "Overview", component: <PaymentMethodsList /> }],
    },
    // {
    //     id: "2",
    //     title: "Categories",
    //     horizontalTabs: [{ name: "Overview", component: <div>Categories content</div> }],
    // },
    // {
    //     id: "4",
    //     title: "Job Types",
    //     horizontalTabs: [{ name: "Overview", component: <div>Job Types content</div> }],
    // },
];

export const SystemValuesAdvanced: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"System Values (Advanced):"} />;
};
