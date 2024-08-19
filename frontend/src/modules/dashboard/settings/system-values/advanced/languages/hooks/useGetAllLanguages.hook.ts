import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllLanguagesService } from "../services/getAllLanguagesService.service";
import { GetAllLanguagesResponse, GetAllLanguagesResponseData } from "../types/getAllLanguages.type";

export const useGetAllLanguages = (params?: QueryParams): UseQueryResult<GetAllLanguagesResponseData, AxiosError> => {
    return useQuery<GetAllLanguagesResponseData, AxiosError>({
        queryKey: ["getAllLanguages", params],
        queryFn: async (): Promise<GetAllLanguagesResponseData> => {
            const response: GetAllLanguagesResponse = await getAllLanguagesService(params);

            const rolesData: GetAllLanguagesResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
