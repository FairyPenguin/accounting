import { APIUtility } from "@/shared/utils/api.util";
import { AddTransferResponse } from "../types/addTransfer.type";
import { TransferFormPayload } from "../hooks/useTransferForm.hook";

export const addTransferService = async (payload: TransferFormPayload): Promise<AddTransferResponse> => {
    return await APIUtility.post<AddTransferResponse>("transfers", payload);
};
