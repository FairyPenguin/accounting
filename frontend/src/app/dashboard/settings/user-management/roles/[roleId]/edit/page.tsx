"use client";

import { EditRole } from "@/modules/dashboard/settings/user-management/roles/components/EditRole";
import { EditRolePageProps } from "@/modules/dashboard/settings/user-management/roles/interfaces";

const EditRolePage: React.FC<EditRolePageProps> = ({ params: { roleId } }) => {
    return <EditRole roleId={String(roleId)} />;
};

export default EditRolePage;
