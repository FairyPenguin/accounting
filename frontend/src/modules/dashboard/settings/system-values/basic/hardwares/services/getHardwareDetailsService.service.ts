import { APIUtility } from "@/shared/utils/api.util";
import { GetHardwareDetailsResponse } from "../types/getHardwareDetails.type";

export const getHardwareDetailsService = async (hardwareId: string): Promise<GetHardwareDetailsResponse> => {
    return await APIUtility.get<GetHardwareDetailsResponse>(`it-tools/${hardwareId}?type=hardware`);
};
