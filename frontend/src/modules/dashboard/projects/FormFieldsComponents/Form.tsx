"use client";

import { useForm, SubmitHandler, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export type Inputs = {
    example: string;
    exampleRequired: string;
    [key: string]: string | number;
};

export default function Form({ children }: { children: React.ReactElement }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch("example"));
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
            {children}
        </form>
    );
}
