import Link from "next/link";
import { DEFAULT_INDUSTRY_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useDeleteIndustry } from "../hooks/useDeleteIndustry.hook";
import { useGetAllIndustries } from "../hooks/useGetAllIndustries.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useRouter } from "next/navigation";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const IndustriesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_INDUSTRY_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    // const { mutate: deleteIndustry } = useDeleteIndustry();
    // const { data: industriesData } = useGetAllIndustries(queryParams) as any;

    // const handleDeleteIndustry = (hardwareId: string) => {
    //     deleteIndustry(hardwareId);
    // };

    const handleEditIndustry = (id: string) => {
        router.push(`/dashboard/settings/system-values/basic/industries/${id}/edit`);
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
                //     <Link href={`/dashboard/settings/system-values/basic/industries/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteIndustry(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditIndustry(id)}
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
            tableTitle="All Industries"
            searchBy="Search by name"
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/basic/industries/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("lookups", "/dashboard/industries")}
            createNewItemButtonText={"Add New Field of Industry"}
            lookupType={"industry"}
        />
    );
};
