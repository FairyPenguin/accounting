import { useCallback, useEffect } from "react";
import { FieldOfStudyForm } from "./FieldOfStudyForm";
import { EditFieldOfStudyProps } from "../interfaces";
import { useFieldOfStudyForm } from "../hooks/useFieldOfStudyForm";
import { FieldOfStudyPayload } from "../types/addFieldOfStudy.type";
import { useEditFieldOfStudy } from "../hooks/useEditFieldOfStudy.hook";
import { useGetFieldOfStudyDetails } from "../hooks/useGetFieldOfStudyDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/basic?tab=fields-of-study&subTab=overview",
    },
    { label: "Field Of Study", href: "/dashboard/settings/system-values/basic?tab=fields-of-study&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditFieldOfStudy: React.FC<EditFieldOfStudyProps> = ({ fieldOfStudyId }) => {
    const { register, handleSubmit, errors, reset } = useFieldOfStudyForm();

    const { data: hardwareDetails } = useGetFieldOfStudyDetails(fieldOfStudyId) as any;
    const { mutate: editFieldOfStudy } = useEditFieldOfStudy();

    const onSubmit = useCallback(
        (data: FieldOfStudyPayload) => {
            editFieldOfStudy(
                { fieldOfStudyId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editFieldOfStudy, reset],
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
                <h1 className="mb-8 text-lg font-extrabold">Edit Field Of Study:</h1>
                <FieldOfStudyForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit Field Of Study"
                />
            </div>
        </form>
    );
};
