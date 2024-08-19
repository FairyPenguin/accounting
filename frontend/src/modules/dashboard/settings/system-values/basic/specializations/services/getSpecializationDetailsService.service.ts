import { APIUtility } from "@/shared/utils/api.util";
import { GetSpecializationDetailsResponse } from "../types/getSpecializationDetails.type";

export const getSpecializationDetailsService = async (
    specializationId: string,
): Promise<GetSpecializationDetailsResponse> => {
    return await APIUtility.get<GetSpecializationDetailsResponse>(`lookups/${specializationId}`);
};
