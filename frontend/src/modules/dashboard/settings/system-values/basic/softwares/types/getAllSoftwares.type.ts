import { ISoftware } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllSoftwaresResponseData = {
    data: ISoftware[];
    totalCount: number;
    totalPage: number;
};

export type GetAllSoftwaresResponse = ApiResponse<GetAllSoftwaresResponseData>;
