import { userSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface UserFormPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    address?: string;
    gender?: string;
    phone?: string;
}

export function useUserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm<UserFormPayload | any>({
        mode: "onTouched",
        resolver: yupResolver(userSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
