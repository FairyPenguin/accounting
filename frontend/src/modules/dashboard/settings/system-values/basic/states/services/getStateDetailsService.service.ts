import { APIUtility } from "@/shared/utils/api.util";
import { GetStateDetailsResponse } from "../types/getStateDetails.type";

export const getStateDetailsService = async (stateId: string): Promise<GetStateDetailsResponse> => {
    return await APIUtility.get<GetStateDetailsResponse>(`lookups/${stateId}`);
};
