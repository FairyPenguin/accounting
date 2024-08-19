import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { JournalEntryFormPayload } from "./useJournalEntryForm.hook";
import { AddJournalEntryResponse } from "../types/addJournalEntry.type";
import { addJournalEntryService } from "../services/addJournalEntryService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useAddJournalEntry(): UseMutationResult<AddJournalEntryResponse, AxiosError, JournalEntryFormPayload> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddJournalEntryResponse, AxiosError, JournalEntryFormPayload>({
        mutationFn: addJournalEntryService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllJournalEntries"] });
            router.push("/dashboard/accounting/journal-entries");
            toast.success(`The journal entry is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
