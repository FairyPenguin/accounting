import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetTranITransactionDetailsResponse } from "../types/getTransactionDetails.type";
import { getTransactionDetailsService } from "../services/getTransactionDetailsService.service";

export function useGetTransactionDetails(
    accountId: string,
): UseQueryResult<GetTranITransactionDetailsResponse, AxiosError> {
    return useQuery<GetTranITransactionDetailsResponse, AxiosError>({
        queryKey: ["getTransactionDetails"],
        queryFn: () => getTransactionDetailsService(accountId),
    });
}
