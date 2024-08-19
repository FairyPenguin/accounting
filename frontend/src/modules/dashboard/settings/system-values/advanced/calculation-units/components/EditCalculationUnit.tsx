import { useCallback, useEffect } from "react";
import { EditCalculationUnitProps } from "../interfaces";
import { CalculationUnitsForm } from "./CalculationUnitForm";
import { useCalculationUnitForm } from "../hooks/useCalculationUnitForm";
import { CalculationUnitPayload } from "../types/addCalculationUnit.type";
import { useEditCalculationUnit } from "../hooks/useEditCalculationUnit.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { useGetCalculationUnitDetails } from "../hooks/useGetCalculationUnitDetails.hook";

const breadcrumbItems = [
    {
        label: "System Values (Basic)",
        href: "/dashboard/settings/system-values/advanced?tab=calculation-units&subTab=overview",
    },
    {
        label: "Calculation Units",
        href: "/dashboard/settings/system-values/advanced?tab=calculation-units&subTab=overview",
    },
    { label: "Edit", href: "#" },
];

export const EditCalculationUnit: React.FC<EditCalculationUnitProps> = ({ calculationUnitId }) => {
    const { register, handleSubmit, errors, reset } = useCalculationUnitForm();

    const { data: hardwareDetails } = useGetCalculationUnitDetails(calculationUnitId) as any;
    const { mutate: editCalculationUnits } = useEditCalculationUnit();

    const onSubmit = useCallback(
        (data: CalculationUnitPayload) => {
            editCalculationUnits(
                { calculationUnitId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editCalculationUnits, reset],
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
                <h1 className="mb-8 text-lg font-extrabold">Edit CalculationUnits:</h1>
                <CalculationUnitsForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={hardwareDetails?.data?.data}
                    submitButtonLabel="Edit CalculationUnits"
                />
            </div>
        </form>
    );
};
