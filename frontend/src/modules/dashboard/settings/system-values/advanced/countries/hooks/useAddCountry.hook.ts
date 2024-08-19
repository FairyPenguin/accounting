import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addCountryService } from "../services/addCountryService.service";
import { AddCountryResponse, CountryPayload } from "../types/addCountry.type";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

export const useAddCountry = (): UseMutationResult<AddCountryResponse, AxiosError, CountryPayload> => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<AddCountryResponse, AxiosError, CountryPayload>({
        mutationFn: addCountryService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["addCountry"] });
            router.push("/dashboard/settings/system-values/advanced?tab=countries&subTab=overview");
            toast.success(`The country is added successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
};
