import { APIUtility } from "@/shared/utils/api.util";
import { DeleteIndustryResponse } from "../types/deleteIndustry.type";

export const deleteIndustryService = async (industryId: string): Promise<DeleteIndustryResponse> => {
    return APIUtility.delete<DeleteIndustryResponse>(`industries/${industryId}`);
};
