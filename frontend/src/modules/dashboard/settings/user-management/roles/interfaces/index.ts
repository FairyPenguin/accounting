interface WithRoleId {
    roleId: string;
}

export interface EditRoleProps extends WithRoleId {}

export interface EditRolePageProps {
    params: EditRoleProps;
}

export interface RoleDetailsProps extends WithRoleId {}

export interface RoleDetailsPageProps {
    params: RoleDetailsProps;
}
