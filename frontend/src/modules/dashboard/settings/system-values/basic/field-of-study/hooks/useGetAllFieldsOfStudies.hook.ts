import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllFieldsOfStudyService } from "../services/getAllFieldOfStudiesService.service";
import { GetAllFieldsOfStudyResponse, GetAllFieldsOfStudyResponseData } from "../types/getAllFieldsOfStudy.type";

export const useGetAllFieldsOfStudy = (
    params?: QueryParams,
): UseQueryResult<GetAllFieldsOfStudyResponseData, AxiosError> => {
    return useQuery<GetAllFieldsOfStudyResponseData, AxiosError>({
        queryKey: ["getAllFieldsOfStudy", params],
        queryFn: async (): Promise<GetAllFieldsOfStudyResponseData> => {
            const response: GetAllFieldsOfStudyResponse = await getAllFieldsOfStudyService(params);

            const rolesData: GetAllFieldsOfStudyResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
