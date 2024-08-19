import { APIUtility } from "@/shared/utils/api.util";
import { GetFieldOfStudyDetailsResponse } from "../types/getFieldOfStudyDetails.type";

export const getFieldOfStudyDetailsService = async (
    fieldOfStudyId: string,
): Promise<GetFieldOfStudyDetailsResponse> => {
    return await APIUtility.get<GetFieldOfStudyDetailsResponse>(`lookups/${fieldOfStudyId}`);
};
