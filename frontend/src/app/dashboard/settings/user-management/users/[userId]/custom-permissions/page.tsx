"use client";

import { AssignCustomPermissionsToUser } from "@/modules/dashboard/settings/user-management/users/components/AssignCustomPermissionsToUser";
import { AssignCustomPermissionsToUserPageProps } from "@/modules/dashboard/settings/user-management/users/interfaces";

const AssignCustomPermissionsToUserPage: React.FC<AssignCustomPermissionsToUserPageProps> = ({
    params: { userId },
}) => {
    return <AssignCustomPermissionsToUser userId={String(userId)} />;
};

export default AssignCustomPermissionsToUserPage;
