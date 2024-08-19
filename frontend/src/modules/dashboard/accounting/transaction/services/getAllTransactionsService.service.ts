import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllTransactionsResponse } from "../types/geTransactionsList.type";

export const getAllTransactionsService = async (params?: QueryParams): Promise<GetAllTransactionsResponse> => {
    return await APIUtility.get<GetAllTransactionsResponse>("transactions", params);
};
