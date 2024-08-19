import { APIUtility } from "@/shared/utils/api.util";
import { GetUserRoleAndPermissionsResponse } from "../types/getUserRoleAndPermissions.ts";

export const getUserRoleAndPermissionsService = async (userId: string): Promise<GetUserRoleAndPermissionsResponse> => {
    return await APIUtility.get<GetUserRoleAndPermissionsResponse>(`users/${userId}/roles`);
};
