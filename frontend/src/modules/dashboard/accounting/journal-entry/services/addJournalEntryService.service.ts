import { APIUtility } from "@/shared/utils/api.util";
import { AddJournalEntryResponse } from "../types/addJournalEntry.type";
import { JournalEntryFormPayload } from "../hooks/useJournalEntryForm.hook";

export const addJournalEntryService = async (payload: JournalEntryFormPayload): Promise<AddJournalEntryResponse> => {
    console.log({ payload });
    return await APIUtility.post<AddJournalEntryResponse>("journal-entries", payload);
};
