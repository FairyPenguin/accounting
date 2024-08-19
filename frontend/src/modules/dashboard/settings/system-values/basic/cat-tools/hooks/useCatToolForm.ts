import { catToolSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function useCatToolForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(catToolSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
