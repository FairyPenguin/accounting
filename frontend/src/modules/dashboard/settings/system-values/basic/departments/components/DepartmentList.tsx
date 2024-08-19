import Link from "next/link";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { DEFAULT_DEPARTMENT_PAGE_SIZE } from "../constants";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useDeleteDepartment } from "../hooks/useDeleteDepartment.hook";
import { useGetAllDepartments } from "../hooks/useGetAllDepartments.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useRouter } from "next/navigation";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const DepartmentsList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_DEPARTMENT_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    // const { mutate: deleteDepartment } = useDeleteDepartment();
    // const { data: hardwareData } = useGetAllDepartments(queryParams) as any;

    // const handleDeleteDepartment = (departmentId: string) => {
    //     deleteDepartment(departmentId);
    // };

    const handleEditDepartment = (id: string) => {
        router.push(`/dashboard/settings/system-values/basic/departments/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: any) => <div className="max-w-xs text-gray-700">{name}</div>,
        },
        {
            accessor: "active",
            title: "Active",
            sortable: true,
            render: ({ active }: any) => <div className="max-w-xs text-center text-gray-700">{String(active)}</div>,
        },
        // {
        //     accessor: "preferredItem",
        //     title: "Preferred Item",
        //     sortable: true,
        //     render: ({ preferredItem }: any) => (
        //         <div className="max-w-xs text-center text-gray-700">{String(preferredItem)}</div>
        //     ),
        // },
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
                //     <Link href={`/dashboard/settings/system-values/basic/departments/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteDepartment(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditDepartment(id)}
                        type="button"
                        aria-label="Edit Country"
                    >
                        <IconEdit />
                    </button>
                    <button
                        onClick={() => {
                            handleTableDeleteActionButton(uuid);
                            openModalHandler();
                        }}
                        type="button"
                        aria-label="Delete Country"
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
            endpoint={"lookups"}
            tableTitle="All Departments"
            searchBy="Search by Departments name"
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/basic/departments/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("lookups", "/dashboard/departments")}
            createNewItemButtonText={"Add New Department"}
            lookupType={"department"}
        />
    );
};
