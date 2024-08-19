import Link from "next/link";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { DEFAULT_FIELDS_OF_STUDY_PAGE_SIZE } from "../constants";
import { useDeleteFieldOfStudy } from "../hooks/useDeleteFieldOfStudy.hook";
import { useGetAllFieldsOfStudy } from "../hooks/useGetAllFieldsOfStudies.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useRouter } from "next/navigation";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const FieldsOfStudyList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_FIELDS_OF_STUDY_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    // const { mutate: deleteFieldOfStudy } = useDeleteFieldOfStudy();
    // const { data: hardwareData } = useGetAllFieldsOfStudy(queryParams) as any;

    // const handleDeleteFieldOfStudy = (fieldOfStudyId: string) => {
    //     deleteFieldOfStudy(fieldOfStudyId);
    // };

    const handleEditFieldOfStudy = (id: string) => {
        router.push(`/dashboard/settings/system-values/basic/fields-of-study/${id}/edit`);
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
                //     <Link href={`/dashboard/settings/system-values/basic/fields-of-study/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteFieldOfStudy(id)}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditFieldOfStudy(id)}
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
            tableTitle="All Fields Of Study"
            searchBy="Search by name"
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/basic/fields-of-study/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("lookups", "/dashboard/fieldOfStudies")}
            createNewItemButtonText={"Add New Field of Study"}
            lookupType={"fields_study"}
        />
    );
};
