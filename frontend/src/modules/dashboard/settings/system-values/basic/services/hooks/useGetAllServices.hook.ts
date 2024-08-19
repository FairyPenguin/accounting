import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllServicesService } from "../services/GetAllServicesService.service";
import { GetAllServicesResponse, GetAllServicesResponseData } from "../types/getAllServices.type";

export const useGetAllServices = (params?: QueryParams): UseQueryResult<GetAllServicesResponseData, AxiosError> => {
    return useQuery<GetAllServicesResponseData, AxiosError>({
        queryKey: ["getAllServices", params],
        queryFn: async (): Promise<GetAllServicesResponseData> => {
            const response: GetAllServicesResponse = await getAllServicesService(params);

            const rolesData: GetAllServicesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
