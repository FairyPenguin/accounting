import { DefaultErrorType } from "@/shared/types/defaultError.type";

export function isDefaultErrorType(obj: any): obj is DefaultErrorType {
    return obj && typeof obj.success === "boolean" && typeof obj.message === "string";
}
