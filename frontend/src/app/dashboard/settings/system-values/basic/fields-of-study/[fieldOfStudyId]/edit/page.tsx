"use client";

import { EditFieldOfStudy } from "@/modules/dashboard/settings/system-values/basic/field-of-study/components/EditFieldOfStudy";
import { EditFieldOfStudyPageProps } from "@/modules/dashboard/settings/system-values/basic/field-of-study/interfaces";

const EditFieldOfStudyPage: React.FC<EditFieldOfStudyPageProps> = ({ params: { fieldOfStudyId } }) => {
    return <EditFieldOfStudy fieldOfStudyId={String(fieldOfStudyId)} />;
};

export default EditFieldOfStudyPage;
