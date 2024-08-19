import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllIndustriesService } from "../services/getAllIndustriesService.service";
import { GetAllIndustriesResponse, GetAllIndustriesResponseData } from "../types/getAllIndustries.type";

export const useGetAllIndustries = (params?: QueryParams): UseQueryResult<GetAllIndustriesResponseData, AxiosError> => {
    return useQuery<GetAllIndustriesResponseData, AxiosError>({
        queryKey: ["getAllIndustries", params],
        queryFn: async (): Promise<GetAllIndustriesResponseData> => {
            const response: GetAllIndustriesResponse = await getAllIndustriesService(params);

            const rolesData: GetAllIndustriesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
