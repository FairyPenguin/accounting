import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetSpecializationDetailsResponse } from "../types/getSpecializationDetails.type";
import { getSpecializationDetailsService } from "../services/getSpecializationDetailsService.service";

export function useGetSpecializationDetails(
    specializationId: string,
): UseQueryResult<GetSpecializationDetailsResponse, AxiosError> {
    return useQuery<GetSpecializationDetailsResponse, AxiosError>({
        queryKey: ["getSpecializationDetails"],
        queryFn: () => getSpecializationDetailsService(specializationId),
    });
}
