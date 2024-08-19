import { toast } from "react-toastify";
import { IRoleModule } from "../types";
import { RoleModules } from "./RoleModules";
import { EditRoleProps } from "../interfaces";
import { useRoleForm } from "../hooks/useRoleForm.hook";
import { useEditRole } from "../hooks/useEditRole.hook";
import { EditRolePayload } from "../types/editRole.type";
import React, { useCallback, useEffect, useState } from "react";
import { useAlignedRoleModules } from "../hooks/useAlignedRoleModules.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { transformSelectedOperationsToPermissions } from "../helpers/transformSelectedOperationsToPermissions.helper";

const breadcrumbItems = [
    {
        label: "User Management",
        href: "/dashboard/settings/user-management?tab=overview&subTab=overview-&-analytics",
    },
    { label: "Roles", href: "/dashboard/settings/user-management?tab=roles&subTab=all-roles" },
    { label: "Edit", href: "#" },
];

export const EditRole: React.FC<EditRoleProps> = ({ roleId }) => {
    const [selectedOperations, setSelectedOperations] = useState<IRoleModule[]>([]);

    const { mutate: editRole } = useEditRole();
    const { name, alignedRoleModules } = useAlignedRoleModules(roleId);
    const { register, handleSubmit, reset, errors, setValue } = useRoleForm();

    const handleModuleOperationChange = useCallback((updatedModules: IRoleModule[]) => {
        setSelectedOperations(updatedModules);
    }, []);

    const handleSubmitButton = useCallback(
        (formData: any) => {
            const transformedPermissions = transformSelectedOperationsToPermissions(selectedOperations);
            const payload: EditRolePayload = { name: formData.name, permissions: transformedPermissions };

            if (transformedPermissions && Object.keys(transformedPermissions).length < 1) {
                return toast.error("No permissions are selected!");
            }

            editRole({ roleId, payload } as any, {
                onSuccess: () => {
                    reset();
                },
                onError: (error) => {
                    toast.error(`Error: ${error.message}`);
                },
            });
        },
        [selectedOperations, editRole, reset],
    );

    useEffect(() => {
        if (name) {
            setValue("name", name);
        }
    }, [name, setValue]);

    return (
        <form onSubmit={handleSubmit(handleSubmitButton)} className="p-7">
            <CustomBreadcrumb items={breadcrumbItems} />

            <h1 className="mb-8 text-lg font-extrabold">Edit Role:</h1>

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
                    placeholder={name}
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <h1 className="text-xl font-semibold">Permissions:</h1>
            <div className="flex flex-col items-center justify-center" id="permissions">
                {alignedRoleModules.length > 0 && (
                    <RoleModules modules={alignedRoleModules} onOperationChange={handleModuleOperationChange} />
                )}
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="w-1/6 rounded-xl bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
                >
                    Update
                </button>
            </div>
        </form>
    );
};
