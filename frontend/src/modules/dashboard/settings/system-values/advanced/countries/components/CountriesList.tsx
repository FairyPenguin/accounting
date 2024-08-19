import Link from "next/link";
import { ICountry } from "../types";
import IconEdit from "@/shared/components/icon/icon-edit";
import { DEFAULT_COUNTRIES_PAGE_SIZE } from "../constants";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useDeleteCountry } from "../hooks/useDeleteCountry.hook";
import { useGetAllCountries } from "../hooks/useGetAllCountries.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import { useRouter } from "next/navigation";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import TableV2 from "@/shared/components/TableV2";

export const CountriesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_COUNTRIES_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    // const { mutate: deleteCountry } = useDeleteCountry();
    // const { data: languageData } = useGetAllCountries(queryParams) as any;

    // const handleDeleteCountry = (countryId: string) => {
    //     deleteCountry(countryId);
    // };

    const handleEditCountry = (id: string) => {
        router.push(`/dashboard/settings/system-values/advanced/countries/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: Partial<ICountry>) => <div className="max-w-xs text-gray-700">{name}</div>,
        },

        // {
        //     accessor: "symbol",
        //     title: "Symbol",
        //     sortable: true,
        //     render: ({ symbol }: Partial<ICountry>) => (
        //         <div className="max-w-xs text-center text-gray-700">{String(symbol)}</div>
        //     ),
        // },
        {
            accessor: "default",
            title: "default",
            sortable: true,
            render: ({ default: isDefault }: Partial<ICountry>) => (
                <div className="max-w-xs text-center text-gray-700">{String(isDefault)}</div>
            ),
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                // <div className="flex justify-center gap-5">
                //     <Link href={`/dashboard/settings/system-values/advanced/countries/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteCountry(String(id))}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditCountry(id)}
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
            tableTitle="All Countries"
            searchBy="Search by Country name"
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/advanced/countries/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("lookups", "/dashboard/countries")}
            createNewItemButtonText={"Add New Country"}
            lookupType={"country"}
        />

    );
};
