import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetFieldOfStudyDetailsResponse } from "../types/getFieldOfStudyDetails.type";
import { getFieldOfStudyDetailsService } from "../services/getFieldOfStudyDetailsService.service";

export function useGetFieldOfStudyDetails(
    fieldOfStudyId: string,
): UseQueryResult<GetFieldOfStudyDetailsResponse, AxiosError> {
    return useQuery<GetFieldOfStudyDetailsResponse, AxiosError>({
        queryKey: ["getFieldOfStudyDetails"],
        queryFn: () => getFieldOfStudyDetailsService(fieldOfStudyId),
    });
}
