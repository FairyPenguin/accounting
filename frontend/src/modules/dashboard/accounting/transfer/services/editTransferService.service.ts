import { APIUtility } from "@/shared/utils/api.util";
import { EditTransferResponse } from "../types/editTransfer.type";
import { TransferFormPayload } from "../hooks/useTransferForm.hook";

export const editTransferService = async ({
    transferId,
    payload,
}: {
    transferId: string;
    payload: TransferFormPayload;
}): Promise<EditTransferResponse> => {
    return await APIUtility.put<EditTransferResponse>(`transfers/${transferId}`, payload);
};
