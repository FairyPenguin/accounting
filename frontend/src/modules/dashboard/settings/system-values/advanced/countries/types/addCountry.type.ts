import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ICountry } from ".";

export interface CountryPayload {
    name: string;
    symbol: string;
}

export type AddCountryResponse = ApiResponse<ICountry>;
