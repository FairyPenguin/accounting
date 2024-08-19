import { IRole } from ".";
import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

export interface EditRolePayload {
    name: string;
    permissions: string[];
}

export type EditRoleResponse = ApiResponse<IRole>;

export interface EditRolePageProps {
    params: {
        roleId?: string;
    };
}
