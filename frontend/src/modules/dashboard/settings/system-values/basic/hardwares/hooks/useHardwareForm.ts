import { useForm } from "react-hook-form";
import { hardwareSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function useHardwareForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(hardwareSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
