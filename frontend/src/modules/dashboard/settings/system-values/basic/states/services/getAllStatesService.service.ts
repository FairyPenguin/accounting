import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllStatesResponse } from "../types/getAllStates.type";

export const getAllStatesService = async (params?: QueryParams): Promise<GetAllStatesResponse> => {
    return await APIUtility.get<GetAllStatesResponse>("lookups", params);
};
