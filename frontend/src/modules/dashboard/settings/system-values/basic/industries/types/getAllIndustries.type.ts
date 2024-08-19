import { IIndustry } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllIndustriesResponseData = {
    data: IIndustry[];
    totalCount: number;
    totalPage: number;
};

export type GetAllIndustriesResponse = ApiResponse<GetAllIndustriesResponseData>;
