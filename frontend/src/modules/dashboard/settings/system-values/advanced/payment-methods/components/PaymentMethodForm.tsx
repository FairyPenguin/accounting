import React from "react";
import { paymentMethodsOptions } from "../constants";
import { UseFormRegister, useForm } from "react-hook-form";
import { PaymentMethodPayload } from "../types/addPaymentMethod.type";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";

export interface PaymentMethodFormProps {
    values?: PaymentMethodPayload;
    register: UseFormRegister<PaymentMethodPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({
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
                        placeholder="John's Bank"
                        autoComplete="off"
                        rules={{ required: "Name is required!" }}
                        label="Name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{`${errors.name.message}`}</p>}
                </div>

                {/* paymentType Field */}
                <div className="flex max-w-[450px] flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="paymentType"
                        name="paymentType"
                        register={register}
                        options={paymentMethodsOptions}
                        placeholder="Select Payment Type"
                        selectedOption={values?.paymentType}
                        label="paymentType"
                    />

                    {errors.paymentType && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.paymentType.message}`}</p>
                    )}
                </div>
            </div>

            {/* Row 2 */}
            <div className="mt-10 flex w-full flex-row gap-2">
                {/* IBAN Field */}
                <div className="flex max-w-[450px] flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="IBAN"
                        name="IBAN"
                        register={register}
                        placeholder="GB29 NWBK 6016 1331 9268 19"
                        autoComplete="off"
                        rules={{ required: "IBAN is required!" }}
                        label="IBAN"
                    />
                    {errors.IBAN && <p className="mt-2 text-sm text-red-600">{`${errors.IBAN.message}`}</p>}
                </div>
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
