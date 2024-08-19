import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllSoftwaresResponse } from "../types/getAllSoftwares.type";

export const getAllSoftwaresService = async (params?: QueryParams): Promise<GetAllSoftwaresResponse> => {
    return await APIUtility.get<GetAllSoftwaresResponse>("it-tools?type=software", params);
};
