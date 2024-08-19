import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { DeleteCountryResponse } from "../types/deleteCountry.type";
import { deleteCountryService } from "../services/deleteCountryService.service";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCountry = (): UseMutationResult<DeleteCountryResponse, AxiosError, string> => {
    const queryClient = useQueryClient();

    return useMutation<DeleteCountryResponse, AxiosError, string>({
        mutationFn: deleteCountryService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCountries"] });
            toast.success("The country is deleted successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
