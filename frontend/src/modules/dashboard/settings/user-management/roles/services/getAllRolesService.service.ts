import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllRolesResponse } from "../types/getAllRoles.type";

export const getAllRolesService = async (params?: QueryParams): Promise<GetAllRolesResponse> => {
    return await APIUtility.get<GetAllRolesResponse>("roles", params);
};
