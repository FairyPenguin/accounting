import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { ITransfer } from ".";

export type GetAllTransfersResponseData = {
    data: ITransfer[];
    totalCount: number;
    totalPage: number;
};

export type GetAllTransfersResponse = ApiResponse<GetAllTransfersResponseData>;
