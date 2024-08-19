import { HardwareForm } from "./HardwareForm";
import { useCallback, useEffect } from "react";
import { EditHardwareProps } from "../interfaces";
import { useHardwareForm } from "../hooks/useHardwareForm";
import { HardwarePayload } from "../types/addHardware.type";
import { useEditHardware } from "../hooks/useEditHardware.hook";
import { useGetHardwareDetails } from "../hooks/useGetHardwareDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=hardwares&subTab=overview" },
    { label: "Hardwares", href: "/dashboard/settings/system-values/basic?tab=hardwares&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditHardware: React.FC<EditHardwareProps> = ({ hardwareId }) => {
    const { register, handleSubmit, errors, reset } = useHardwareForm();

    const { data: hardwareDetails } = useGetHardwareDetails(hardwareId) as any;
    const { mutate: editHardware } = useEditHardware();

    const onSubmit = useCallback(
        (data: HardwarePayload) => {
            editHardware(
                { hardwareId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editHardware, reset],
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
                <h1 className="mb-8 text-lg font-extrabold">Edit Hardware:</h1>
                <HardwareForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit Hardware"
                />
            </div>
        </form>
    );
};
