import { APIUtility } from "@/shared/utils/api.util";
import { EditAccountResponse } from "../types/editAccount.type";
import { AccountFormPayload } from "../hooks/useAccountForm.hook";

export const editAccountService = async ({
    accountId,
    payload,
}: {
    accountId: string;
    payload: AccountFormPayload;
}): Promise<EditAccountResponse> => {
    return await APIUtility.patch<EditAccountResponse>(`accounts/${accountId}`, payload);
};
