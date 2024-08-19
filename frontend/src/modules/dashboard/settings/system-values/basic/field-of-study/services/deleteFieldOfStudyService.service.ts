import { APIUtility } from "@/shared/utils/api.util";
import { DeleteFieldOfStudyResponse } from "../types/deleteFieldOfStudy.type";

export const deleteFieldOfStudyService = async (fieldOfStudyId: string): Promise<DeleteFieldOfStudyResponse> => {
    return APIUtility.delete<DeleteFieldOfStudyResponse>(`fields-study/${fieldOfStudyId}`);
};
