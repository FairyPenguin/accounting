import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllHardwaresService } from "../services/getAllHardwaresService.service";
import { GetAllHardwaresResponse, GetAllHardwaresResponseData } from "../types/getAllHardwares.type";

export const useGetAllHardwares = (params?: QueryParams): UseQueryResult<GetAllHardwaresResponseData, AxiosError> => {
    return useQuery<GetAllHardwaresResponseData, AxiosError>({
        queryKey: ["getAllHardwares", params],
        queryFn: async (): Promise<GetAllHardwaresResponseData> => {
            const response: GetAllHardwaresResponse = await getAllHardwaresService(params);

            const rolesData: GetAllHardwaresResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
