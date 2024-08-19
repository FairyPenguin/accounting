import { toast } from "react-toastify";
import { IRoleModule } from "../types";
import { RoleModules } from "./RoleModules";
import React, { useCallback, useState } from "react";
import { AddRolePayload } from "../types/addRole.type";
import { useRoleForm } from "../hooks/useRoleForm.hook";
import { useAddRoleHook } from "../hooks/useAddRole.hook";
import { useGetAllPermissions } from "../../permissions/hooks/getAllPermissions.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { transformSelectedOperationsToPermissions } from "../helpers/transformSelectedOperationsToPermissions.helper";

const breadcrumbItems = [
    { label: "User Management", href: "/dashboard/settings/user-management?tab=overview&subTab=overview-&-analytics" },
    { label: "Roles", href: "/dashboard/settings/user-management?tab=roles&subTab=all-roles" },
    { label: "Create", href: "#" },
];

export const CreateRole: React.FC = () => {
    const [selectedOperations, setSelectedOperations] = useState<IRoleModule[]>([]);
    const { data: permissionsModules } = useGetAllPermissions() as any;

    const { mutate: addRole } = useAddRoleHook();
    const { register, handleSubmit, reset, errors } = useRoleForm();

    const handleModuleOperationChange = useCallback((updatedModules: IRoleModule[]) => {
        setSelectedOperations(updatedModules);
    }, []);

    const onSubmit = useCallback(
        (data: any) => {
            console.log(selectedOperations);
            const permissions = transformSelectedOperationsToPermissions(selectedOperations);
            const payload: AddRolePayload = { name: data.name, permissions };

            if (payload.permissions.length < 1) return toast.error("No permissions are selected!");
            console.log({ payload });

            addRole(payload, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [selectedOperations, addRole, reset],
    );

    return (
        <form className="p-7" onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <h1 className="mb-8 text-lg font-extrabold">Create Role:</h1>

            <div className="mb-10 flex w-1/4 flex-1 flex-col">
                <label htmlFor="name" className="mb-2 block text-sm font-extrabold text-gray-700">
                    Role Name
                </label>
                <input
                    id="name"
                    {...register("name", { required: "Role name is required!" })}
                    type="text"
                    className="w-full rounded-xl border px-3 py-2 leading-tight text-gray-500 shadow focus:outline-none"
                    autoComplete="off"
                    placeholder="Admin"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <h1 className="text-base font-extrabold">Permissions:</h1>

            <div className="flex flex-col items-center justify-center" id="permissions">
                {permissionsModules?.length > 0 && (
                    <RoleModules modules={permissionsModules} onOperationChange={handleModuleOperationChange} />
                )}
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="w-1/6 rounded-xl bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
                >
                    Save
                </button>
            </div>
        </form>
    );
};
