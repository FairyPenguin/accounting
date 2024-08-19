import React from "react";
import { useGetAllAccounts } from "../../account/hooks/useGetAllAccounts.hook";
import { CustomInput } from "@/shared/components/forms/input/CustomInput";
import { JournalEntryFormPayload } from "../hooks/useJournalEntryForm.hook";
import { UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { CustomSelectField } from "@/shared/components/forms/select-field/CustomSelectField";

export interface JournalEntryFormProps {
    values?: JournalEntryFormPayload;
    register: UseFormRegister<JournalEntryFormPayload>;
    handleSubmit: UseFormHandleSubmit<JournalEntryFormPayload>;
    errors: FieldErrors<JournalEntryFormPayload>;
    onSubmit: (data: any) => void;
    submitButtonLabel: string;
}

export const JournalEntryForm: React.FC<JournalEntryFormProps> = ({ values, register, errors, submitButtonLabel }) => {
    const { data: accountsData } = useGetAllAccounts({ page: 1, limit: 50 }) as any;

    const accounts = accountsData?.data?.data.map((account: any) => ({
        label: account.name,
        value: account.id,
    }));

    const getFieldError = (fieldError: any) => {
        if (fieldError && typeof fieldError === "object" && "message" in fieldError) {
            return fieldError.message;
        }
        return null;
    };

    return (
        <div>
            <div className="flex flex-col gap-4">
                <CustomInput
                    id="description"
                    name="description"
                    register={register}
                    placeholder="Enter Description"
                    autoComplete="off"
                    rules={{ required: "Description is required!" }}
                    label="Description"
                />
                {getFieldError(errors.description) && (
                    <p className="mt-2 text-sm text-red-600">{getFieldError(errors.description)}</p>
                )}

                <h3 className="font-bold">Transactions</h3>

                <div className="flex w-full flex-row gap-2">
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomSelectField
                            id="transactions.0.accountId"
                            name="transactions.0.accountId"
                            register={register}
                            options={accounts}
                            placeholder="Select Account"
                            label="Account"
                            rules={{ required: "Account is required!" }}
                            selectedOption={values?.transactions?.[0]?.accountId}
                        />
                        {getFieldError(errors.transactions?.[0]?.accountId) && (
                            <p className="mt-2 text-sm text-red-600">
                                {getFieldError(errors.transactions?.[0]?.accountId)}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomSelectField
                            id="transactions.0.type"
                            name="transactions.0.type"
                            register={register}
                            options={[
                                { label: "DEBIT", value: "DEBIT" },
                                { label: "CREDIT", value: "CREDIT" },
                            ]}
                            placeholder="Select Type"
                            label="Transaction Type"
                            rules={{ required: "Type is required!" }}
                            selectedOption={values?.transactions?.[0]?.type || ""}
                        />
                        {getFieldError(errors.transactions?.[0]?.type) && (
                            <p className="mt-2 text-sm text-red-600">{getFieldError(errors.transactions?.[0]?.type)}</p>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomInput
                            id="transactions.0.amount"
                            name="transactions.0.amount"
                            type="number"
                            register={register}
                            placeholder="Enter Amount"
                            autoComplete="off"
                            rules={{ required: "Amount is required!" }}
                            label="Amount"
                        />
                        {getFieldError(errors.transactions?.[0]?.amount) && (
                            <p className="mt-2 text-sm text-red-600">
                                {getFieldError(errors.transactions?.[0]?.amount)}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex w-full flex-row gap-2">
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomSelectField
                            id="transactions.1.accountId"
                            name="transactions.1.accountId"
                            register={register}
                            options={accounts}
                            placeholder="Select Account"
                            label="Account"
                            rules={{ required: "Account is required!" }}
                            selectedOption={values?.transactions?.[1]?.accountId || ""}
                        />
                        {getFieldError(errors.transactions?.[1]?.accountId) && (
                            <p className="mt-2 text-sm text-red-600">
                                {getFieldError(errors.transactions?.[1]?.accountId)}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomSelectField
                            id="transactions.1.type"
                            name="transactions.1.type"
                            register={register}
                            options={[
                                { label: "DEBIT", value: "DEBIT" },
                                { label: "CREDIT", value: "CREDIT" },
                            ]}
                            placeholder="Select Type"
                            label="Transaction Type"
                            rules={{ required: "Type is required!" }}
                            selectedOption={values?.transactions?.[1]?.type || ""}
                        />
                        {getFieldError(errors.transactions?.[1]?.type) && (
                            <p className="mt-2 text-sm text-red-600">{getFieldError(errors.transactions?.[1]?.type)}</p>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col sm:mr-14">
                        <CustomInput
                            id="transactions.1.amount"
                            name="transactions.1.amount"
                            type="number"
                            register={register}
                            placeholder="Enter Amount"
                            autoComplete="off"
                            rules={{ required: "Amount is required!" }}
                            label="Amount"
                        />
                        {getFieldError(errors.transactions?.[1]?.amount) && (
                            <p className="mt-2 text-sm text-red-600">
                                {getFieldError(errors.transactions?.[1]?.amount)}
                            </p>
                        )}
                    </div>
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
