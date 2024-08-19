import { APIUtility } from "@/shared/utils/api.util";
import { AddDepartmentResponse, DepartmentPayload } from "../types/addDepartment.type";

export const addDepartmentService = async (payload: DepartmentPayload): Promise<AddDepartmentResponse> => {
    const updatedPayload = {
        ...payload,
        lookupType: 'department',
    };

    return await APIUtility.post<AddDepartmentResponse>("lookups", updatedPayload);
};