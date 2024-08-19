import { APIUtility } from "@/shared/utils/api.util";
import { DeletePaymentMethodResponse } from "../types/deletePaymentMethod.type";

export const deletePaymentMethodService = async (languageId: string): Promise<DeletePaymentMethodResponse> => {
    return APIUtility.delete<DeletePaymentMethodResponse>(`languages/${languageId}`);
};
