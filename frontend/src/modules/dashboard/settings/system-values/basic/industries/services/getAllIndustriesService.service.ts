import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllIndustriesResponse } from "../types/getAllIndustries.type";

export const getAllIndustriesService = async (params?: QueryParams): Promise<GetAllIndustriesResponse> => {
    return await APIUtility.get<GetAllIndustriesResponse>("industries", params);
};
