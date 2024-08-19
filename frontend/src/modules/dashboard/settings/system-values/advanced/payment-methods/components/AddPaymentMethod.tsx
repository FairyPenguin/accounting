import { useCallback } from "react";
import { PaymentMethodForm } from "./PaymentMethodForm";
import { usePaymentMethodForm } from "../hooks/usePaymentMethodForm";
import { PaymentMethodPayload } from "../types/addPaymentMethod.type";
import { useAddPaymentMethod } from "../hooks/useAddPaymentMethod.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=payment-methods&subTab=overview",
    },
    {
        label: "Payment Methods",
        href: "/dashboard/settings/system-values/advanced?tab=payment-methods&subTab=overview",
    },
    { label: "Create", href: "#" },
];

export const AddPaymentMethod: React.FC = () => {
    const { register, handleSubmit, errors, reset } = usePaymentMethodForm();

    const { mutate: addPaymentMethod } = useAddPaymentMethod();

    const onSubmit = useCallback(
        (data: PaymentMethodPayload) => {
            addPaymentMethod(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addPaymentMethod, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Payment Method:</h1>
                <PaymentMethodForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Payment Method"
                />
            </div>
        </form>
    );
};
