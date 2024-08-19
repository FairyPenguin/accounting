import { APIUtility } from "@/shared/utils/api.util";
import { DeleteSpecializationResponse } from "../types/deleteSpecialization.type";

export const deleteSpecializationService = async (specializationId: string): Promise<DeleteSpecializationResponse> => {
    return APIUtility.delete<DeleteSpecializationResponse>(`specialization/${specializationId}`);
};
