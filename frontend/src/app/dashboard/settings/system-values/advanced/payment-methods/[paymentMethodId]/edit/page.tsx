"use client";

import { EditPaymentMethod } from "@/modules/dashboard/settings/system-values/advanced/payment-methods/components/EditPaymentMethod";
import { EditPaymentMethodPageProps } from "@/modules/dashboard/settings/system-values/advanced/payment-methods/interfaces";

const EditPaymentMethodPage: React.FC<EditPaymentMethodPageProps> = ({ params: { paymentMethodId } }) => {
    return <EditPaymentMethod paymentMethodId={String(paymentMethodId)} />;
};

export default EditPaymentMethodPage;
