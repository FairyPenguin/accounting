import { APIUtility } from "@/shared/utils/api.util";
import { AddUserResponse } from "../types/addUser.type";
import { UserFormPayload } from "../hooks/useUserForm.hook";
import { assignRoleToUserService } from "./assignRoleToUserService.service";

export const addUserService = async (payload: UserFormPayload): Promise<AddUserResponse> => {
    const createdUser = (await APIUtility.post<AddUserResponse>("users", payload)) as any;

    await assignRoleToUserService({
        userId: createdUser.data?.data.id,
        payload: { role: payload.role },
    });

    return createdUser;
};
