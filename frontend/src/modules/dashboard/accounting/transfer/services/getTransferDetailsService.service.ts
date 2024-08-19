import { APIUtility } from "@/shared/utils/api.util";
import { GetTransferDetailsResponse } from "../types/getTransferDetails.type";

export const getTransferDetailsService = async (transferId: string): Promise<GetTransferDetailsResponse> => {
    return await APIUtility.get<GetTransferDetailsResponse>(`transfers/${transferId}`);
};
