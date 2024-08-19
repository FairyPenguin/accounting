import { ICurrency } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllCurrenciesResponseData = {
    data: ICurrency[];
    totalCount: number;
    totalPage: number;
};

export type GetAllCurrenciesResponse = ApiResponse<GetAllCurrenciesResponseData>;
