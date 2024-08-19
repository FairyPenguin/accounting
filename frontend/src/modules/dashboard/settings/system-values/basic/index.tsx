import React from "react";
import { StatesList } from "./states/components/StatesList";
import { ServicesList } from "./services/components/ServicesList";
import { CatToolsList } from "./cat-tools/components/CatToolsList";
import { HardwaresList } from "./hardwares/components/HardwareList";
import { SoftwaresList } from "./softwares/components/SoftwareList";
import { IndustriesList } from "./industries/components/IndustryList";
import { DepartmentsList } from "./departments/components/DepartmentList";
import { FieldsOfStudyList } from "./field-of-study/components/FieldsOfStudyList";
import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";
import { SpecializationsList } from "./specializations/components/SpecializationList";

const tabsData: TabData[] = [
    {
        id: "cat-tools",
        title: "CAT Tools",
        horizontalTabs: [{ name: "Overview", component: <CatToolsList /> }],
    },
    {
        id: "hardwares",
        title: "Hardwares",
        horizontalTabs: [{ name: "Overview", component: <HardwaresList /> }],
    },
    {
        id: "softwares",
        title: "Softwares",
        horizontalTabs: [{ name: "Overview", component: <SoftwaresList /> }],
    },
    {
        id: "services",
        title: "Services",
        horizontalTabs: [{ name: "Overview", component: <ServicesList /> }],
    },
    {
        id: "fields-of-study",
        title: "Fields Of Study",
        horizontalTabs: [{ name: "Overview", component: <FieldsOfStudyList /> }],
    },
    {
        id: "departments",
        title: "Departments",
        horizontalTabs: [{ name: "Overview", component: <DepartmentsList /> }],
    },
    {
        id: "specializations",
        title: "Specializations",
        horizontalTabs: [{ name: "Overview", component: <SpecializationsList /> }],
    },
    {
        id: "industries",
        title: "Industries",
        horizontalTabs: [{ name: "Overview", component: <IndustriesList /> }],
    },
    {
        id: "states",
        title: "States",
        horizontalTabs: [{ name: "Overview", component: <StatesList /> }],
    },
];

export const SystemValuesBasic: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"System Values (Basic):"} />;
};
