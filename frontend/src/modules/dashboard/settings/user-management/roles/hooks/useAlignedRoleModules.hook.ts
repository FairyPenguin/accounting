import { useState, useEffect } from "react";
import { useGetRoleDetailsHook } from "./useGetRoleDetails.hook";
import { useGetAllPermissions } from "../../permissions/hooks/getAllPermissions.hook";
import { alignPermissionsWithCurrentState } from "../helpers/alignPermissionsWithCurrentState.helper";
import { IRoleModule } from "../types";

interface AlignedRoleModulesResult {
    name: string | undefined;
    alignedRoleModules: IRoleModule[];
}

/**
 * Custom hook for merging the current role modules with the all system roles modules,
 * so we can flag the selected operations in each module
 *
 * @param {string} roleId - The unique identifier of the role.
 * @returns {AlignedRoleModulesResult}  An array of `IRoleModule` objects representing the aligned role modules and their permission statuses.
 */
export const useAlignedRoleModules = (roleId: string): AlignedRoleModulesResult => {
    const { data: roleDetails } = useGetRoleDetailsHook(roleId);
    const { data: permissions } = useGetAllPermissions();

    const [alignedRoleModules, setAlignedRoleModules] = useState<IRoleModule[]>([]);

    useEffect(() => {
        if (roleDetails?.permissions && permissions) {
            const transformedRoleModules = roleDetails.permissions;
            const permissionsArray = permissions;
            const aligned = alignPermissionsWithCurrentState(transformedRoleModules, permissionsArray);

            setAlignedRoleModules(aligned);
        }
    }, [roleDetails, permissions]);

    return { name: roleDetails?.name, alignedRoleModules };
};
