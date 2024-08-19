interface WithJournalEntryId {
    journalEntryId: string;
}

export interface EditJournalEntryProps extends WithJournalEntryId {}
export interface EditJournalEntryPageProps {
    params: EditJournalEntryProps;
}

export interface JournalEntryDetailsProps extends WithJournalEntryId {}
export interface JournalEntryDetailsPageProps {
    params: JournalEntryDetailsProps;
}
