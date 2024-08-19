import { APIUtility } from "@/shared/utils/api.util";
import { AddHardwareResponse, HardwarePayload } from "../types/addHardware.type";

export const addHardwareService = async (payload: HardwarePayload): Promise<AddHardwareResponse> => {
    return await APIUtility.post<AddHardwareResponse>("it-tools?type=hardware", payload);
};
