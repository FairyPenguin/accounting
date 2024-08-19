import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editRoleService } from "../services/editRoleService.service";

export function useEditRole() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editRoleService as any,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["getAllRoles"] });

            router.push("/dashboard/settings/user-management?tab=roles&subTab=all-roles");

            toast.success("The Role is edited successfully!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
}
