import { IDepartment } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllDepartmentsResponseData = {
    data: IDepartment[];
    totalCount: number;
    totalPage: number;
};

export type GetAllDepartmentsResponse = ApiResponse<GetAllDepartmentsResponseData>;
