import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IAccount } from ".";

export type GetAllAccountsResponseData = {
    data: IAccount[];
    totalCount: number;
    totalPage: number;
};

export type GetAllAccountsResponse = ApiResponse<GetAllAccountsResponseData>;
