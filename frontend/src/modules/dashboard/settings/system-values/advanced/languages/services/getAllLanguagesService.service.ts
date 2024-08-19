import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllLanguagesResponse } from "../types/getAllLanguages.type";

export const getAllLanguagesService = async (params?: QueryParams): Promise<GetAllLanguagesResponse> => {
    return await APIUtility.get<GetAllLanguagesResponse>("languages", params);
};
