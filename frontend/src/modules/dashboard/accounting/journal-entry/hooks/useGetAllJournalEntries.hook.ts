import { AxiosError } from "axios";
import { QueryParams } from "@/shared/types/queryParams.type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAllJournalEntriesService } from "../services/getAllJournalEntriesService.service";
import { GetAllJournalEntriesResponse, GetAllJournalEntriesResponseData } from "../types/getJournalEntriesList.type";

export const useGetAllJournalEntries = (
    params?: QueryParams,
): UseQueryResult<GetAllJournalEntriesResponseData, AxiosError> => {
    return useQuery<GetAllJournalEntriesResponseData, AxiosError>({
        queryKey: ["getAllJournalEntries", params],
        queryFn: async (): Promise<GetAllJournalEntriesResponseData> => {
            const response: GetAllJournalEntriesResponse = await getAllJournalEntriesService(params);

            const accountsData: GetAllJournalEntriesResponseData = response.data;

            return { data: accountsData.data, totalCount: accountsData.totalCount, totalPage: accountsData.totalPage };
        },
    });
};
