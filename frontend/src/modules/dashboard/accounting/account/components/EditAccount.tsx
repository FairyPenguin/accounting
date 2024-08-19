import { AccountForm } from "./AccountForm";
import { useCallback, useEffect } from "react";
import { EditAccountProps } from "../interfaces";
import { useEditAccount } from "../hooks/useEditAccount.hook";
import { useGetAccountDetails } from "../hooks/useGetAccountDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { AccountFormPayload, useAccountForm } from "../hooks/useAccountForm.hook";

const breadcrumbItems = [
    {
        label: "Accounting",
        href: "/dashboard/accounting/overview",
    },
    { label: "Accounts", href: "/dashboard/accounting/accounts" },
    { label: "Edit", href: "#" },
];

export const EditAccount: React.FC<EditAccountProps> = ({ accountId }) => {
    const { register, handleSubmit, errors, reset } = useAccountForm();

    const { data: accountDetails } = useGetAccountDetails(accountId) as any;

    const values = { ...accountDetails?.data.data };

    const { mutate: editAccount } = useEditAccount();

    const onSubmit = useCallback(
        (data: AccountFormPayload) => {
            editAccount(
                { accountId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                    onError: (error) => {
                        console.log(error);
                    },
                },
            );
        },
        [editAccount, reset],
    );

    useEffect(() => {
        if (accountDetails) {
            const formValues = values;
            reset(formValues);
        }
    }, [accountDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Account:</h1>
                <AccountForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={values}
                    submitButtonLabel="Edit Account"
                />
            </div>
        </form>
    );
};
