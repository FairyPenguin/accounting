import Link from "next/link";
import { DEFAULT_HARDWARE_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useDeleteHardware } from "../hooks/useDeleteHardware.hook";
import { useGetAllHardwares } from "../hooks/useGetAllHardwares.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";

export const HardwaresList: React.FC = () => {
    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_HARDWARE_PAGE_SIZE,
        });

    const { mutate: deleteHardware } = useDeleteHardware();
    const { data: hardwareData } = useGetAllHardwares(queryParams) as any;

    const handleDeleteHardware = (hardwareId: string) => {
        deleteHardware(hardwareId);
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
        {
            accessor: "preferredItem",
            title: "Preferred Item",
            sortable: true,
            render: ({ preferredItem }: any) => (
                <div className="max-w-xs text-center text-gray-700">{String(preferredItem)}</div>
            ),
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
            render: ({ id }: any) => (
                <div className="flex justify-center gap-5">
                    <Link href={`/dashboard/settings/system-values/basic/hardwares/${id}/edit`}>
                        <IconEdit />
                    </Link>
                    <Link href="#" onClick={() => handleDeleteHardware(id)}>
                        <IconTrash />
                    </Link>
                </div>
            ),
        },
    ];

    return (
        // <CustomDataTable
        //     title="All Hardwares"
        //     data={hardwareData?.data?.data}
        //     columns={myColumns}
        //     defaultPageSize={DEFAULT_HARDWARE_PAGE_SIZE}
        //     pageSizeOptions={[3, 5, 7, 10, 15, 20]}
        //     newResourceLabel="New Hardware"
        //     newResourceLink="/dashboard/settings/system-values/basic/hardwares/new"
        //     onPageChange={handlePageChange}
        //     onPageSizeChange={handlePageSizeChange}
        //     onSearch={(searchQuery) => handleSearch(searchQuery, "name")}
        //     onSort={handleSort}
        //     totalCount={hardwareData?.data?.totalCount}
        //     searchPlaceholder="Search by name"
        // />
        <h1>Table Needs Update</h1>

    );
};
