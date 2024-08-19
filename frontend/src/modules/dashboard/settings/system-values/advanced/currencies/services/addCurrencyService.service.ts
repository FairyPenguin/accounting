import { APIUtility } from "@/shared/utils/api.util";
import { AddCurrencyResponse, CurrencyPayload } from "../types/addCurrency.type";

export const addCurrencyService = async (payload: CurrencyPayload): Promise<AddCurrencyResponse> => {
    return await APIUtility.post<AddCurrencyResponse>("currencies", payload);
};
