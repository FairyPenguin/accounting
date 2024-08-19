import { IJournalEntry } from "../../journal-entry/types";
import { IAccount } from "../../account/types";

export type ITransaction = {
    id: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    referenceNumber: string;
    accountId: string;
    journalEntryId: string;
    type: "DEBIT" | "CREDIT";
    amount: string;
    description: string;
    status: string;
    deletedAt: string | null;
    account: IAccount;
    journalEntry: IJournalEntry;
};
