"use client";

import { EditJournalEntry } from "@/modules/dashboard/accounting/journal-entry/components/EditJournalEntry";
import { EditJournalEntryPageProps } from "@/modules/dashboard/accounting/journal-entry/interfaces";

const EditJournalEntryPage: React.FC<EditJournalEntryPageProps> = ({ params: { journalEntryId } }) => {
    return <EditJournalEntry journalEntryId={String(journalEntryId)} />;
};

export default EditJournalEntryPage;
