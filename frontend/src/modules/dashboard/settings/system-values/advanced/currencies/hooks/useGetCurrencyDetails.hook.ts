import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetCurrencyDetailsResponse } from "../types/getCurrencyDetails.type";
import { getCurrencyDetailsService } from "../services/getCurrencyDetailsService.service";

export function useGetCurrencyDetails(countryId: string): UseQueryResult<GetCurrencyDetailsResponse, AxiosError> {
    return useQuery<GetCurrencyDetailsResponse, AxiosError>({
        queryKey: ["getCurrencyDetails"],
        queryFn: () => getCurrencyDetailsService(countryId),
    });
}
