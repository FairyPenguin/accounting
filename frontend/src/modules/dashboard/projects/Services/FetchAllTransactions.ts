import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { Account } from "./FetchAllAccounts";

export interface Transactions {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    referenceNumber: string;
    accountId: string;
    journalEntryId: string;
    type: string;
    amount: string;
    description: string;
    status: string
    deletedAt: null;
}

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
        data: {
            data: Transactions[];
            totalCount: number;
            totalPage: number;
        };
    };
}

async function getAllTransactions(): Promise<APIResponseType> {
    try {
        const response: APIResponseType = await APIFunctionalUtility().GETMethod<APIResponseType>(
            `lookups?page=1&limit=50&lookupType=transaction`,
        );

        if (!response.data.success) {
            console.error(response.data.message);
        }

        return response;
    } catch (error) {
        console.error(error);

        return {
            data: {
                success: false,
                message: "Failed to fetch transactions.....",
                data: {
                    data: [],
                    totalCount: 0,
                    totalPage: 0,
                },
            },
        };
    }
}

async function transactionsFetcher(): Promise<Transactions[]> {
    try {
        const response = await getAllTransactions();

        if (response && response.data && response.data.data) {
            return response.data.data.data;
        } else {
            console.error("Failed to fetch transactions:", response.data.message);
            return [];
        }
    } catch (error) {
        console.error("Error fetching transactions...", error);
        return []; // Return an empty array in case of an error
    }
}

export default transactionsFetcher;
