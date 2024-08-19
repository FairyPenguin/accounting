"use client";

import { EditSoftware } from "@/modules/dashboard/settings/system-values/basic/softwares/components/EditSoftware";
import { EditSoftwarePageProps } from "@/modules/dashboard/settings/system-values/basic/softwares/interfaces";

const EditSoftwarePage: React.FC<EditSoftwarePageProps> = ({ params: { softwareId } }) => {
    return <EditSoftware softwareId={String(softwareId)} />;
};

export default EditSoftwarePage;
