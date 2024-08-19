import { APIUtility } from "@/shared/utils/api.util";
import { EditRoleResponse } from "../types/editRole.type";
import { AddRolePayload, AddRoleResponse } from "../types/addRole.type";

export const editRoleService = async ({
    roleId,
    payload,
}: {
    roleId: string;
    payload: AddRolePayload;
}): Promise<AddRoleResponse> => {
    return await APIUtility.put<EditRoleResponse>(`roles/${roleId}`, payload);
};
