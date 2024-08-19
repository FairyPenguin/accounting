import { AxiosError } from "axios";
import { IPermission } from "../types";
import { IRoleModule } from "../../roles/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { GetAllPermissionsResponse } from "../types/getAllPermissions.type";
import { getAllPermissionsService } from "../services/getAllPermissions.service";
import { convertRawPermissionsToRoleModules } from "../../roles/helpers/convertRawPermissionsToRoleModules";

export const useGetAllPermissions = (): UseQueryResult<IRoleModule[], AxiosError> => {
    return useQuery<IRoleModule[], AxiosError>({
        queryKey: ["getAllPermissions"],
        queryFn: async () => {
            const response: GetAllPermissionsResponse = await getAllPermissionsService();

            const permissions: IPermission[] = response?.data.data as any;

            return convertRawPermissionsToRoleModules(permissions);
        },
    });
};
