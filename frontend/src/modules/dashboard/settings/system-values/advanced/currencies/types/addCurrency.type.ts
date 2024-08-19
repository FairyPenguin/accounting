import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ICurrency } from ".";

export interface CurrencyPayload {
    name: string;
    symbol: string;
    ISOCode: string;
    default?: boolean;
}

export type AddCurrencyResponse = ApiResponse<ICurrency>;
