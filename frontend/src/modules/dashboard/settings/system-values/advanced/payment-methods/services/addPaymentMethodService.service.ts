import { APIUtility } from "@/shared/utils/api.util";
import { AddPaymentMethodResponse, PaymentMethodPayload } from "../types/addPaymentMethod.type";

export const addPaymentMethodService = async (payload: PaymentMethodPayload): Promise<AddPaymentMethodResponse> => {
    return await APIUtility.post<AddPaymentMethodResponse>("languages", payload);
};
