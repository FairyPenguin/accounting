interface WithDepartmentId {
    departmentId: string;
}

export interface EditDepartmentProps extends WithDepartmentId {}
export interface EditDepartmentPageProps {
    params: EditDepartmentProps;
}
