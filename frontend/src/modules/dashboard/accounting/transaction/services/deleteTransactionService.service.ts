import { APIUtility } from "@/shared/utils/api.util";
import { DeleteTransactionResponse } from "../types/deleteTransaction.type";

export const deleteTransactionService = async (transactionId: string): Promise<DeleteTransactionResponse> => {
    return APIUtility.delete<DeleteTransactionResponse>(`transactions/${transactionId}`);
};
