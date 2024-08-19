import { APIUtility } from "@/shared/utils/api.util";
import { DeleteLanguageResponse } from "../types/deleteLanguage.type";

export const deleteLanguageService = async (languageId: string): Promise<DeleteLanguageResponse> => {
    return APIUtility.delete<DeleteLanguageResponse>(`languages/${languageId}`);
};
