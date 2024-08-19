import Link from "next/link";
import Image from "next/image";
import { DEFAULT_USERS_PAGE_SIZE } from "../constants";
import IconView from "@/shared/components/icon/icon-view";
import IconEdit from "@/shared/components/icon/icon-edit";
import { useDeleteUser } from "../hooks/useDeleteUser.hook";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useGetAllUsers } from "../hooks/useGetAllUsers.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { IconCog } from "@/shared/components/icon/icon-cog";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";
import { useRouter } from "next/navigation";

export const UsersList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_USERS_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { data: usersData } = useGetAllUsers(queryParams) as any;

    const { mutate: deleteUser } = useDeleteUser();

    // const handleDeleteUser = (userId: string) => {
    //     deleteUser(userId);
    // };

    const handleEditUser = (id: string) => {
        router.push(`/dashboard/settings/user-management/users/${id}/edit`);
    };

    const handleViewUser = (id: string) => {
        router.push(`/dashboard/settings/user-management/users/${id}`)
    }

    const handleCustomPermission = (id: string) => {
        router.push(`/dashboard/settings/user-management/users/${id}/custom-permissions`)
    }

    const myColumns = [
        {
            accessor: "firstName",
            title: "Full Name",
            sortable: true,
            render: ({ firstName, lastName, id }: any) => (
                <div className="flex w-max items-center">
                    <Image
                        src={`/assets/images/profile-${id}.jpeg`}
                        alt={`${firstName} ${lastName}`}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                    />

                    <div
                        style={{
                            marginLeft: "10px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <span>{firstName + " " + lastName}</span> <span>@username</span>
                    </div>
                </div>
            ),
        },
        {
            accessor: "email",
            title: "Email",
            sortable: true,
            render: ({ email }: any) => <div>{email}</div>,
        },
        {
            accessor: "gender",
            title: "Gender",
            sortable: true,
            render: ({ gender }: any) => <div>{gender || "-"}</div>,
        },
        {
            accessor: "phone",
            title: "Phone",
            sortable: true,
            render: ({ phone }: any) => <div className="">{phone || "-"}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                // <div className="flex justify-around gap-4">
                //     <Link href={`/dashboard/settings/user-management/users/${id}`}>
                //         <IconView />
                //     </Link>

                //     <Link href={`/dashboard/settings/user-management/users/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href={`/dashboard/settings/user-management/users/${id}/custom-permissions`}>
                //         <IconCog />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteUser(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleViewUser(id)}
                        type="button"
                        aria-label="View User"
                    >
                        <IconView />
                    </button>

                    <button
                        onClick={() => handleEditUser(id)}
                        type="button"
                        aria-label="Edit User"
                    >
                        <IconEdit />
                    </button>

                    <button
                        onClick={() => handleCustomPermission(id)}
                        type="button"
                        aria-label="Custom Permission"
                    >
                        <IconCog />
                    </button>

                    <button
                        onClick={() => {
                            handleTableDeleteActionButton(uuid);
                            openModalHandler();
                        }}
                        type="button"
                        aria-label="Delete USer"
                    >
                        <IconTrash />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <TableV2
            columns={myColumns}
            endpoint={"users"}
            tableTitle="Users List"
            searchBy="Search by user name...."
            searchByKey="name"
            newResourceLink="/dashboard/settings/user-management/users/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("users", "/dashboard/users")}
            createNewItemButtonText={"Add New User"}
        />

    );
};
