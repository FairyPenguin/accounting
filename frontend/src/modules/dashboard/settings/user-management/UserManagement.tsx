import React from "react";
import RolesPage from "@/app/dashboard/settings/user-management/roles/page";
import UsersPage from "@/app/dashboard/settings/user-management/users/page";
import { PermissionsList } from "./permissions/components/PermissionsList";
import TabsContainer, { TabData } from "@/shared/components/TabsContainer.component";

const tabsData: TabData[] = [
    {
        id: "overview",
        title: "Overview",
        horizontalTabs: [
            {
                name: "Overview & Analytics",
                component: <div>This is going to be a page for high level insights and analytics!</div>,
            },
        ],
    },
    {
        id: "users",
        title: "Users",
        horizontalTabs: [{ name: "All Users", component: <UsersPage /> }],
    },
    {
        id: "roles",
        title: "Roles",
        horizontalTabs: [{ name: "All Roles", component: <RolesPage /> }],
    },
    {
        id: "permissions",
        title: "Permissions",
        horizontalTabs: [{ name: "All Permissions", component: <PermissionsList /> }],
    },
    {
        id: "activity-logs",
        title: "Activity Logs",
        horizontalTabs: [
            { name: "Users Logs", component: <div>Logs of users module</div> },
            { name: "Roles Logs", component: <div>Logs of Roles module</div> },
        ],
    },
];

export const UserManagement: React.FC = () => {
    return <TabsContainer tabsData={tabsData} title={"User Management:"} />;
};
