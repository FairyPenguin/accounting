import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllHardwaresResponse } from "../types/getAllHardwares.type";

export const getAllHardwaresService = async (params?: QueryParams): Promise<GetAllHardwaresResponse> => {
    return await APIUtility.get<GetAllHardwaresResponse>("it-tools?type=hardware", params);
};
