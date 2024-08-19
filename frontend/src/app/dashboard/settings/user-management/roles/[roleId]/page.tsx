"use client";

import { RoleDetails } from "@/modules/dashboard/settings/user-management/roles/components/RoleDetails";
import { RoleDetailsPageProps } from "@/modules/dashboard/settings/user-management/roles/interfaces";

const RoleDetailsPage: React.FC<RoleDetailsPageProps> = ({ params: { roleId } }) => {
    return <RoleDetails roleId={String(roleId)} />;
};

export default RoleDetailsPage;
