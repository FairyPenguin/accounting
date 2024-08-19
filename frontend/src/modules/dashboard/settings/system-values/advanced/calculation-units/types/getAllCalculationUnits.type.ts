import { ICalculationUnits } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllCalculationUnitsResponseData = {
    data: ICalculationUnits[];
    totalCount: number;
    totalPage: number;
};

export type GetAllCalculationUnitsResponse = ApiResponse<GetAllCalculationUnitsResponseData>;
