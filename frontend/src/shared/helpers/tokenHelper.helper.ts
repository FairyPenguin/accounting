export class TokenHelper {
    public static setToken(token: string): void {
        localStorage.setItem("accessToken", token);
    }

    public static getToken(): string | null {
        return localStorage.getItem("accessToken");
    }

    public static removeToken(): void {
        localStorage.removeItem("accessToken");
    }
}
