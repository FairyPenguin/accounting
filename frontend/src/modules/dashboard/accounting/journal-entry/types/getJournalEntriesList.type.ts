import { ApiResponse } from "@/shared/interfaces/common/apiResponse.interface";
import { IJournalEntry } from ".";

export type GetAllJournalEntriesResponseData = {
    data: IJournalEntry[];
    totalCount: number;
    totalPage: number;
};

export type GetAllJournalEntriesResponse = ApiResponse<GetAllJournalEntriesResponseData>;
