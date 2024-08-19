"use client";

import { EditCalculationUnit } from "@/modules/dashboard/settings/system-values/advanced/calculation-units/components/EditCalculationUnit";
import { EditCalculationUnitPageProps } from "@/modules/dashboard/settings/system-values/advanced/calculation-units/interfaces";

const EditCalculationUnitPage: React.FC<EditCalculationUnitPageProps> = ({ params: { calculationUnitId } }) => {
    return <EditCalculationUnit calculationUnitId={String(calculationUnitId)} />;
};

export default EditCalculationUnitPage;
