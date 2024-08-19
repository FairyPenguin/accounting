import { AddRolePayload, AddRoleResponse } from "../types/addRole.type";
import { APIUtility } from "@/shared/utils/api.util";

export const addRoleService = async (payload: AddRolePayload): Promise<AddRoleResponse> => {
    return await APIUtility.post<AddRoleResponse>("roles", payload);
};
