import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllDepartmentsService } from "../services/getAllDepartmentsService.service";
import { GetAllDepartmentsResponse, GetAllDepartmentsResponseData } from "../types/getAllDepartments.type";

export const useGetAllDepartments = (
    params?: QueryParams,
): UseQueryResult<GetAllDepartmentsResponseData, AxiosError> => {
    return useQuery<GetAllDepartmentsResponseData, AxiosError>({
        queryKey: ["getAllDepartments", params],
        queryFn: async (): Promise<GetAllDepartmentsResponseData> => {
            const response: GetAllDepartmentsResponse = await getAllDepartmentsService(params);

            const rolesData: GetAllDepartmentsResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
