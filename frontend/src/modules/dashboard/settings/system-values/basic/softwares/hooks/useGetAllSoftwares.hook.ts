import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { GetAllSoftwaresResponse, GetAllSoftwaresResponseData } from "../types/getAllSoftwares.type";
import { getAllSoftwaresService } from "../services/GetAllSoftwaresService.service";

export const useGetAllSoftwares = (params?: QueryParams): UseQueryResult<GetAllSoftwaresResponseData, AxiosError> => {
    return useQuery<GetAllSoftwaresResponseData, AxiosError>({
        queryKey: ["getAllSoftwares", params],
        queryFn: async (): Promise<GetAllSoftwaresResponseData> => {
            const response: GetAllSoftwaresResponse = await getAllSoftwaresService(params);

            const rolesData: GetAllSoftwaresResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
