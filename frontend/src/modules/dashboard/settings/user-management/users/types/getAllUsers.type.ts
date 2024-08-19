import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IUser } from ".";

export type GetAllUsersResponseData = {
    data: IUser[];
    totalCount: number;
    totalPage: number;
};

export type GetAllUsersResponse = ApiResponse<GetAllUsersResponseData>;
