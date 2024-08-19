import { useCallback } from "react";
import { HardwareForm } from "./HardwareForm";
import { useHardwareForm } from "../hooks/useHardwareForm";
import { HardwarePayload } from "../types/addHardware.type";
import { useAddHardware } from "../hooks/useAddHardware.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=hardwares&subTab=overview" },
    { label: "Hardwares", href: "/dashboard/settings/system-values/basic?tab=hardwares&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddHardware: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useHardwareForm();

    const { mutate: addHardware } = useAddHardware();

    const onSubmit = useCallback(
        (data: HardwarePayload) => {
            addHardware(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addHardware, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Hardware:</h1>
                <HardwareForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Hardware"
                />
            </div>
        </form>
    );
};
