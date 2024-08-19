import { ICatTool } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllCATToolResponseData = {
    data: ICatTool[];
    totalCount: number;
    totalPage: number;
};

export type GetAllCATToolResponse = ApiResponse<GetAllCATToolResponseData>;
