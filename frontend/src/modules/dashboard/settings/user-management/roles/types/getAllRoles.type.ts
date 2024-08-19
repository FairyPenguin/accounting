import { IRole } from "./index";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type GetAllRolesResponseData = {
    data: IRole[];
    totalCount: number;
    totalPage: number;
};

export type GetAllRolesResponse = ApiResponse<GetAllRolesResponseData>;
