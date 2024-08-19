import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetUserDetailsResponse } from "../types/getUserDetails.type";
import { getUserDetailsService } from "../services/getUserDetailsService.service";

export function useGetUserDetails(userId: string): UseQueryResult<GetUserDetailsResponse, AxiosError> {
    return useQuery<GetUserDetailsResponse, AxiosError>({
        queryKey: ["getUserDetails"],
        queryFn: () => getUserDetailsService(userId),
    });
}
