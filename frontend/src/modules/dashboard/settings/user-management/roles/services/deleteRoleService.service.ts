import { APIUtility } from "@/shared/utils/api.util";
import { DeleteRoleResponse } from "../types/deleteRole.type";

export const deleteRoleService = async (roleId: string): Promise<DeleteRoleResponse> => {
    return APIUtility.delete<DeleteRoleResponse>(`roles/${roleId}`);
};
