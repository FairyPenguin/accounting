import { APIUtility } from "@/shared/utils/api.util";
import { AddAccountResponse } from "../types/addAccount.type";
import { AccountFormPayload } from "../hooks/useAccountForm.hook";

export const addAccountService = async (payload: AccountFormPayload): Promise<AddAccountResponse> => {
    return await APIUtility.post<AddAccountResponse>("accounts", payload);
};
