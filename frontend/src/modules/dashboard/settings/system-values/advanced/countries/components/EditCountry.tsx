import { CountryForm } from "./CountryForm";
import { useCallback, useEffect } from "react";
import { EditCountryProps } from "../interfaces";
import { useCountryForm } from "../hooks/useCountryForm";
import { CountryPayload } from "../types/addCountry.type";
import { useEditCountry } from "../hooks/useEditCountry.hook";
import { useGetCountryDetails } from "../hooks/useGetCountryDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=countries&subTab=overview",
    },
    { label: "Countries", href: "/dashboard/settings/system-values/advanced?tab=countries&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditCountry: React.FC<EditCountryProps> = ({ countryId }) => {
    const { register, handleSubmit, errors, reset } = useCountryForm();

    const { data: hardwareDetails } = useGetCountryDetails(countryId) as any;
    const { mutate: editCountry } = useEditCountry();

    const onSubmit = useCallback(
        (data: CountryPayload) => {
            editCountry(
                { countryId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editCountry, reset],
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
                <h1 className="mb-8 text-lg font-extrabold">Edit Country:</h1>
                <CountryForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit Country"
                />
            </div>
        </form>
    );
};
