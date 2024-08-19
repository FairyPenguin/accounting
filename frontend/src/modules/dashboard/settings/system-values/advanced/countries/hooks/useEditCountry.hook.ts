import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { EditCountryResponse } from "../types/editCountry.type";
import { editCountryService } from "../services/editCountryService.service";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export function useEditCountry(): UseMutationResult<EditCountryResponse, AxiosError> {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<EditCountryResponse, AxiosError, any>({
        mutationFn: async ({ countryId, data }) => editCountryService({ countryId, payload: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCountries"] });
            router.push("/dashboard/settings/system-values/advanced?tab=countries&subTab=overview");
            toast.success(`The country is edited successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
