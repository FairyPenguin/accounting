import { APIUtility } from "@/shared/utils/api.util";
import { AddCountryResponse, CountryPayload } from "../types/addCountry.type";

export const addCountryService = async (payload: CountryPayload): Promise<AddCountryResponse> => {
    
    const updatedPayload = {
        ...payload,
        lookupType: 'country'
    }
    
    return await APIUtility.post<AddCountryResponse>("lookups", updatedPayload);
};
