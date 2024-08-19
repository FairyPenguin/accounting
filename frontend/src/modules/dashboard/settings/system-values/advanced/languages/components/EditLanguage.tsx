import { LanguageForm } from "./LanguageForm";
import { useCallback, useEffect } from "react";
import { EditLanguageProps } from "../interfaces";
import { useLanguageForm } from "../hooks/useLanguageForm";
import { LanguagePayload } from "../types/addLanguage.type";
import { useEditLanguage } from "../hooks/useEditLanguage.hook";
import { useGetLanguageDetails } from "../hooks/useGetLanguageDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=languages&subTab=overview",
    },
    { label: "Languages", href: "/dashboard/settings/system-values/advanced?tab=languages&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditLanguage: React.FC<EditLanguageProps> = ({ languageId }) => {
    const { register, handleSubmit, errors, reset } = useLanguageForm();

    const { data: hardwareDetails } = useGetLanguageDetails(languageId) as any;
    const { mutate: editLanguage } = useEditLanguage();

    const onSubmit = useCallback(
        (data: LanguagePayload) => {
            editLanguage(
                { languageId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editLanguage, reset],
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
                <h1 className="mb-8 text-lg font-extrabold">Edit Language:</h1>
                <LanguageForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit Language"
                />
            </div>
        </form>
    );
};
