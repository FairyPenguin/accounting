import { useCallback } from "react";
import { ServiceForm } from "./ServiceForm";
import { useServiceForm } from "../hooks/useServiceForm";
import { ServicePayload } from "../types/addService.type";
import { useAddService } from "../hooks/useAddService.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=services&subTab=overview" },
    { label: "Services", href: "/dashboard/settings/system-values/basic?tab=services&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddService: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useServiceForm();

    const { mutate: addService } = useAddService();

    const onSubmit = useCallback(
        (data: ServicePayload) => {
            addService(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addService, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Service:</h1>
                <ServiceForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Service"
                />
            </div>
        </form>
    );
};
