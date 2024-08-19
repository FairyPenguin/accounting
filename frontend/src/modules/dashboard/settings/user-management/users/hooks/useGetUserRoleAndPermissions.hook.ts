import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetUserRoleAndPermissionsResponse } from "../types/getUserRoleAndPermissions.ts";
import { getUserRoleAndPermissionsService } from "../services/getUserRolesAndPermissionsService.service";

export function useGetUserRoleAndPermissions(
    userId: string,
): UseQueryResult<GetUserRoleAndPermissionsResponse, AxiosError> {
    return useQuery<GetUserRoleAndPermissionsResponse, AxiosError>({
        queryKey: ["getUserRoleAndPermissions"],
        queryFn: () => getUserRoleAndPermissionsService(userId),
    });
}
