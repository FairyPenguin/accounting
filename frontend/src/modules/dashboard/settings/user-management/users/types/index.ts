import { IPermission } from "../../permissions/types";
import { IRole } from "../../roles/types";

export type IUser = {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    emailVerifiedAt: string | null;
    active: boolean;
    gender: string | null;
    address: string | null;
    phone: string | null;
    skypeId: string | null;
    createdBy: string | null;
    updatedBy: string | null;
    tenantId: number;
    permissions?: IPermission[] | string[] | undefined;
    role?: IRole | string | undefined;
};
