"use client";

import { EditCurrency } from "@/modules/dashboard/settings/system-values/advanced/currencies/components/EditCurrency";
import { EditCurrencyPageProps } from "@/modules/dashboard/settings/system-values/advanced/currencies/interfaces";

const EditCurrencyPage: React.FC<EditCurrencyPageProps> = ({ params: { currencyId } }) => {
    return <EditCurrency currencyId={String(currencyId)} />;
};

export default EditCurrencyPage;
