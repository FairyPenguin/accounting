import { FormEvent, useCallback, useEffect, useState } from "react";
import { IRoleModule } from "../../roles/types";
import { RoleModules } from "../../roles/components/RoleModules";
import { AssignCustomPermissionsToUserProps } from "../interfaces";
import { useGetUserDetails } from "../hooks/useGetUserDetails.hook";
import { useGetAllRoles } from "../../roles/hooks/useGetAllRoles.hook";
import { useAlignedRoleModules } from "../../roles/hooks/useAlignedRoleModules.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";
import { useGetUserRoleAndPermissions } from "../hooks/useGetUserRoleAndPermissions.hook";
import { useAssignCustomPermissionsToUser } from "../hooks/useAssignCustomPermissionsToUser.hook";
import { transformSelectedOperationsToPermissions } from "../../roles/helpers/transformSelectedOperationsToPermissions.helper";
import { useRoleForm } from "../../roles/hooks/useRoleForm.hook";
import { EditRolePayload } from "../../roles/types/editRole.type";
import { toast } from "react-toastify";

const breadcrumbItems = [
    {
        label: "User Management",
        href: "/dashboard/settings/user-management?tab=overview&subTab=overview-&-analytics",
    },
    { label: "Users", href: "/dashboard/settings/user-management?tab=users&subTab=all-users" },
    { label: "Assign Custom Permissions", href: "#" },
];

export const AssignCustomPermissionsToUser: React.FC<AssignCustomPermissionsToUserProps> = ({ userId }) => {
    const [selectedOperations, setSelectedOperations] = useState<IRoleModule[]>([]);

    const { data: userDetails } = useGetUserDetails(userId) as any;
    const { data: userRoleAndPermissions } = useGetUserRoleAndPermissions(userId) as any;

    const userPermissions = userRoleAndPermissions?.data?.data?.permissions || [];
    const { register, handleSubmit, reset, errors, setValue } = useRoleForm();

    const { data: rolesData } = useGetAllRoles({
        limit: 1,
        page: 1,
        search: userRoleAndPermissions?.data?.data?.role?.name,
        searchBy: "name",
    }) as any;
    const { alignedRoleModules } = useAlignedRoleModules(rolesData?.data?.data[0]?.id);

    const handleModuleOperationChange = useCallback((updatedModules: IRoleModule[]) => {
        setSelectedOperations(updatedModules);
    }, []);

    const { mutate: assignCustomPermissionsToUser } = useAssignCustomPermissionsToUser();
    const handleSubmitButton = useCallback(
        (event: FormEvent) => {
            event.preventDefault();
            const transformedPermissions = transformSelectedOperationsToPermissions(selectedOperations);    
            if (transformedPermissions && Object.keys(transformedPermissions).length < 1) {
                return toast.error("No permissions are selected!");
            }
    
            assignCustomPermissionsToUser(
                {
                    userId: +userId,
                    payload: {
                        role: userRoleAndPermissions?.data?.data?.role?.name,
                        permissions: transformedPermissions,
                    },
                },
                {
                    onSuccess: () => {
                        reset();
                    },
                    onError: (error) => {
                        toast.error(`Error: ${error.message}`);
                    },
                },
            );
        },
        [selectedOperations, assignCustomPermissionsToUser, userId, reset],
    );
    return (
        <form onSubmit={handleSubmitButton}>
            <CustomBreadcrumb items={breadcrumbItems} />

            <h1 className="mb-8 text-xl font-extrabold">Assign Custom Permissions:</h1>

            <div className="my-10 flex items-center justify-start">
                <h2 className="text-sm  font-extrabold">Target User:</h2>
                <span className="ml-10">{`${userDetails?.data?.data?.firstName} ${userDetails?.data?.data?.lastName}`}</span>
            </div>

            <div className="my-10 flex items-center justify-start">
                <h2 className="text-sm font-extrabold">Current Role:</h2>
                <span className="ml-10">{userRoleAndPermissions?.data?.data?.role?.name}</span>
            </div>

            <h2 className="text-base font-extrabold">All Permissions:</h2>
            <div className="flex flex-col items-center justify-center" id="permissions">
                {alignedRoleModules?.length > 0 && (
                    <RoleModules
                        modules={alignedRoleModules}
                        onOperationChange={handleModuleOperationChange}
                        userPermissions={userPermissions}
                    />
                )}
            </div>

            <div className="mt-7 flex justify-center">
                <button
                    type="submit"
                    className="w-80 whitespace-nowrap rounded-lg bg-purple-600 px-3 py-2 text-center font-semibold text-white"
                >
                    Save changes
                </button>
            </div>
        </form>
    );
};
