import React from "react";
import { useCallback } from "react";
import { TransactionForm } from "./TransactionForm";
import { useAddTransaction } from "../hooks/useAddTransaction.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { TransactionFormPayload, useTransactionForm } from "../hooks/useTransactionForm.hook";

const breadcrumbItems = [
    {
        label: "Accounting",
        href: "/dashboard/accounting/overview",
    },
    { label: "Transactions", href: "/dashboard/accounting/transactions" },
    { label: "Create", href: "#" },
];

export const AddTransaction: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useTransactionForm();

    const { mutate: addTransaction } = useAddTransaction();

    const onSubmit = useCallback(
        (data: TransactionFormPayload) => {
            addTransaction(data, {
                onSuccess: () => {
                    reset();
                },
                onError: (error) => {
                    console.error("Mutation failed:", error);
                },
            });
        },
        [addTransaction, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Transaction:</h1>
                <TransactionForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Transaction"
                />
            </div>
        </form>
    );
};
