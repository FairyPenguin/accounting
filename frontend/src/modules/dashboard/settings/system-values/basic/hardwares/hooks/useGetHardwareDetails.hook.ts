import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetHardwareDetailsResponse } from "../types/getHardwareDetails.type";
import { getHardwareDetailsService } from "../services/getHardwareDetailsService.service";

export function useGetHardwareDetails(hardwareId: string): UseQueryResult<GetHardwareDetailsResponse, AxiosError> {
    return useQuery<GetHardwareDetailsResponse, AxiosError>({
        queryKey: ["getHardwareDetails"],
        queryFn: () => getHardwareDetailsService(hardwareId),
    });
}
