import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllAccountsResponse } from "../types/getAccountsList.type";

export const getAllAccountsService = async (params?: QueryParams): Promise<GetAllAccountsResponse> => {
    return await APIUtility.get<GetAllAccountsResponse>("accounts", params);
};
