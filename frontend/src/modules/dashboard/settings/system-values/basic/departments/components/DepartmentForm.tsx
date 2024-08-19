import React from "react";
import { UseFormRegister, useForm } from "react-hook-form";
import { DepartmentPayload } from "../types/addDepartment.type";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";

export interface DepartmentFormProps {
    values?: DepartmentPayload;
    register: UseFormRegister<DepartmentPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const DepartmentForm: React.FC<DepartmentFormProps> = ({
    values,
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitButtonLabel,
}) => {
    return (
        <div onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-row gap-2">
                {/* Name Field */}
                <div className="flex max-w-[300px] flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="name"
                        name="name"
                        register={register}
                        placeholder="Create Department"
                        autoComplete="off"
                        rules={{ required: "Name is required!" }}
                        label="Name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{`${errors.name.message}`}</p>}

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
            </div>
        </div>
    );
};