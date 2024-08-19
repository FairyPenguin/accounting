import React from "react";
import { useGetAllAccounts } from "../../account/hooks/useGetAllAccounts.hook";
import { useForm, UseFormRegister } from "react-hook-form";
import { TransferFormPayload } from "../hooks/useTransferForm.hook";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";

export interface TransferFormProps {
    values?: TransferFormPayload;
    register: UseFormRegister<TransferFormPayload>;
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
    errors: ReturnType<typeof useForm>["formState"]["errors"];
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const TransferForm: React.FC<TransferFormProps> = ({ values, register, errors, submitButtonLabel }) => {
    const { data: accountsData } = useGetAllAccounts({ page: 1, limit: 50 }) as any;

    const accounts = accountsData?.data?.data.map((account: any) => ({
        label: account.name,
        value: account.id,
    }));

    return (
        <div>
            <div className="flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="fromAccountId"
                        name="fromAccountId"
                        register={register}
                        options={accounts}
                        placeholder="Select From Account"
                        rules={{ required: '"From Account" is required!' }}
                        label="From Account"
                        selectedOption={values?.fromAccountId || ""}
                    />
                    {errors.fromAccountId && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.fromAccountId.message}`}</p>
                    )}
                </div>
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomSelectField
                        id="toAccountId"
                        name="toAccountId"
                        register={register}
                        options={accounts}
                        placeholder="Select To Account"
                        label="To Account"
                        rules={{ required: '"To Account" is required!' }}
                        selectedOption={values?.toAccountId || ""}
                    />
                    {errors.toAccountId && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.toAccountId.message}`}</p>
                    )}
                </div>
            </div>

            <div className="my-5 flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="amount"
                        name="amount"
                        type="number"
                        register={register}
                        placeholder="Enter Amount"
                        rules={{ required: "Amount is required!" }}
                        label="Amount"
                    />
                    {errors.amount && <p className="mt-2 text-sm text-red-600">{`${errors.amount.message}`}</p>}
                </div>
            </div>

            <div className="flex w-full flex-row gap-2">
                <div className="flex flex-1 flex-col sm:mr-14">
                    <CustomInput
                        id="description"
                        name="description"
                        register={register}
                        placeholder="Enter Description"
                        rules={{ required: "Description is required!" }}
                        label="Description"
                    />
                    {errors.description && (
                        <p className="mt-2 text-sm text-red-600">{`${errors.description.message}`}</p>
                    )}
                </div>
            </div>

            <div className="mt-7 flex justify-center">
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
