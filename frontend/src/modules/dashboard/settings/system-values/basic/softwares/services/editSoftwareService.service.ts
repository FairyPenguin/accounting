import { APIUtility } from "@/shared/utils/api.util";
import { SoftwarePayload } from "../types/addSoftware.type";
import { EditSoftwareResponse } from "../types/editSoftware.type";

export const editSoftwareService = async ({
    softwareId,
    payload,
}: {
    softwareId: string;
    payload: SoftwarePayload;
}): Promise<EditSoftwareResponse> => {
    return await APIUtility.put<EditSoftwareResponse>(`it-tools/${softwareId}?type=software`, payload);
};
