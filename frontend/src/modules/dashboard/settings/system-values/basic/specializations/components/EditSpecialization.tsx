import { useCallback, useEffect } from "react";
import { EditSpecializationProps } from "../interfaces";
import { SpecializationForm } from "./SpecializationForm";
import { useSpecializationForm } from "../hooks/useSpecializationForm";
import { SpecializationPayload } from "../types/addSpecialization.type";
import { useEditSpecialization } from "../hooks/useEditSpecialization.hook";
import { useGetSpecializationDetails } from "../hooks/useGetSpecializationDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/basic?tab=specializations&subTab=overview",
    },
    { label: "Specializations", href: "/dashboard/settings/system-values/basic?tab=specializations&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditSpecialization: React.FC<EditSpecializationProps> = ({ specializationId }) => {
    const { register, handleSubmit, errors, reset } = useSpecializationForm();

    const { data: specializationsDetails } = useGetSpecializationDetails(specializationId) as any;
    const { mutate: editSpecialization } = useEditSpecialization();

    const onSubmit = useCallback(
        (data: SpecializationPayload) => {
            editSpecialization(
                { specializationId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editSpecialization, reset],
    );

    useEffect(() => {
        if (specializationsDetails) {
            reset(specializationsDetails?.data?.data);
        }
    }, [specializationsDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Specialization:</h1>
                <SpecializationForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={specializationsDetails?.data?.data}
                    submitButtonLabel="Edit Specialization"
                />
            </div>
        </form>
    );
};
