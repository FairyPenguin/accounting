import { APIUtility } from "@/shared/utils/api.util";
import { AddLanguageResponse, LanguagePayload } from "../types/addLanguage.type";

export const addLanguageService = async (payload: LanguagePayload): Promise<AddLanguageResponse> => {
    return await APIUtility.post<AddLanguageResponse>("languages", payload);
};
