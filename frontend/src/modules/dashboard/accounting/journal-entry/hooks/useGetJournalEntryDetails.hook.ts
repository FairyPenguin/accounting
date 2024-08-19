import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetJouIJournalEntryDetailsResponse } from "../types/getJournalEntryDetails.type";
import { getJournalEntryDetailsService } from "../services/getAccountJournalEntryService.service";

export function useGetJournalEntryDetails(
    journalEntryId: string,
): UseQueryResult<GetJouIJournalEntryDetailsResponse, AxiosError> {
    return useQuery<GetJouIJournalEntryDetailsResponse, AxiosError>({
        queryKey: ["getJournalEntryDetails"],
        queryFn: () => getJournalEntryDetailsService(journalEntryId),
    });
}
