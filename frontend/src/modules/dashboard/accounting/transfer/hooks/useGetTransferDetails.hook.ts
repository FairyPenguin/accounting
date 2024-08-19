import { AxiosError } from "axios";
import { GetTransferDetailsResponse } from "../types/getTransferDetails.type";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTransferDetailsService } from "../services";

export function useGetTransferDetails(transferId: string): UseQueryResult<GetTransferDetailsResponse, AxiosError> {
    return useQuery<GetTransferDetailsResponse, AxiosError>({
        queryKey: ["getTransferDetails", transferId],
        queryFn: () => getTransferDetailsService(transferId),
    });
}
