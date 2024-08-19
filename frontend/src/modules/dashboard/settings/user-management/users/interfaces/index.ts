interface WithUserId {
    userId: string;
}

export interface EditUserProps extends WithUserId {}
export interface EditUserPageProps {
    params: EditUserProps;
}

export interface UserDetailsProps extends WithUserId {}
export interface UserDetailsPageProps {
    params: UserDetailsProps;
}

export interface AssignCustomPermissionsToUserProps extends WithUserId {}
export interface AssignCustomPermissionsToUserPageProps {
    params: AssignCustomPermissionsToUserProps;
}
