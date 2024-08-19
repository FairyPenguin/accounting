import { useForm } from "react-hook-form";
import { LanguageSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useLanguageForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(LanguageSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
