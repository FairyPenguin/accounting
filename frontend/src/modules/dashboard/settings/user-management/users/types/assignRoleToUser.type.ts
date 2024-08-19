import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IUser } from ".";

export type AssignRoleToUserPayload = {
    role: string;
};

export type AssignRoleToUserResponse = ApiResponse<IUser>;
