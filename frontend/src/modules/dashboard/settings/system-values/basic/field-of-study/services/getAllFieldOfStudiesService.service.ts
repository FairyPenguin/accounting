import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllFieldsOfStudyResponse } from "../types/getAllFieldsOfStudy.type";

export const getAllFieldsOfStudyService = async (params?: QueryParams): Promise<GetAllFieldsOfStudyResponse> => {
    return await APIUtility.get<GetAllFieldsOfStudyResponse>("fields-study", params);
};
