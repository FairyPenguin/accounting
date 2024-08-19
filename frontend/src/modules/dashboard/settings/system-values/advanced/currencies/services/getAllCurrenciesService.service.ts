import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllCurrenciesResponse } from "../types/getAllCurrencies.type";

export const getAllCurrenciesService = async (params?: QueryParams): Promise<GetAllCurrenciesResponse> => {
    return await APIUtility.get<GetAllCurrenciesResponse>("currencies", params);
};
