import { UserForm } from "./UserForm";
import { useCallback, useEffect } from "react";
import { UserDetailsProps } from "../interfaces";
import { useEditUser } from "../hooks/useEditUser.hook";
import { useGetUserDetails } from "../hooks/useGetUserDetails.hook";
import { UserFormPayload, useUserForm } from "../hooks/useUserForm.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

import { useGetUserRoleAndPermissions } from "../hooks/useGetUserRoleAndPermissions.hook";

const breadcrumbItems = [
    {
        label: "User Management",
        href: "/dashboard/settings/user-management?tab=overview&subTab=overview-&-analytics",
    },
    { label: "Users", href: "/dashboard/settings/user-management?tab=users&subTab=all-users" },
    { label: "Edit", href: "#" },
];

export const EditUser: React.FC<UserDetailsProps> = ({ userId }) => {
    const { register, handleSubmit, errors, reset } = useUserForm();

    const { data: userDetails } = useGetUserDetails(userId) as any;
    const { data: userRoleAndPermissions } = useGetUserRoleAndPermissions(userId) as any;

    const values = { ...userDetails?.data.data, role: userRoleAndPermissions?.data?.data?.role?.name };

    const { mutate: editUser } = useEditUser();

    const onSubmit = useCallback(
        (data: UserFormPayload) => {
            editUser(
                { userId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                    onError: (error) => {
                        console.log(error);
                    },
                },
            );
        },
        [editUser, reset],
    );

    useEffect(() => {
        if (userDetails && userRoleAndPermissions) {
            const formValues = values;
            reset(formValues);
        }
    }, [userDetails, userRoleAndPermissions, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit User:</h1>
                <UserForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={values}
                    submitButtonLabel="Edit User"
                />
            </div>
        </form>
    );
};
