import React from "react";
import { UseFormRegister, FieldValues, RegisterOptions, Path } from "react-hook-form";

interface CustomInputProps<TFormValues extends FieldValues> {
    id: string;
    register: UseFormRegister<TFormValues>;
    name: Path<TFormValues>;
    rules?: RegisterOptions<TFormValues, Path<TFormValues> & (string | undefined)> | undefined;
    type?: string;
    className?: string;
    autoComplete?: "on" | "off";
    placeholder?: string;
    label?: string;
}

export const CustomInput = <TFormValues extends FieldValues>({
    id,
    register,
    name,
    rules = {},
    type = "text",
    className = "",
    autoComplete = "off",
    placeholder = "",
    label,
    ...rest
}: CustomInputProps<TFormValues> & React.InputHTMLAttributes<HTMLInputElement>) => {
    const isRequired = rules?.required;

    return (
        <>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                    {isRequired && <span className="ml-1 text-lg font-extrabold text-red-500">*</span>}
                </label>
            )}

            <input
                id={id}
                {...register(name, rules)}
                type={type}
                className={`w-full rounded-xl border px-4 py-3 leading-tight text-gray-500 shadow focus:outline-none ${className}`}
                autoComplete={autoComplete}
                placeholder={placeholder}
                {...rest}
            />
        </>
    );
};
