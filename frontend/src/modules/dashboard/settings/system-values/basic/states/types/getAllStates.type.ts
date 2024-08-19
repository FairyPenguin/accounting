import { IState } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllStatesResponseData = {
    data: IState[];
    totalCount: number;
    totalPage: number;
};

export type GetAllStatesResponse = ApiResponse<GetAllStatesResponseData>;
