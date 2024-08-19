import { useCallback } from "react";
import { CurrencyForm } from "./CurrencyForm";
import { useCurrencyForm } from "../hooks/useCurrencyForm";
import { CurrencyPayload } from "../types/addCurrency.type";
import { useAddCurrency } from "../hooks/useAddCurrency.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=currencies&subTab=overview",
    },
    { label: "Currencies", href: "/dashboard/settings/system-values/advanced?tab=currencies&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddCurrency: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useCurrencyForm();

    const { mutate: addCurrency } = useAddCurrency();

    const onSubmit = useCallback(
        (data: CurrencyPayload) => {
            addCurrency(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addCurrency, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Currency:</h1>
                <CurrencyForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Currency"
                />
            </div>
        </form>
    );
};
