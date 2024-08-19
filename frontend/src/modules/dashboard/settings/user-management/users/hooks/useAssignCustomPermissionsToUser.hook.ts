import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignCustomPermissionsToUserService } from "../services/assignCustomPermissionsToUserService.service";

export function useAssignCustomPermissionsToUser() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: assignCustomPermissionsToUserService,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
            router.push("/dashboard/settings/user-management?tab=users&subTab=all-users");
            toast.success(`The custom permissions are assigned successfully!`);
        },
        onError: (error: AxiosError) => {
            const errorMessage = (error.response?.data as any) ?? "An unexpected error occurred";
            toast.error(errorMessage.message as any);
        },
    });
}
