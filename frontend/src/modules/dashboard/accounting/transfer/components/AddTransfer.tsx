import React from "react";
import { useCallback } from "react";
import { useAddTransfer } from "../hooks/useAddTransfer.hook";
import { TransferFormPayload, useTransferForm } from "../hooks/useTransferForm.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { TransferForm } from "./TransferForm";

const breadcrumbItems = [
    { label: "Accounting", href: "/dashboard/accounting/overview" },
    { label: "Transfers", href: "/dashboard/accounting/transfers" },
    { label: "Create", href: "#" },
];

export const AddTransfer: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useTransferForm();

    const { mutate: addTransfer } = useAddTransfer();

    const onSubmit = useCallback(
        (data: TransferFormPayload) => {
            addTransfer(data, {
                onSuccess: () => {
                    reset();
                },
                onError: (error) => {
                    console.error("Mutation failed:", error);
                },
            });
        },
        [addTransfer, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Transfer:</h1>
                <TransferForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Transfer"
                />
            </div>
        </form>
    );
};
