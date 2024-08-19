import { useCallback } from "react";
import { FieldOfStudyForm } from "./FieldOfStudyForm";
import { useFieldOfStudyForm } from "../hooks/useFieldOfStudyForm";
import { FieldOfStudyPayload } from "../types/addFieldOfStudy.type";
import { useAddFieldOfStudy } from "../hooks/useAddFieldOfStudy.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/basic?tab=fields-of-study&subTab=overview",
    },
    { label: "Field Of Study", href: "/dashboard/settings/system-values/basic?tab=fields-of-study&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddFieldOfStudy: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useFieldOfStudyForm();

    const { mutate: addFieldOfStudy } = useAddFieldOfStudy();

    const onSubmit = useCallback(
        (data: FieldOfStudyPayload) => {
            addFieldOfStudy(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addFieldOfStudy, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Field Of Study:</h1>
                <FieldOfStudyForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Field Of Study"
                />
            </div>
        </form>
    );
};
