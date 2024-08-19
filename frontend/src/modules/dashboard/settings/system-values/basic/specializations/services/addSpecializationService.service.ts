import { APIUtility } from "@/shared/utils/api.util";
import { AddSpecializationResponse, SpecializationPayload } from "../types/addSpecialization.type";

export const addSpecializationService = async (payload: SpecializationPayload): Promise<AddSpecializationResponse> => {

    const updatedPayload = {
        ...payload,
        lookupType: 'specialization',
    };

    return await APIUtility.post<AddSpecializationResponse>("lookups", updatedPayload);
};
