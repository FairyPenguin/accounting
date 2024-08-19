import { useForm } from "react-hook-form";
import { IndustrySchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useIndustryForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(IndustrySchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
