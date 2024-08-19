import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteJournalEntryResponse } from "../types/deleteJournalEntry.type";
import { deleteJournalEntryService } from "../services/deleteJournalEntryService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteJournalEntry = (): UseMutationResult<DeleteJournalEntryResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteJournalEntryResponse, AxiosError, string>({
        mutationFn: deleteJournalEntryService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllJournalEntries"] });
            toast.success("The journal entry is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
