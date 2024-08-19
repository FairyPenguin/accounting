import { useCallback, useEffect } from "react";
import { EditPaymentMethodProps } from "../interfaces";
import { PaymentMethodForm } from "./PaymentMethodForm";
import { usePaymentMethodForm } from "../hooks/usePaymentMethodForm";
import { PaymentMethodPayload } from "../types/addPaymentMethod.type";
import { useEditPaymentMethod } from "../hooks/useEditPaymentMethod.hook";
import { useGetPaymentMethodDetails } from "../hooks/useGetPaymentMethodDetails.hook";
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
    { label: "Edit", href: "#" },
];

export const EditPaymentMethod: React.FC<EditPaymentMethodProps> = ({ paymentMethodId }) => {
    const { register, handleSubmit, errors, reset } = usePaymentMethodForm();

    const { data: paymentMethodDetails } = useGetPaymentMethodDetails(paymentMethodId) as any;
    const { mutate: editPaymentMethod } = useEditPaymentMethod();

    const onSubmit = useCallback(
        (data: PaymentMethodPayload) => {
            editPaymentMethod(
                {
                    paymentMethodId,
                    data,
                },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editPaymentMethod, reset],
    );

    useEffect(() => {
        if (paymentMethodDetails) {
            reset(paymentMethodDetails?.data?.data);
        }
    }, [paymentMethodDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Payment Method:</h1>
                <PaymentMethodForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={paymentMethodDetails?.data?.data}
                    submitButtonLabel="Edit Payment Method"
                />
            </div>
        </form>
    );
};
