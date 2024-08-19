import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetLanguageDetailsResponse } from "../types/getLanguageDetails.type";
import { getLanguageDetailsService } from "../services/getLanguageDetailsService.service";

export function useGetLanguageDetails(languageId: string): UseQueryResult<GetLanguageDetailsResponse, AxiosError> {
    return useQuery<GetLanguageDetailsResponse, AxiosError>({
        queryKey: ["getLanguageDetails"],
        queryFn: () => getLanguageDetailsService(languageId),
    });
}
