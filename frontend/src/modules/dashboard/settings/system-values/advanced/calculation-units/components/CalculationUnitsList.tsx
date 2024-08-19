import Link from "next/link";
import { ICalculationUnits } from "../types";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { DEFAULT_CALCULATION_UNITS_PAGE_SIZE } from "../constants";
import { useDeleteCalculationUnit } from "../hooks/useDeleteCalculationUnit.hook";
import { useGetAllCalculationUnits } from "../hooks/useGetAllCalculationUnits.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { useRouter } from "next/navigation";
import TableV2 from "@/shared/components/TableV2";

export const CalculationUnitsList: React.FC = () => {
    const router = useRouter();

    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_CALCULATION_UNITS_PAGE_SIZE,
        });

    const { openModal, setOpenModal, UUID, openModalHandler, handleTableDeleteActionButton, handleModalDeleteButtton } =
        useDeleteConfirmModalWithTableHook();

    const { mutate: deleteCalculationUnits } = useDeleteCalculationUnit();
    const { data: calculationUnitsData } = useGetAllCalculationUnits(queryParams) as any;

    // const handleDeleteCalculationUnits = (calculationUnitId: string) => {
    //     deleteCalculationUnits(calculationUnitId);
    // };

    const handleEditUnitList = (id: string) => {
        router.push(`/dashboard/settings/system-values/advanced/calculation-units/${id}/edit`);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: Partial<ICalculationUnits>) => <div className="max-w-xs text-gray-700">{name}</div>,
        },

        {
            accessor: "symbol",
            title: "Symbol",
            sortable: true,
            render: ({ symbol }: Partial<ICalculationUnits>) => (
                <div className="max-w-xs text-center text-gray-700">{String(symbol)}</div>
            ),
        },
        {
            accessor: "exchangeRatio",
            title: "Exchange Ratio",
            sortable: true,
            render: ({ exchangeRatio }: Partial<ICalculationUnits>) => (
                <div className="max-w-xs text-center text-gray-700">{String(exchangeRatio)}</div>
            ),
        },
        {
            accessor: "default",
            title: "default",
            sortable: true,
            render: ({ default: isDefault }: Partial<ICalculationUnits>) => (
                <div className="max-w-xs text-center text-gray-700">{String(isDefault)}</div>
            ),
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                // <div className="flex justify-center gap-5">
                //     <Link href={`/dashboard/settings/system-values/advanced/calculation-units/${id}/edit`}>
                //         <IconEdit />
                //     </Link>
                //     <Link href="#" onClick={() => handleDeleteCalculationUnits(String(id))}>
                //         <IconTrash />
                //     </Link>
                // </div>

                <div className="flex max-w-4 justify-around gap-2">
                    <button
                        onClick={() => handleEditUnitList(id)}
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
            endpoint={"calculation-unit"}
            tableTitle="All CalculationUnits"
            searchBy="Search by CalculationUnits name...."
            searchByKey="name"
            newResourceLink="/dashboard/settings/system-values/advanced/calculation-units/new"
            UUID={UUID}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleModalDeleteButttonFunc={() => handleModalDeleteButtton("calculation-unit", "/dashboard/calculation-unit")}
            createNewItemButtonText={"Add New calculation unit"}
        />

    );
};
