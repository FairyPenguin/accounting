import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetStateDetailsResponse } from "../types/getStateDetails.type";
import { getStateDetailsService } from "../services/getStateDetailsService.service";

export function useGetStateDetails(stateId: string): UseQueryResult<GetStateDetailsResponse, AxiosError> {
    return useQuery<GetStateDetailsResponse, AxiosError>({
        queryKey: ["getStateDetails"],
        queryFn: () => getStateDetailsService(stateId),
    });
}
