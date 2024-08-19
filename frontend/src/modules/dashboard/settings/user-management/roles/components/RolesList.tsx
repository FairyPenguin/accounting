import Link from "next/link";
import { DEFAULT_ROLES_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconView from "@/shared/components/icon/icon-view";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useGetAllRoles } from "../hooks/useGetAllRoles.hook";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useDeleteRole } from "../hooks/useDeleteRole.hook";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { useRouter } from "next/navigation";
import TableV2 from "@/shared/components/TableV2";

export const RolesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_ROLES_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { mutate: deleteRole } = useDeleteRole();

    const { data: rolesData } = useGetAllRoles(queryParams) as any;

    // const handleDeleteRole = (roleId: string) => {
    //     deleteRole(roleId);
    // };

    const handleEditRole = (id: string) => {
        router.push(`/dashboard/settings/user-management/roles/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: any) => <div className="max-w-xs text-gray-700">{name}</div>,
        },

        {
            accessor: "createdAt",
            title: "Created At",
            sortable: true,
            render: ({ createdAt }: any) => <div className="text-center text-gray-700">{formatDate(createdAt)}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                // <div className="flex justify-center gap-5">
                //     <Link href={`/dashboard/settings/user-management/roles/${id}`}>
                //         <IconView />
                //     </Link>
                //     <Link href={`/dashboard/settings/user-management/roles/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteRole(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditRole(id)}
                        type="button"
                        aria-label="Edit Role"
                    >
                        <IconEdit />
                    </button>
                    <button
                        onClick={() => {
                            handleTableDeleteActionButton(uuid);
                            openModalHandler();
                        }}
                        type="button"
                        aria-label="Delete Role"
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
            endpoint={"roles"}
            tableTitle="All Roles"
            searchBy="Search by role name...."
            searchByKey="name"
            newResourceLink="/dashboard/settings/user-management/roles/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("roles", "/dashboard/roles")}
            createNewItemButtonText={"Add New Role"}
        />
    );
};
