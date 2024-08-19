import React from "react";
import { UseFormRegister, useForm } from "react-hook-form";
import { CurrencyPayload } from "../types/addCurrency.type";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";

export interface CurrencyFormProps {
    values?: CurrencyPayload;
    register: UseFormRegister<CurrencyPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const CurrencyForm: React.FC<CurrencyFormProps> = ({
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
                        placeholder="Dollar"
                        autoComplete="off"
                        rules={{ required: "Name is required!" }}
                        label="Name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{`${errors.name.message}`}</p>}
                </div>

                {/* Symbol Field */}
                <div className="flex max-w-[450px] flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="symbol"
                        name="symbol"
                        register={register}
                        placeholder="$"
                        autoComplete="off"
                        rules={{ required: "Symbol is required!" }}
                        label="symbol"
                    />
                    {errors.symbol && <p className="mt-2 text-sm text-red-600">{`${errors.symbol.message}`}</p>}
                </div>
            </div>

            {/* Row 2 */}
            <div className="mt-10 flex w-full flex-row gap-2">
                {/* ISOCode Field */}
                <div className="flex max-w-[450px] flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="ISOCode"
                        name="ISOCode"
                        register={register}
                        placeholder="USD"
                        autoComplete="off"
                        rules={{ required: "ISOCode is required!" }}
                        label="ISOCode"
                    />
                    {errors.ISOCode && <p className="mt-2 text-sm text-red-600">{`${errors.ISOCode.message}`}</p>}
                </div>
            </div>

            {/* Default Field */}
            <div className="mt-4 mb-4 sm:col-span-4">
                <label htmlFor="default" className="block text-sm font-medium text-gray-700">
                    Default
                </label>
                <input
                    type="checkbox"
                    id="individual"
                    {...register("default")}
                    className="mt-1"
                />
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
