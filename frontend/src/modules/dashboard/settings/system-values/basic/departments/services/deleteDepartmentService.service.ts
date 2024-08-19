import { APIUtility } from "@/shared/utils/api.util";
import { DeleteDepartmentResponse } from "../types/deleteDepartment.type";

export const deleteDepartmentService = async (departmentId: string): Promise<DeleteDepartmentResponse> => {
    return APIUtility.delete<DeleteDepartmentResponse>(`departments/${departmentId}`);
};
