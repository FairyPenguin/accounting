import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllDepartmentsResponse } from "../types/getAllDepartments.type";

export const getAllDepartmentsService = async (params?: QueryParams): Promise<GetAllDepartmentsResponse> => {
    return await APIUtility.get<GetAllDepartmentsResponse>("departments", params);
};