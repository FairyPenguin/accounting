"use client";

import { EditSpecialization } from "@/modules/dashboard/settings/system-values/basic/specializations/components/EditSpecialization";
import { EditSpecializationPageProps } from "@/modules/dashboard/settings/system-values/basic/specializations/interfaces";

const EditSpecializationPage: React.FC<EditSpecializationPageProps> = ({ params: { specializationId } }) => {
    return <EditSpecialization specializationId={String(specializationId)} />;
};

export default EditSpecializationPage;
