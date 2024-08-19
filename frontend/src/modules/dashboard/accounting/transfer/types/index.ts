import { IAccount } from "../../account/types";

export interface ITransfer {
    id: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    referenceNumber: string;
    fromAccountId: string;
    toAccountId: string;
    amount: string;
    description: string;
    status: string;
    deletedAt: string | null;
    fromAccount: IAccount;
    toAccount: IAccount;
}
