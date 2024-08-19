import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllAccountsService } from "../services/getAllAccountsService.service";
import { GetAllAccountsResponse, GetAllAccountsResponseData } from "../types/getAccountsList.type";

export const useGetAllAccounts = (params?: QueryParams): UseQueryResult<GetAllAccountsResponseData, AxiosError> => {
    return useQuery<GetAllAccountsResponseData, AxiosError>({
        queryKey: ["getAllAccounts", params],
        queryFn: async (): Promise<GetAllAccountsResponseData> => {
            const response: GetAllAccountsResponse = await getAllAccountsService(params);

            const accountsData: GetAllAccountsResponseData = response.data;

            return { data: accountsData.data, totalCount: accountsData.totalCount, totalPage: accountsData.totalPage };
        },
    });
};
