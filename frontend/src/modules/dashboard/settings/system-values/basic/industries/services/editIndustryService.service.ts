import { APIUtility } from "@/shared/utils/api.util";
import { IndustryPayload } from "../types/addIndustry.type";
import { EditIndustryResponse } from "../types/editIndustry.type";

export const editIndustryService = async ({
    industryId,
    payload,
}: {
    industryId: string;
    payload: IndustryPayload;
}): Promise<EditIndustryResponse> => {
    return await APIUtility.put<EditIndustryResponse>(`lookups/${industryId}`, payload);
};
