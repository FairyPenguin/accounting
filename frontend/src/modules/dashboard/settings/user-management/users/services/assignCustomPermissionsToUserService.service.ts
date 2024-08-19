import { APIUtility } from "@/shared/utils/api.util";
import { AssignCustomPermissionsToUserResponse } from "../types/assignCustomPermissionsToUser.type";
import { AssignCustomPermissionsToUserResponseData } from "../types/assignCustomPermissionsToUser.type";

export const assignCustomPermissionsToUserService = async ({
    userId,
    payload,
}: {
    userId: number;
    payload: AssignCustomPermissionsToUserResponseData;
}): Promise<AssignCustomPermissionsToUserResponse> => {
    return await APIUtility.post<AssignCustomPermissionsToUserResponse>(`users/${userId}/assign-role`, payload);
};
