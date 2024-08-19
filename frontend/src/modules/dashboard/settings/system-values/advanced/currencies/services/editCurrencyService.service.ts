import { APIUtility } from "@/shared/utils/api.util";
import { CurrencyPayload } from "../types/addCurrency.type";
import { EditCurrencyResponse } from "../types/editCurrency.type";

export const editCurrencyService = async ({
    currencyId,
    payload,
}: {
    currencyId: string;
    payload: CurrencyPayload;
}): Promise<EditCurrencyResponse> => {
    return await APIUtility.put<EditCurrencyResponse>(`currencies/${currencyId}`, payload);
};
