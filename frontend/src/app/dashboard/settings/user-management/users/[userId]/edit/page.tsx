"use client";

import { EditUserPageProps } from "@/modules/dashboard/settings/user-management/users/interfaces";
import { EditUser } from "@/modules/dashboard/settings/user-management/users/components/EditUser";

const EditUserPage: React.FC<EditUserPageProps> = ({ params: { userId } }) => {
    return <EditUser userId={String(userId)} />;
};

export default EditUserPage;
