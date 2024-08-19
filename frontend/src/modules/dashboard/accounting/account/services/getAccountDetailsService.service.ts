import { APIUtility } from "@/shared/utils/api.util";
import { GetAccountDetailsResponse } from "../types/getAccountDetails.type";

export const getAccountDetailsService = async (accountId: string): Promise<GetAccountDetailsResponse> => {
    return await APIUtility.get<GetAccountDetailsResponse>(`accounts/${accountId}`);
};
