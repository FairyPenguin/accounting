import { useState } from "react";
import { useRouter } from "next/navigation";
import { TokenHelper } from "@/shared/helpers/tokenHelper.helper";
import { getAuthTokenService } from "../services/get-auth-tokens.service";

export function useLoginHook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const { token } = await getAuthTokenService(email, password);
            console.log({ token });
            TokenHelper.setToken(token);
            router.push("/dashboard");
        } catch (err) {
            setError("Login failed. Please check your credentials and try again.");
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
}
