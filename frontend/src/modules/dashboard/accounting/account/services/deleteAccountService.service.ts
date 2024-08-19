import { APIUtility } from "@/shared/utils/api.util";
import { DeleteAccountResponse } from "../types/deleteAccount.type";

export const deleteAccountService = async (accountId: string): Promise<DeleteAccountResponse> => {
    return APIUtility.delete<DeleteAccountResponse>(`accounts/${accountId}`);
};
