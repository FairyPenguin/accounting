import Link from "next/link";
import { DEFAULT_SPECIALIZATION_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useDeleteSpecialization } from "../hooks/useDeleteSpecialization.hook";
import { useGetAllSpecializations } from "../hooks/useGetAllSpecializations.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useRouter } from "next/navigation";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const SpecializationsList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_SPECIALIZATION_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    // const { mutate: deleteSpecialization } = useDeleteSpecialization();
    // const { data: hardwareData } = useGetAllSpecializations(queryParams) as any;

    // const handleDeleteSpecialization = (specializationId: string) => {
    //     deleteSpecialization(specializationId);
    // };

    const handleEditSpecialization = (id: string) => {
        router.push(`/dashboard/settings/system-values/basic/specializations/${id}/edit`);
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
                //     <Link href={`/dashboard/settings/system-values/basic/specializations/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteSpecialization(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>
                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditSpecialization(id)}
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
            tableTitle="All Specializations"
            searchBy="Search by name"
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/basic/specializations/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("lookups", "/dashboard/specialization")}
            createNewItemButtonText={"Add New Specialization"}
            lookupType={"specialization"}
        />
    );
};
