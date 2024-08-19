import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetServiceDetailsResponse } from "../types/getServiceDetails.type";
import { getServiceDetailsService } from "../services/GetServiceDetailsService.service";

export function useGetServiceDetails(serviceId: string): UseQueryResult<GetServiceDetailsResponse, AxiosError> {
    return useQuery<GetServiceDetailsResponse, AxiosError>({
        queryKey: ["getServiceDetails"],
        queryFn: () => getServiceDetailsService(serviceId),
    });
}
