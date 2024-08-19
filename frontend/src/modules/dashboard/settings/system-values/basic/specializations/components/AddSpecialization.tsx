import { useCallback } from "react";
import { SpecializationForm } from "./SpecializationForm";
import { useSpecializationForm } from "../hooks/useSpecializationForm";
import { SpecializationPayload } from "../types/addSpecialization.type";
import { useAddSpecialization } from "../hooks/useAddSpecialization.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/basic?tab=specializations&subTab=overview",
    },
    { label: "Specializations", href: "/dashboard/settings/system-values/basic?tab=specializations&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddSpecialization: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useSpecializationForm();

    const { mutate: addSpecialization } = useAddSpecialization();

    const onSubmit = useCallback(
        (data: SpecializationPayload) => {
            addSpecialization(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addSpecialization, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Specialization:</h1>
                <SpecializationForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Specialization"
                />
            </div>
        </form>
    );
};
