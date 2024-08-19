import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllSpecializationsService } from "../services/getAllSpecializationsService.service";
import { GetAllSpecializationsResponse, GetAllSpecializationsResponseData } from "../types/getAllSpecializations.type";

export const useGetAllSpecializations = (
    params?: QueryParams,
): UseQueryResult<GetAllSpecializationsResponseData, AxiosError> => {
    return useQuery<GetAllSpecializationsResponseData, AxiosError>({
        queryKey: ["getAllSpecializations", params],
        queryFn: async (): Promise<GetAllSpecializationsResponseData> => {
            const response: GetAllSpecializationsResponse = await getAllSpecializationsService(params);

            const rolesData: GetAllSpecializationsResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
