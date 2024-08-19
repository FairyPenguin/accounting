import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllSpecializationsResponse } from "../types/getAllSpecializations.type";

export const getAllSpecializationsService = async (params?: QueryParams): Promise<GetAllSpecializationsResponse> => {
    return await APIUtility.get<GetAllSpecializationsResponse>("specialization", params);
};
