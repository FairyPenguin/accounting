import { APIUtility } from "@/shared/utils/api.util";
import { FieldOfStudyPayload } from "../types/addFieldOfStudy.type";
import { EditFieldOfStudyResponse } from "../types/editFieldOfStudy.type";

export const editFieldOfStudyService = async ({
    fieldOfStudyId,
    payload,
}: {
    fieldOfStudyId: string;
    payload: FieldOfStudyPayload;
}): Promise<EditFieldOfStudyResponse> => {
    return await APIUtility.put<EditFieldOfStudyResponse>(`lookups/${fieldOfStudyId}`, payload);
};
