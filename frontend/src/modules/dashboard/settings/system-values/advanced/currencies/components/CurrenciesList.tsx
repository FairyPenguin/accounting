import Link from "next/link";
import { ICurrency } from "../types";
import IconEdit from "@/shared/components/icon/icon-edit";
import { DEFAULT_CURRENCIES_PAGE_SIZE } from "../constants";
import IconTrash from "@/shared/components/icon/icon-trash";
import { useDeleteCurrency } from "../hooks/useDeleteCurrency.hook";
import { useGetAllCurrencies } from "../hooks/useGetAllCurrencies.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { useRouter } from "next/navigation";
import TableV2 from "@/shared/components/TableV2";

export const CurrenciesList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_CURRENCIES_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { mutate: deleteCurrency } = useDeleteCurrency();
    const { data: currencyData } = useGetAllCurrencies(queryParams) as any;

    // const handleDeleteCurrency = (currencyId: string) => {
    //     deleteCurrency(currencyId);
    // };

    const handleEditCurrency = (id: string) => {
        router.push(`/dashboard/settings/system-values/advanced/currencies/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: Partial<ICurrency>) => <div className="max-w-xs text-gray-700">{name}</div>,
        },
        {
            accessor: "symbol",
            title: "Symbol",
            sortable: true,
            render: ({ symbol }: Partial<ICurrency>) => (
                <div className="max-w-xs text-center text-gray-700">{String(symbol)}</div>
            ),
        },

        {
            accessor: "ISOCode",
            title: "ISO Code",
            sortable: true,
            render: ({ ISOCode }: Partial<ICurrency>) => (
                <div className="max-w-xs text-center text-gray-700">{String(ISOCode)}</div>
            ),
        },
        {
            accessor: "default",
            title: "default",
            sortable: true,
            render: ({ default: isDefault }: Partial<ICurrency>) => (
                <div className="max-w-xs text-center text-gray-700">{String(isDefault)}</div>
            ),
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                // <div className="flex justify-center gap-5">
                //     <Link href={`/dashboard/settings/system-values/advanced/currencies/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteCurrency(String(id))}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditCurrency(id)}
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
            endpoint={"currencies"}
            tableTitle="All Currencies"
            searchBy="Search by currency name...."
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/advanced/currencies/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("currencies", "/dashboard/currencies")}
            createNewItemButtonText={"Add New Currency"}
        />

    );
};
