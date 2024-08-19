import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetCountryDetailsResponse } from "../types/getCountryDetails.type";
import { getCountryDetailsService } from "../services/getCountryDetailsService.service";

export function useGetCountryDetails(countryId: string): UseQueryResult<GetCountryDetailsResponse, AxiosError> {
    return useQuery<GetCountryDetailsResponse, AxiosError>({
        queryKey: ["getCountryDetails"],
        queryFn: () => getCountryDetailsService(countryId),
    });
}
