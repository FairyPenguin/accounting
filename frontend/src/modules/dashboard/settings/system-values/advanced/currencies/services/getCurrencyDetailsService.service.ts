import { APIUtility } from "@/shared/utils/api.util";
import { GetCurrencyDetailsResponse } from "../types/getCurrencyDetails.type";

export const getCurrencyDetailsService = async (currencyId: string): Promise<GetCurrencyDetailsResponse> => {
    return await APIUtility.get<GetCurrencyDetailsResponse>(`currencies/${currencyId}`);
};
