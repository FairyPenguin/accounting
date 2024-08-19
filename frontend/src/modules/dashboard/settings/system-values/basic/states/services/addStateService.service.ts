import { APIUtility } from "@/shared/utils/api.util";
import { AddStateResponse, StatePayload } from "../types/addState.type";

export const addStateService = async (payload: StatePayload): Promise<AddStateResponse> => {
    
    const updatedPayload = {
        ...payload,
        lookupType: 'state',
    };

    return await APIUtility.post<AddStateResponse>("lookups", updatedPayload);
};
