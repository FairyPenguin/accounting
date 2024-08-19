import { ISpecialization } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllSpecializationsResponseData = {
    data: ISpecialization[];
    totalCount: number;
    totalPage: number;
};

export type GetAllSpecializationsResponse = ApiResponse<GetAllSpecializationsResponseData>;
