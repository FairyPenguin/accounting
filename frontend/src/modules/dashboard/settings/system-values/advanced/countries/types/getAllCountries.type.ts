import { ICountry } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllCountriesResponseData = {
    data: ICountry[];
    totalCount: number;
    totalPage: number;
};

export type GetAllCountriesResponse = ApiResponse<GetAllCountriesResponseData>;
