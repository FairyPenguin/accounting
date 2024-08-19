import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetCATToolDetailsResponse } from "../types/getCatToolDetails.type";
import { GetCatToolDetailsService } from "../services/GetCatToolDetailsService.service";

export function useGetCatToolDetails(toolId: string): UseQueryResult<GetCATToolDetailsResponse, AxiosError> {
    return useQuery<GetCATToolDetailsResponse, AxiosError>({
        queryKey: ["getCatToolDetails"],
        queryFn: () => GetCatToolDetailsService(toolId),
    });
}
