import { APIUtility } from "@/shared/utils/api.util";
import { DeleteHardwareResponse } from "../types/deleteHardware.type";

export const deleteHardwareService = async (hardwareId: string): Promise<DeleteHardwareResponse> => {
    return APIUtility.delete<DeleteHardwareResponse>(`it-tools/${hardwareId}?type=hardware`);
};
