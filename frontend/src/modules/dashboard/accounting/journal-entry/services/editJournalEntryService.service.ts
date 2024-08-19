import { APIUtility } from "@/shared/utils/api.util";
import { JournalEntryFormPayload } from "../hooks/useJournalEntryForm.hook";
import { EditJournalEntryResponse } from "../types/editJournalEntry.type";

export const editJournalEntryService = async (
    journalEntryId: string,
    payload: JournalEntryFormPayload,
): Promise<EditJournalEntryResponse> => {
    return await APIUtility.put<EditJournalEntryResponse>(`journal-entries/${journalEntryId}`, payload);
};
