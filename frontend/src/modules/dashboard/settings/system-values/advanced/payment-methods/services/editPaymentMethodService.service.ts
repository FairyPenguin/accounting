import { APIUtility } from "@/shared/utils/api.util";
import { PaymentMethodPayload } from "../types/addPaymentMethod.type";
import { EditPaymentMethodResponse } from "../types/editPaymentMethod.type";

export const editPaymentMethodService = async ({
    languageId,
    payload,
}: {
    languageId: string;
    payload: PaymentMethodPayload;
}): Promise<EditPaymentMethodResponse> => {
    return await APIUtility.put<EditPaymentMethodResponse>(`languages/${languageId}`, payload);
};
