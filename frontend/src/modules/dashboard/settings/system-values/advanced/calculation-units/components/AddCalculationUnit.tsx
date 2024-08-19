import { useCallback } from "react";
import { CalculationUnitsForm } from "./CalculationUnitForm";
import { useCalculationUnitForm } from "../hooks/useCalculationUnitForm";
import { CalculationUnitPayload } from "../types/addCalculationUnit.type";
import { useAddCalculationUnit } from "../hooks/useAddCalculationUnit.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=calculation-units&subTab=overview",
    },
    {
        label: "Calculation Units",
        href: "/dashboard/settings/system-values/advanced?tab=calculation-units&subTab=overview",
    },
    { label: "Create", href: "#" },
];

export const AddCalculationUnit: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useCalculationUnitForm();

    const { mutate: addCalculationUnits } = useAddCalculationUnit();

    const onSubmit = useCallback(
        (data: CalculationUnitPayload) => {
            addCalculationUnits(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addCalculationUnits, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Calculation Unit:</h1>
                <CalculationUnitsForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Calculation Unit"
                />
            </div>
        </form>
    );
};
