import { APIUtility } from "@/shared/utils/api.util";
import { AddIndustryResponse, IndustryPayload } from "../types/addIndustry.type";

export const addIndustryService = async (payload: IndustryPayload): Promise<AddIndustryResponse> => {
    
    const updatedPayload = {
        ...payload,
        lookupType: 'industry',
    };

    return await APIUtility.post<AddIndustryResponse>("lookups", updatedPayload);
};
