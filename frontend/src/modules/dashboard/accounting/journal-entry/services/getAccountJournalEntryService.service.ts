import { APIUtility } from "@/shared/utils/api.util";
import { GetJouIJournalEntryDetailsResponse } from "../types/getJournalEntryDetails.type";

export const getJournalEntryDetailsService = async (
    journalEntryId: string,
): Promise<GetJouIJournalEntryDetailsResponse> => {
    return await APIUtility.get<GetJouIJournalEntryDetailsResponse>(`journal-entries/${journalEntryId}`);
};
