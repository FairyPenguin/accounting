import { useCallback, useEffect } from "react";
import { DepartmentForm } from "./DepartmentForm";
import { EditDepartmentProps } from "../interfaces";
import { useDepartmentForm } from "../hooks/useDepartmentForm";
import { DepartmentPayload } from "../types/addDepartment.type";
import { useEditDepartment } from "../hooks/useEditDepartment.hook";
import { useGetDepartmentDetails } from "../hooks/useGetDepartmentDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=departments&subTab=overview" },
    { label: "Departments", href: "/dashboard/settings/system-values/basic?tab=departments&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditDepartment: React.FC<EditDepartmentProps> = ({ departmentId }) => {
    const { register, handleSubmit, errors, reset } = useDepartmentForm();

    const { data: hardwareDetails } = useGetDepartmentDetails(departmentId) as any;
    const { mutate: editDepartment } = useEditDepartment();

    const onSubmit = useCallback(
        (data: DepartmentPayload) => {
            editDepartment(
                { departmentId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editDepartment, reset],
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
                <h1 className="mb-8 text-lg font-extrabold">Edit Department:</h1>
                <DepartmentForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit Department"
                />
            </div>
        </form>
    );
};
