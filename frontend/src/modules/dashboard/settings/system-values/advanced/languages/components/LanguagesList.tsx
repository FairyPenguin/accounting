import Link from "next/link";
import { ILanguage } from "../types";
import IconEdit from "@/shared/components/icon/icon-edit";
import { DEFAULT_LANGUAGES_PAGE_SIZE } from "../constants";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useDeleteLanguage } from "../hooks/useDeleteLanguage.hook";
import { useGetAllLanguages } from "../hooks/useGetAllLanguages.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { useRouter } from "next/navigation";
import TableV2 from "@/shared/components/TableV2";

export const LanguagesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_LANGUAGES_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { mutate: deleteLanguage } = useDeleteLanguage();
    const { data: languageData } = useGetAllLanguages(queryParams) as any;

    // const handleDeleteLanguage = (languageId: string) => {
    //     deleteLanguage(languageId);
    // };

    const handleEditLanguage = (id: string) => {
        router.push(`/dashboard/settings/system-values/advanced/languages/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: Partial<ILanguage>) => <div className="max-w-xs text-gray-700">{name}</div>,
        },

        {
            accessor: "symbol",
            title: "Symbol",
            sortable: true,
            render: ({ symbol }: Partial<ILanguage>) => (
                <div className="max-w-xs text-center text-gray-700">{String(symbol)}</div>
            ),
        },
        {
            accessor: "ISOCode2L",
            title: "ISO Code 2L",
            sortable: true,
            render: ({ ISOCode2L }: Partial<ILanguage>) => (
                <div className="max-w-xs text-center text-gray-700">{String(ISOCode2L)}</div>
            ),
        },
        {
            accessor: "ISOCode3L",
            title: "ISO Code 3L",
            sortable: true,
            render: ({ ISOCode3L }: Partial<ILanguage>) => (
                <div className="max-w-xs text-center text-gray-700">{String(ISOCode3L)}</div>
            ),
        },
        {
            accessor: "default",
            title: "default",
            sortable: true,
            render: ({ default: isDefault }: Partial<ILanguage>) => (
                <div className="max-w-xs text-center text-gray-700">{String(isDefault)}</div>
            ),
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                // <div className="flex justify-center gap-5">
                //     <Link href={`/dashboard/settings/system-values/advanced/languages/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteLanguage(String(id))}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                <button
                    onClick={() => handleEditLanguage(id)}
                    type="button"
                    aria-label="Edit Language"
                >
                    <IconEdit />
                </button>
                <button
                    onClick={() => {
                        handleTableDeleteActionButton(uuid);
                        openModalHandler();
                    }}
                    type="button"
                    aria-label="Delete Language"
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
            endpoint={"languages"}
            tableTitle="All Languages"
            searchBy="Search by language name...."
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/advanced/languages/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("languages", "/dashboard/languages")}
            createNewItemButtonText={"Add New Language"}
        />

    );
};
