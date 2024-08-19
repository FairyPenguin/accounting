import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { GetAllCatToolsService } from "../services/GetAllCatToolsService.service";
import { GetAllCATToolResponse, GetAllCATToolResponseData } from "../types/getAllCatTools.type";

export const useGetAllCatTools = (params?: QueryParams): UseQueryResult<GetAllCATToolResponseData, AxiosError> => {
    return useQuery<GetAllCATToolResponseData, AxiosError>({
        queryKey: ["getAllCatTools", params],
        queryFn: async (): Promise<GetAllCATToolResponseData> => {
            const response: GetAllCATToolResponse = await GetAllCatToolsService(params);

            const rolesData: GetAllCATToolResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
