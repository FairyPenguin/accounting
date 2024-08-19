import { APIUtility } from "@/shared/utils/api.util";
import { HardwarePayload } from "../types/addHardware.type";
import { EditHardwareResponse } from "../types/editHardware.type";

export const editHardwareService = async ({
    hardwareId,
    payload,
}: {
    hardwareId: string;
    payload: HardwarePayload;
}): Promise<EditHardwareResponse> => {
    return await APIUtility.put<EditHardwareResponse>(`it-tools/${hardwareId}?type=hardware`, payload);
};
