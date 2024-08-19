"use client";

import { EditDepartment } from "@/modules/dashboard/settings/system-values/basic/departments/components/EditDepartment";
import { EditDepartmentPageProps } from "@/modules/dashboard/settings/system-values/basic/departments/interfaces";

const EditDepartmentPage: React.FC<EditDepartmentPageProps> = ({ params: { departmentId } }) => {
    return <EditDepartment departmentId={String(departmentId)} />;
};

export default EditDepartmentPage;
