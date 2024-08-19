import { APIUtility } from "@/shared/utils/api.util";
import { SpecializationPayload } from "../types/addSpecialization.type";
import { EditSpecializationResponse } from "../types/editSpecialization.type";

export const editSpecializationService = async ({
    specializationId,
    payload,
}: {
    specializationId: string;
    payload: SpecializationPayload;
}): Promise<EditSpecializationResponse> => {
    return await APIUtility.put<EditSpecializationResponse>(`lookups/${specializationId}`, payload);
};
