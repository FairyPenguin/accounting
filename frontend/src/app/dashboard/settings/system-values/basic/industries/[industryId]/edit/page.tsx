"use client";

import { EditIndustry } from "@/modules/dashboard/settings/system-values/basic/industries/components/EditIndustry";
import { EditIndustryPageProps } from "@/modules/dashboard/settings/system-values/basic/industries/interfaces";

const EditIndustryPage: React.FC<EditIndustryPageProps> = ({ params: { industryId } }) => {
    return <EditIndustry industryId={String(industryId)} />;
};

export default EditIndustryPage;
