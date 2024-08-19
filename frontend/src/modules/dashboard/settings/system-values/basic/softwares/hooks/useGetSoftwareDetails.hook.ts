import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetSoftwareDetailsResponse } from "../types/getSoftwareDetails.type";
import { getSoftwareDetailsService } from "../services/getSoftwareDetailsService.service";

export function useGetSoftwareDetails(softwareId: string): UseQueryResult<GetSoftwareDetailsResponse, AxiosError> {
    return useQuery<GetSoftwareDetailsResponse, AxiosError>({
        queryKey: ["getSoftwareDetails"],
        queryFn: () => getSoftwareDetailsService(softwareId),
    });
}
