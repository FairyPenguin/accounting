import { roleSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function useRoleForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(roleSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
