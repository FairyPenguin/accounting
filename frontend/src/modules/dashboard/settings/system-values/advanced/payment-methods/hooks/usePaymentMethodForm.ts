import { useForm } from "react-hook-form";
import { PaymentMethodSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function usePaymentMethodForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(PaymentMethodSchema),
    });

    return { register, handleSubmit, errors, reset, control, setValue };
}
