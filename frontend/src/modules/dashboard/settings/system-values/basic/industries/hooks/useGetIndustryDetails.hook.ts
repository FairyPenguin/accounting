import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetIndustryDetailsResponse } from "../types/getIndustryDetails.type";
import { getIndustryDetailsService } from "../services/getIndustryDetailsService.service";

export function useGetIndustryDetails(industryId: string): UseQueryResult<GetIndustryDetailsResponse, AxiosError> {
    return useQuery<GetIndustryDetailsResponse, AxiosError>({
        queryKey: ["getIndustryDetails"],
        queryFn: () => getIndustryDetailsService(industryId),
    });
}
