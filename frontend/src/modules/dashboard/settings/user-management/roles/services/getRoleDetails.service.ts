import { APIUtility } from "@/shared/utils/api.util";
import { GetRoleDetailsResponse } from "../types/getRoleDetails.type";

export const getRoleDetailsService = async (roleId: string): Promise<GetRoleDetailsResponse> => {
    return await APIUtility.get<GetRoleDetailsResponse>(`roles/${roleId}`);
};
