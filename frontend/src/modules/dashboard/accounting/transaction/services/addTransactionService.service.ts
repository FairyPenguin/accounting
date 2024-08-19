import { APIUtility } from "@/shared/utils/api.util";
import { AddTransactionResponse } from "../types/addTransaction.type";
import { TransactionFormPayload } from "../hooks/useTransactionForm.hook";

export const addTransactionService = async (payload: TransactionFormPayload): Promise<AddTransactionResponse> => {
    return await APIUtility.post<AddTransactionResponse>("transactions", payload);
};
