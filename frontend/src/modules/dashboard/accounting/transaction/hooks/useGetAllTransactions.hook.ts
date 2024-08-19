import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllTransactionsService } from "../services/getAllTransactionsService.service";
import { GetAllTransactionsResponse, GetAllTransactionsResponseData } from "../types/geTransactionsList.type";

export const useGetAllTransactions = (
    params?: QueryParams,
): UseQueryResult<GetAllTransactionsResponseData, AxiosError> => {
    return useQuery<GetAllTransactionsResponseData, AxiosError>({
        queryKey: ["getAllTransactions", params],
        queryFn: async (): Promise<GetAllTransactionsResponseData> => {
            const response: GetAllTransactionsResponse = await getAllTransactionsService(params);

            const accountsData: GetAllTransactionsResponseData = response.data;

            return { data: accountsData.data, totalCount: accountsData.totalCount, totalPage: accountsData.totalPage };
        },
    });
};
