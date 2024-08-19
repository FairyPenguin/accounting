import { IRole } from ".";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export interface AddRolePayload {
    name: string;
    permissions: string[];
}

export type AddRoleResponse = ApiResponse<IRole>;
