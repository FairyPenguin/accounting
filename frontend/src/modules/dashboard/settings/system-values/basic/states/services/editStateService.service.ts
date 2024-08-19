import { APIUtility } from "@/shared/utils/api.util";
import { StatePayload } from "../types/addState.type";
import { EditStateResponse } from "../types/editState.type";

export const editStateService = async ({
    stateId,
    payload,
}: {
    stateId: string;
    payload: StatePayload;
}): Promise<EditStateResponse> => {
    return await APIUtility.put<EditStateResponse>(`lookups/${stateId}`, payload);
};
