import { APIUtility } from "@/shared/utils/api.util";
import { CountryPayload } from "../types/addCountry.type";
import { EditCountryResponse } from "../types/editCountry.type";

export const editCountryService = async ({
    countryId,
    payload,
}: {
    countryId: string;
    payload: CountryPayload;
}): Promise<EditCountryResponse> => {
    // const updatedPayload = { ...payload, lookupType: 'country' };
    return await APIUtility.put<EditCountryResponse>(`lookups/${countryId}`, payload);
};
