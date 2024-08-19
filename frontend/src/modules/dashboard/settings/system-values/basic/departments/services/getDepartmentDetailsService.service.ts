import { APIUtility } from "@/shared/utils/api.util";
import { GetDepartmentDetailsResponse } from "../types/getDepartmentDetails.type";

export const getDepartmentDetailsService = async (departmentId: string): Promise<GetDepartmentDetailsResponse> => {
    return await APIUtility.get<GetDepartmentDetailsResponse>(`lookups/${departmentId}`);
};
