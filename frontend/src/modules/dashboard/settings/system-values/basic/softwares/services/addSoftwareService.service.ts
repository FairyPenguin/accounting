import { APIUtility } from "@/shared/utils/api.util";
import { AddSoftwareResponse, SoftwarePayload } from "../types/addSoftware.type";

export const addSoftwareService = async (payload: SoftwarePayload): Promise<AddSoftwareResponse> => {
    return await APIUtility.post<AddSoftwareResponse>("it-tools?type=software", payload);
};
