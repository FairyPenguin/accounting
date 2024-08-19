"use client";

import { EditService } from "@/modules/dashboard/settings/system-values/basic/services/components/EditService";
import { EditServicePageProps } from "@/modules/dashboard/settings/system-values/basic/services/interfaces";

const EditServicePage: React.FC<EditServicePageProps> = ({ params: { serviceId } }) => {
    return <EditService serviceId={String(serviceId)} />;
};

export default EditServicePage;
