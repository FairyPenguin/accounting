import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ITransaction } from ".";

export type GetAllTransactionsResponseData = {
    data: ITransaction[];
    totalCount: number;
    totalPage: number;
};

export type GetAllTransactionsResponse = ApiResponse<GetAllTransactionsResponseData>;
