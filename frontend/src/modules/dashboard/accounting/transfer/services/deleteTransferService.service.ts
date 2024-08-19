import { APIUtility } from "@/shared/utils/api.util";
import { DeleteTransferResponse } from "../types/deleteTransfer.type";

export const deleteTransferService = async (transferId: string): Promise<DeleteTransferResponse> => {
    return APIUtility.delete<DeleteTransferResponse>(`transfers/${transferId}`);
};
