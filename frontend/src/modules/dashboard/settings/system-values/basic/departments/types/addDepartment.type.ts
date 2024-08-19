import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IDepartment } from ".";

export interface DepartmentPayload {
    name: string;
}

export type AddDepartmentResponse = ApiResponse<IDepartment>;
