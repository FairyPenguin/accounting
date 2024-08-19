import { CurrencyForm } from "./CurrencyForm";
import { useCallback, useEffect } from "react";
import { EditCurrencyProps } from "../interfaces";
import { useCurrencyForm } from "../hooks/useCurrencyForm";
import { CurrencyPayload } from "../types/addCurrency.type";
import { useEditCurrency } from "../hooks/useEditCurrency.hook";
import { useGetCurrencyDetails } from "../hooks/useGetCurrencyDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=currencies&subTab=overview",
    },
    { label: "Currencies", href: "/dashboard/settings/system-values/advanced?tab=currencies&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditCurrency: React.FC<EditCurrencyProps> = ({ currencyId }) => {
    const { register, handleSubmit, errors, reset } = useCurrencyForm();

    const { data: hardwareDetails } = useGetCurrencyDetails(currencyId) as any;
    const { mutate: editCurrency } = useEditCurrency();

    const onSubmit = useCallback(
        (data: CurrencyPayload) => {
            editCurrency(
                { currencyId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editCurrency, reset],
    );

    useEffect(() => {
        if (hardwareDetails) {
            reset(hardwareDetails?.data?.data);
        }
    }, [hardwareDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Currency:</h1>
                <CurrencyForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit Currency"
                />
            </div>
        </form>
    );
};
