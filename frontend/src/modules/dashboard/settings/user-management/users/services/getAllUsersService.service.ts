import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllUsersResponse } from "../types/getAllUsers.type";

export const getAllUsersService = async (params?: QueryParams): Promise<GetAllUsersResponse> => {
    return await APIUtility.get<GetAllUsersResponse>("users", params);
};
