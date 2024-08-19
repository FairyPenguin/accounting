import { useForm } from "react-hook-form";
import { DepartmentSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useDepartmentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(DepartmentSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
