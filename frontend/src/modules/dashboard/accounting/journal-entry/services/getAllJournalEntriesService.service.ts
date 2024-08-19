import { APIUtility } from "@/shared/utils/api.util";
import { QueryParams } from "@/shared/types/queryParams.type";
import { GetAllJournalEntriesResponse } from "../types/getJournalEntriesList.type";

export const getAllJournalEntriesService = async (params?: QueryParams): Promise<GetAllJournalEntriesResponse> => {
    return await APIUtility.get<GetAllJournalEntriesResponse>("journal-entries", params);
};
