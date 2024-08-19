import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllRolesService } from "../services/getAllRolesService.service";
import { GetAllRolesResponse, GetAllRolesResponseData } from "../types/getAllRoles.type";

export const useGetAllRoles = (params?: QueryParams): UseQueryResult<GetAllRolesResponseData, AxiosError> => {
    return useQuery<GetAllRolesResponseData, AxiosError>({
        queryKey: ["getAllRoles", params],
        queryFn: async (): Promise<GetAllRolesResponseData> => {
            const response: GetAllRolesResponse = await getAllRolesService(params);

            const rolesData: GetAllRolesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
