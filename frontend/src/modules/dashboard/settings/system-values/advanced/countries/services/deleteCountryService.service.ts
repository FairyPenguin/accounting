import { APIUtility } from "@/shared/utils/api.util";
import { DeleteCountryResponse } from "../types/deleteCountry.type";

export const deleteCountryService = async (countryId: string): Promise<DeleteCountryResponse> => {
    return APIUtility.delete<DeleteCountryResponse>(`countries/${countryId}`);
};
