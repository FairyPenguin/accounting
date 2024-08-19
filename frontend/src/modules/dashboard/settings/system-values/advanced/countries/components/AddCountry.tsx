import { useCallback } from "react";
import { CountryForm } from "./CountryForm";
import { useCountryForm } from "../hooks/useCountryForm";
import { CountryPayload } from "../types/addCountry.type";
import { useAddCountry } from "../hooks/useAddCountry.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=countries&subTab=overview",
    },
    { label: "Countries", href: "/dashboard/settings/system-values/advanced?tab=countries&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddCountry: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useCountryForm();

    const { mutate: addCountry } = useAddCountry();

    const onSubmit = useCallback(
        (data: CountryPayload) => {
            addCountry(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addCountry, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Country:</h1>
                <CountryForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Country"
                />
            </div>
        </form>
    );
};
