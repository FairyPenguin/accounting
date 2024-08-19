export type IAccount = {
    id: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    referenceNumber: string;
    name: string;
    description: string;
    status: string;
    type: string;
    balance: string;
    parentId: string | null;
    deletedAt: string | null;
    children: IAccount[];
};
