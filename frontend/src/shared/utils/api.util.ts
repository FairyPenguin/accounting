import axios from "axios";
import { baseURL } from "../constants";
import { TokenHelper } from "../helpers/tokenHelper.helper";
export class APIUtility {
    static async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        const token = TokenHelper.getToken();
        return await axios.get(`${baseURL}/${endpoint}`, {
            params,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
    }

    static async post<T, P = unknown>(endpoint: string, payload: P, headers: any = {}): Promise<T> {
        const token = TokenHelper.getToken();
        return await axios.post(`${baseURL}/${endpoint}`, payload, {
            headers: { ...headers, ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        });
    }

    static async put<T, P = unknown>(endpoint: string, payload: P): Promise<T> {
        const token = TokenHelper.getToken();
        return await axios.put(`${baseURL}/${endpoint}`, payload, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
    }

    static async delete<T>(endpoint: string): Promise<T> {
        const token = TokenHelper.getToken();
        return await axios.delete(`${baseURL}/${endpoint}`, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
    }

    static async patch<T, P = unknown>(endpoint: string, payload: P): Promise<T> {
        const token = TokenHelper.getToken();
        return await axios.patch(`${baseURL}/${endpoint}`, payload, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
    }
}
