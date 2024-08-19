import { ITransaction } from "../../transaction/types";

export type IJournalEntry = {
    id: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    referenceNumber: string;
    description: string;
    status: string;
    totalAmount: string;
    deletedAt: string | null;
    transactions: ITransaction[];
};
