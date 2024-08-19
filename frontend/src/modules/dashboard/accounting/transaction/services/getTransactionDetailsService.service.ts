import { APIUtility } from "@/shared/utils/api.util";
import { GetTranITransactionDetailsResponse } from "../types/getTransactionDetails.type";

export const getTransactionDetailsService = async (
    transactionId: string,
): Promise<GetTranITransactionDetailsResponse> => {
    return await APIUtility.get<GetTranITransactionDetailsResponse>(`transactions/${transactionId}`);
};
