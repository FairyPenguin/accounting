import { APIUtility } from "@/shared/utils/api.util";
import { GetPaymentMethodDetailsResponse } from "../types/getPaymentMethodDetails.type";

export const getPaymentMethodDetailsService = async (languageId: string): Promise<GetPaymentMethodDetailsResponse> => {
    return await APIUtility.get<GetPaymentMethodDetailsResponse>(`languages/${languageId}`);
};
