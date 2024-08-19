import { APIUtility } from "@/shared/utils/api.util";
import { GetIndustryDetailsResponse } from "../types/getIndustryDetails.type";

export const getIndustryDetailsService = async (industryId: string): Promise<GetIndustryDetailsResponse> => {
    return await APIUtility.get<GetIndustryDetailsResponse>(`lookups/${industryId}`);
};
