import { APIUtility } from "@/shared/utils/api.util";
import { EditUserResponse } from "../types/editUser.type";
import { UserFormPayload } from "../hooks/useUserForm.hook";
import { assignRoleToUserService } from "./assignRoleToUserService.service";

export const editUserService = async ({
    userId,
    payload,
}: {
    userId: string;
    payload: UserFormPayload;
}): Promise<EditUserResponse> => {
    const editedUser = (await APIUtility.put<EditUserResponse>(`users/${userId}`, payload)) as any;

    await assignRoleToUserService({
        userId: editedUser.data?.data.id,
        payload: { role: payload.role },
    });

    return editedUser;
};
