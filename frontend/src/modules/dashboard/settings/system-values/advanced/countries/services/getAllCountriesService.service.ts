import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllCountriesResponse } from "../types/getAllCountries.type";

export const getAllCountriesService = async (params?: QueryParams): Promise<GetAllCountriesResponse> => {
    return await APIUtility.get<GetAllCountriesResponse>("countries", params);
};
