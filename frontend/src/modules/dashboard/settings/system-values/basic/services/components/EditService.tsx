import { ServiceForm } from "./ServiceForm";
import { useCallback, useEffect } from "react";
import { EditServiceProps } from "../interfaces";
import { useServiceForm } from "../hooks/useServiceForm";
import { ServicePayload } from "../types/addService.type";
import { useEditService } from "../hooks/useEditService.hook";
import { useGetServiceDetails } from "../hooks/useGetServiceDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=services&subTab=overview" },
    { label: "Services", href: "/dashboard/settings/system-values/basic?tab=services&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditService: React.FC<EditServiceProps> = ({ serviceId }) => {
    const { register, handleSubmit, errors, reset } = useServiceForm();

    const { data: serviceDetails } = useGetServiceDetails(serviceId) as any;
    const { mutate: editService } = useEditService();

    const onSubmit = useCallback(
        (data: ServicePayload) => {
            editService(
                { serviceId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editService, reset],
    );

    useEffect(() => {
        if (serviceDetails) {
            reset(serviceDetails?.data?.data);
        }
    }, [serviceDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Service:</h1>
                <ServiceForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={serviceDetails?.data?.data}
                    submitButtonLabel="Edit Service"
                />
            </div>
        </form>
    );
};
