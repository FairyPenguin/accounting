import { useForm } from "react-hook-form";
import { SpecializationSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useSpecializationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(SpecializationSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
