import { APIUtility } from "@/shared/utils/api.util";
import { DeleteSoftwareResponse } from "../types/deleteSoftware.type";

export const deleteSoftwareService = async (SoftwareId: string): Promise<DeleteSoftwareResponse> => {
    return APIUtility.delete<DeleteSoftwareResponse>(`it-tools/${SoftwareId}?type=software`);
};
