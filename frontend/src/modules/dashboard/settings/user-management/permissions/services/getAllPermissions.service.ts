import { GetAllPermissionsResponse } from "../types/getAllPermissions.type";
import { APIUtility } from "@/shared/utils/api.util";

export const getAllPermissionsService = async (): Promise<GetAllPermissionsResponse> => {
    return await APIUtility.get<GetAllPermissionsResponse>(`permissions`);
};
