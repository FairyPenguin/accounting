import { useForm } from "react-hook-form";
import { SoftwareSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useSoftwareForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(SoftwareSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
