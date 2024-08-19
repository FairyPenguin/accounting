import { APIUtility } from "@/shared/utils/api.util";
import { AddFieldOfStudyResponse, FieldOfStudyPayload } from "../types/addFieldOfStudy.type";

export const addFieldOfStudyService = async (payload: FieldOfStudyPayload): Promise<AddFieldOfStudyResponse> => {

    const updatedPayload = {
        ...payload,
        lookupType: 'fields_study',
    }
    return await APIUtility.post<AddFieldOfStudyResponse>("lookups", updatedPayload);
};
