import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllCountriesService } from "../services/getAllCountriesService.service";
import { GetAllCountriesResponse, GetAllCountriesResponseData } from "../types/getAllCountries.type";

export const useGetAllCountries = (params?: QueryParams): UseQueryResult<GetAllCountriesResponseData, AxiosError> => {
    return useQuery<GetAllCountriesResponseData, AxiosError>({
        queryKey: ["getAllCountries", params],
        queryFn: async (): Promise<GetAllCountriesResponseData> => {
            const response: GetAllCountriesResponse = await getAllCountriesService(params);

            const rolesData: GetAllCountriesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
