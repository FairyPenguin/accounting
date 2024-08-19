import { APIUtility } from "@/shared/utils/api.util";
import { DeleteJournalEntryResponse } from "../types/deleteJournalEntry.type";

export const deleteJournalEntryService = async (journalEntryId: string): Promise<DeleteJournalEntryResponse> => {
    return APIUtility.delete<DeleteJournalEntryResponse>(`journal-entries/${journalEntryId}`);
};
