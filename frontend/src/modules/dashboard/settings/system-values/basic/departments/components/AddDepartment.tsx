import { useCallback } from "react";
import { DepartmentForm } from "./DepartmentForm";
import { useDepartmentForm } from "../hooks/useDepartmentForm";
import { DepartmentPayload } from "../types/addDepartment.type";
import { useAddDepartment } from "../hooks/useAddDepartment.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=departments&subTab=overview" },
    { label: "Departments", href: "/dashboard/settings/system-values/basic?tab=departments&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddDepartment: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useDepartmentForm();

    const { mutate: addDepartment } = useAddDepartment();

    const onSubmit = useCallback(
        (data: DepartmentPayload) => {
            addDepartment(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addDepartment, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Department:</h1>
                <DepartmentForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Department"
                />
            </div>
        </form>
    );
};
