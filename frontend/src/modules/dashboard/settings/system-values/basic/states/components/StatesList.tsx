import Link from "next/link";
import { DEFAULT_STATE_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useDeleteState } from "../hooks/useDeleteState.hook";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useGetAllStates } from "../hooks/useGetAllStates.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useRouter } from "next/navigation";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const StatesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_STATE_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    // const { mutate: deleteState } = useDeleteState();
    // const { data: statesData } = useGetAllStates(queryParams) as any;

    // const handleDeleteState = (stateId: string) => {
    //     deleteState(stateId);
    // };

    const handleEditStates = (id: string) => {
        router.push(`/dashboard/settings/system-values/basic/states/${id}/edit`);
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
                //     <Link href={`/dashboard/settings/system-values/basic/states/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteState(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditStates(id)}
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
            tableTitle="All States"
            searchBy="Search by name"
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/basic/states/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("lookups", "/dashboard/states")}
            createNewItemButtonText={"Add New State"}
            lookupType={"state"}
        />
    );
};
