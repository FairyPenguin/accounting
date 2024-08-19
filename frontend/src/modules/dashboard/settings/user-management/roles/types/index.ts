export type IRole = {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    name: string;
    tenantId: number;
    permissions: string[];
};

export interface IModuleOperation {
    label: string;
    code: string;
    status: boolean;
}

export interface IRoleModule {
    moduleName: string;
    operations: IModuleOperation[];
}
