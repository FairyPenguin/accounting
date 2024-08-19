import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllStatesService } from "../services/getAllStatesService.service";
import { GetAllStatesResponse, GetAllStatesResponseData } from "../types/getAllStates.type";

export const useGetAllStates = (params?: QueryParams): UseQueryResult<GetAllStatesResponseData, AxiosError> => {
    return useQuery<GetAllStatesResponseData, AxiosError>({
        queryKey: ["getAllStates", params],
        queryFn: async (): Promise<GetAllStatesResponseData> => {
            const response: GetAllStatesResponse = await getAllStatesService(params);

            const rolesData: GetAllStatesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
