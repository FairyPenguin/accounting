import { IService } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllServicesResponseData = {
    data: IService[];
    totalCount: number;
    totalPage: number;
};

export type GetAllServicesResponse = ApiResponse<GetAllServicesResponseData>;
