import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllPaymentMethodsService } from "../services/getAllPaymentMethodsService.service";
import { GetAllPaymentMethodsResponse, GetAllPaymentMethodsResponseData } from "../types/getAllPaymentMethods.type";

export const useGetAllPaymentMethods = (
    params?: QueryParams,
): UseQueryResult<GetAllPaymentMethodsResponseData, AxiosError> => {
    return useQuery<GetAllPaymentMethodsResponseData, AxiosError>({
        queryKey: ["getAllPaymentMethods", params],
        queryFn: async (): Promise<GetAllPaymentMethodsResponseData> => {
            const response: GetAllPaymentMethodsResponse = await getAllPaymentMethodsService(params);

            const rolesData: GetAllPaymentMethodsResponseData = response.data;

            return { data: rolesData.data, totalCount: rolesData.totalCount, totalPage: rolesData.totalPage };
        },
    });
};
