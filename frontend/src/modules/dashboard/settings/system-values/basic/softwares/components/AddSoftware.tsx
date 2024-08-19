import { useCallback } from "react";
import { SoftwareForm } from "./SoftwareForm";
import { useSoftwareForm } from "../hooks/useSoftwareForm";
import { SoftwarePayload } from "../types/addSoftware.type";
import { useAddSoftware } from "../hooks/useAddSoftware.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=softwares&subTab=overview" },
    { label: "Softwares", href: "/dashboard/settings/system-values/basic?tab=softwares&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddSoftware: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useSoftwareForm();

    const { mutate: addSoftware } = useAddSoftware();

    const onSubmit = useCallback(
        (data: SoftwarePayload) => {
            addSoftware(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addSoftware, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Software:</h1>
                <SoftwareForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Software"
                />
            </div>
        </form>
    );
};
