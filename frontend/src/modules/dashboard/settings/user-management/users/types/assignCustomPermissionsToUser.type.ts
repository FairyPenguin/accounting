import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export type AssignCustomPermissionsToUserResponseData = {
    role: string;
    permissions: string[];
};

export type AssignCustomPermissionsToUserResponse = ApiResponse<AssignCustomPermissionsToUserResponseData>;
