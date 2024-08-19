import { APIUtility } from "@/shared/utils/api.util";
import { LanguagePayload } from "../types/addLanguage.type";
import { EditLanguageResponse } from "../types/editLanguage.type";

export const editLanguageService = async ({
    languageId,
    payload,
}: {
    languageId: string;
    payload: LanguagePayload;
}): Promise<EditLanguageResponse> => {
    return await APIUtility.put<EditLanguageResponse>(`languages/${languageId}`, payload);
};
