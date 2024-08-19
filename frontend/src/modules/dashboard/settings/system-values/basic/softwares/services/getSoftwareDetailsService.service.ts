import { APIUtility } from "@/shared/utils/api.util";
import { GetSoftwareDetailsResponse } from "../types/getSoftwareDetails.type";

export const getSoftwareDetailsService = async (SoftwareId: string): Promise<GetSoftwareDetailsResponse> => {
    return await APIUtility.get<GetSoftwareDetailsResponse>(`it-tools/${SoftwareId}?type=software`);
};
