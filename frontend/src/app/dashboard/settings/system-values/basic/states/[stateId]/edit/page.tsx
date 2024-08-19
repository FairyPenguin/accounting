"use client";

import { EditState } from "@/modules/dashboard/settings/system-values/basic/states/components/EditState";
import { EditStatePageProps } from "@/modules/dashboard/settings/system-values/basic/states/interfaces";

const EditStatePage: React.FC<EditStatePageProps> = ({ params: { stateId } }) => {
    return <EditState stateId={String(stateId)} />;
};

export default EditStatePage;
