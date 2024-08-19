import { APIUtility } from "@/shared/utils/api.util";
import { DeleteCurrencyResponse } from "../types/deleteCurrency.type";

export const deleteCurrencyService = async (currencyId: string): Promise<DeleteCurrencyResponse> => {
    return APIUtility.delete<DeleteCurrencyResponse>(`currencies/${currencyId}`);
};
