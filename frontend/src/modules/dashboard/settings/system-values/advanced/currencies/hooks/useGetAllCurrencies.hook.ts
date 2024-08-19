import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllCurrenciesService } from "../services/getAllCurrenciesService.service";
import { GetAllCurrenciesResponse, GetAllCurrenciesResponseData } from "../types/getAllCurrencies.type";

export const useGetAllCurrencies = (params?: QueryParams): UseQueryResult<GetAllCurrenciesResponseData, AxiosError> => {
    return useQuery<GetAllCurrenciesResponseData, AxiosError>({
        queryKey: ["getAllCurrencies", params],
        queryFn: async (): Promise<GetAllCurrenciesResponseData> => {
            const response: GetAllCurrenciesResponse = await getAllCurrenciesService(params);

            const rolesData: GetAllCurrenciesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
