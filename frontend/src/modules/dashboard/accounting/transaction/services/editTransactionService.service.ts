import { APIUtility } from "@/shared/utils/api.util";
import { EditTransactionResponse } from "../types/editTransaction.type";
import { TransferFormPayload } from "../../transfer/hooks/useTransferForm.hook";

export const editTransactionService = async ({
    transactionId,
    payload,
}: {
    transactionId: string;
    payload: TransferFormPayload;
}): Promise<EditTransactionResponse> => {
    return await APIUtility.put<EditTransactionResponse>(`transactions/${transactionId}`, payload);
};
