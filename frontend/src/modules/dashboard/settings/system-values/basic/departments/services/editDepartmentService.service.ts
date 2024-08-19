import { APIUtility } from "@/shared/utils/api.util";
import { DepartmentPayload } from "../types/addDepartment.type";
import { EditDepartmentResponse } from "../types/editDepartment.type";

export const editDepartmentService = async ({
    departmentId,
    payload,
}: {
    departmentId: string;
    payload: DepartmentPayload;
}): Promise<EditDepartmentResponse> => {
    return await APIUtility.put<EditDepartmentResponse>(`lookups/${departmentId}`, payload);
};
