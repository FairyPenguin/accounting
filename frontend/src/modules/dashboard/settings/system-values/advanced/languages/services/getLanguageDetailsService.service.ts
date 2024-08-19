import { APIUtility } from "@/shared/utils/api.util";
import { GetLanguageDetailsResponse } from "../types/getLanguageDetails.type";

export const getLanguageDetailsService = async (languageId: string): Promise<GetLanguageDetailsResponse> => {
    return await APIUtility.get<GetLanguageDetailsResponse>(`languages/${languageId}`);
};
