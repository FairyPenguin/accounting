"use client";

import { EditHardwarePageProps } from "@/modules/dashboard/settings/system-values/basic/hardwares/interfaces";
import { EditHardware } from "@/modules/dashboard/settings/system-values/basic/hardwares/components/EditHardware";

const EditHardwarePage: React.FC<EditHardwarePageProps> = ({ params: { hardwareId } }) => {
    return <EditHardware hardwareId={String(hardwareId)} />;
};

export default EditHardwarePage;
