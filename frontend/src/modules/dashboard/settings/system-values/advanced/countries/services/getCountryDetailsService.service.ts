import { APIUtility } from "@/shared/utils/api.util";
import { GetCountryDetailsResponse } from "../types/getCountryDetails.type";

export const getCountryDetailsService = async (countryId: string): Promise<GetCountryDetailsResponse> => {
    return await APIUtility.get<GetCountryDetailsResponse>(`lookups/${countryId}`);
};
