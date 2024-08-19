import { IHardware } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllHardwaresResponseData = {
    data: IHardware[];
    totalCount: number;
    totalPage: number;
};

export type GetAllHardwaresResponse = ApiResponse<GetAllHardwaresResponseData>;
