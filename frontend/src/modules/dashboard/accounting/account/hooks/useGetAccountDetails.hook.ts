import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetAccountDetailsResponse } from "../types/getAccountDetails.type";
import { getAccountDetailsService } from "../services/getAccountDetailsService.service";

export function useGetAccountDetails(accountId: string): UseQueryResult<GetAccountDetailsResponse, AxiosError> {
    return useQuery<GetAccountDetailsResponse, AxiosError>({
        queryKey: ["getAccountDetails"],
        queryFn: () => getAccountDetailsService(accountId),
    });
}
