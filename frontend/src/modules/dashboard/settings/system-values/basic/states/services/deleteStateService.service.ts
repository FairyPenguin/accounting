import { APIUtility } from "@/shared/utils/api.util";
import { DeleteStateResponse } from "../types/deleteState.type";

export const deleteStateService = async (stateId: string): Promise<DeleteStateResponse> => {
    return APIUtility.delete<DeleteStateResponse>(`states/${stateId}`);
};
