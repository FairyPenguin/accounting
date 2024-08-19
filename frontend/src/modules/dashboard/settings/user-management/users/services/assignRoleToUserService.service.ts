import { APIUtility } from "@/shared/utils/api.util";
import { AssignRoleToUserPayload, AssignRoleToUserResponse } from "../types/assignRoleToUser.type";

export const assignRoleToUserService = async ({
    userId,
    payload,
}: {
    userId: number;
    payload: AssignRoleToUserPayload;
}): Promise<AssignRoleToUserResponse> => {
    return await APIUtility.post<AssignRoleToUserResponse>(`users/${userId}/assign-role`, payload);
};
