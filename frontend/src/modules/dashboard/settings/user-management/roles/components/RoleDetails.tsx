import React from "react";
import { useGetRoleDetailsHook } from "../hooks/useGetRoleDetails.hook";
import { PermissionsModule } from "../../permissions/components/PermissionsModule";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { RoleDetailsProps } from "../interfaces";

const breadcrumbItems = [
    {
        label: "User Management",
        href: "/dashboard/settings/user-management?tab=overview&subTab=overview-&-analytics",
    },
    { label: "Roles", href: "/dashboard/settings/user-management?tab=roles&subTab=all-roles" },
    { label: "Details", href: "#" },
];

export const RoleDetails: React.FC<RoleDetailsProps> = ({ roleId }) => {
    const { data } = useGetRoleDetailsHook(roleId);

    return (
        <div className="p-7">
            <CustomBreadcrumb items={breadcrumbItems} />
            <h1 className="mb-8 text-lg font-extrabold">Role Details:</h1>

            <div className="mb-10 flex w-1/4 flex-1 flex-col">
                <label htmlFor="name" className="mb-2 block text-sm font-extrabold text-gray-700">
                    Role Name
                </label>
                <span className="py-2text-gray-500 w-full rounded-xl px-3">{data?.name}</span>
            </div>

            <h1 className="text-xl font-semibold">Permissions:</h1>

            <div className="flex flex-col items-center justify-center" id="permissions">
                {data?.permissions?.map((module, index) => (
                    <PermissionsModule module={module} key={index} />
                ))}
            </div>
        </div>
    );
};
