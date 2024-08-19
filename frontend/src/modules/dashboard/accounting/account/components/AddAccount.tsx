import React from "react";
import { useCallback } from "react";
import { useAddAccount } from "../hooks/useAddAccount.hook";
import { AccountFormPayload, useAccountForm } from "../hooks/useAccountForm.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { AccountForm } from "./AccountForm";

const breadcrumbItems = [
    {
        label: "Accounting",
        href: "/dashboard/accounting/overview",
    },
    { label: "Accounts", href: "/dashboard/accounting/accounts" },
    { label: "Create", href: "#" },
];

export const AddAccount: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useAccountForm();

    const { mutate: addAccount } = useAddAccount();

    const onSubmit = useCallback(
        (data: AccountFormPayload) => {
            addAccount(data, {
                onSuccess: () => {
                    reset();
                },
                onError: (error) => {
                    console.error("Mutation failed:", error);
                },
            });
        },
        [addAccount, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Account:</h1>
                <AccountForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Account"
                />
            </div>
        </form>
    );
};
