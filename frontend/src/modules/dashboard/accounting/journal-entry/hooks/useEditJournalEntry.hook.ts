import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { JournalEntryFormPayload } from "./useJournalEntryForm.hook";
import { EditJournalEntryResponse } from "../types/editJournalEntry.type";
import { editJournalEntryService } from "../services/editJournalEntryService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditJournalEntry(): UseMutationResult<
    EditJournalEntryResponse,
    AxiosError,
    { journalEntryId: string; data: JournalEntryFormPayload }
> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditJournalEntryResponse, AxiosError, { journalEntryId: string; data: JournalEntryFormPayload }>(
        {
            mutationFn: ({ journalEntryId, data }) => editJournalEntryService(journalEntryId, data),
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getAllJournalEntries"] });
                router.push("/dashboard/accounting/journal-entries");
                toast.success(`The journal entry is edited successfully!`);
            },
            onError: (error: AxiosError) => {
                const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
                toast.error(errorMessage.message as any);
            },
        },
    );
}
