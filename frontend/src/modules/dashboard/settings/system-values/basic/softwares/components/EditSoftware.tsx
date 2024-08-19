import { SoftwareForm } from "./SoftwareForm";
import { useCallback, useEffect } from "react";
import { EditSoftwareProps } from "../interfaces";
import { useSoftwareForm } from "../hooks/useSoftwareForm";
import { SoftwarePayload } from "../types/addSoftware.type";
import { useEditSoftware } from "../hooks/useEditSoftware.hook";
import { useGetSoftwareDetails } from "../hooks/useGetSoftwareDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=softwares&subTab=overview" },
    { label: "Softwares", href: "/dashboard/settings/system-values/basic?tab=softwares&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditSoftware: React.FC<EditSoftwareProps> = ({ softwareId }) => {
    const { register, handleSubmit, errors, reset } = useSoftwareForm();

    const { data: SoftwareDetails } = useGetSoftwareDetails(softwareId) as any;
    const { mutate: editSoftware } = useEditSoftware();

    const onSubmit = useCallback(
        (data: SoftwarePayload) => {
            editSoftware(
                { softwareId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editSoftware, reset],
    );

    useEffect(() => {
        if (SoftwareDetails) {
            reset(SoftwareDetails?.data?.data);
        }
    }, [SoftwareDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Software:</h1>
                <SoftwareForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={SoftwareDetails?.data?.data}
                    submitButtonLabel="Edit Software"
                />
            </div>
        </form>
    );
};
