import React from "react";
import { CountryPayload } from "../types/addCountry.type";
import { UseFormRegister, useForm } from "react-hook-form";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";

export interface CountryFormProps {
    values?: CountryPayload;
    register: UseFormRegister<CountryPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const CountryForm: React.FC<CountryFormProps> = ({
    values,
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitButtonLabel,
}) => {
    return (
        <div onSubmit={handleSubmit(onSubmit)}>
            {/* Row 1 */}
            <div className="flex w-full flex-row gap-2">
                {/* Name Field */}
                <div className="flex max-w-[450px] flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="name"
                        name="name"
                        register={register}
                        placeholder="English"
                        autoComplete="off"
                        rules={{ required: "Name is required!" }}
                        label="Name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{`${errors.name.message}`}</p>}
                </div>

                {/* Symbol Field */}
                {/* <div className="flex max-w-[450px] flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="symbol"
                        name="symbol"
                        register={register}
                        placeholder="EN"
                        autoComplete="off"
                        rules={{ required: "Symbol is required!" }}
                        label="symbol"
                    />
                    {errors.symbol && <p className="mt-2 text-sm text-red-600">{`${errors.symbol.message}`}</p>}
                </div> */}
            </div>

            {/* Submit Button */}
            <div className="mt-20 flex justify-center">
                <button
                    type="submit"
                    className="w-80 whitespace-nowrap rounded-lg bg-purple-600 px-3 py-2 text-center font-semibold text-white"
                >
                    {submitButtonLabel}
                </button>
            </div>
        </div>
    );
};
