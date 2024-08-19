import { useCallback } from "react";
import { LanguageForm } from "./LanguageForm";
import { useLanguageForm } from "../hooks/useLanguageForm";
import { LanguagePayload } from "../types/addLanguage.type";
import { useAddLanguage } from "../hooks/useAddLanguage.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=languages&subTab=overview",
    },
    { label: "Languages", href: "/dashboard/settings/system-values/advanced?tab=languages&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddLanguage: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useLanguageForm();

    const { mutate: addLanguage } = useAddLanguage();

    const onSubmit = useCallback(
        (data: LanguagePayload) => {
            addLanguage(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addLanguage, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Language:</h1>
                <LanguageForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Language"
                />
            </div>
        </form>
    );
};
