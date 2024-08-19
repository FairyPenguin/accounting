import { APIUtility } from "@/shared/utils/api.util";

export interface AuthResponse {
    user: {
        id: string;
        uuid: string;
        createdAt: string;
        updatedAt: string;
        firstName: string;
        lastName: string;
        email: string;
        emailVerifiedAt: string | null;
        active: boolean;
        gender: string;
        address: string | null;
        phone: string | null;
        skypeId: string | null;
        roleId: string;
        tenantId: string;
        deletedAt: string | null;
        permissions: string[];
        role: string | null;
    };
    token: string;
}

export const getAuthTokenService = async (email: string, password: string): Promise<AuthResponse> => {
    const response: any = await APIUtility.post<
        { success: boolean; message: string; data: AuthResponse },
        { email: string; password: string }
    >("auth/login", { email, password });

    return response.data.data;
};
