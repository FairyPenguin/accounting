import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IPermission } from ".";

export type GetAllPermissionsResponseData = {
    data: IPermission[];
};

export type GetAllPermissionsResponse = ApiResponse<GetAllPermissionsResponseData>;
