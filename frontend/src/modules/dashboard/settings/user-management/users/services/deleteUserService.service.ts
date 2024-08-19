import { APIUtility } from "@/shared/utils/api.util";
import { DeleteUserResponse } from "../types/deleteUser.type";

export const deleteUserService = async (userId: string): Promise<DeleteUserResponse> => {
    return APIUtility.delete<DeleteUserResponse>(`users/${userId}`);
};
