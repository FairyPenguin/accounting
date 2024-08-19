import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";

interface Permission {
    name: string;
}

interface Role {
    name: string;
    permissions: Permission[];
}

export interface GetUserRoleAndPermissionsResponseData {
    id: number;
    tenantId: number;
    role: Role;
    permissions: Permission[];
}

export type GetUserRoleAndPermissionsResponse = ApiResponse<GetUserRoleAndPermissionsResponseData>;
