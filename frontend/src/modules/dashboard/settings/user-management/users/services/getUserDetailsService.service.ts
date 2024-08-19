import { APIUtility } from "@/shared/utils/api.util";
import { GetUserDetailsResponse } from "../types/getUserDetails.type";

export const getUserDetailsService = async (userId: string): Promise<GetUserDetailsResponse> => {
    return await APIUtility.get<GetUserDetailsResponse>(`users/${userId}`);
};
