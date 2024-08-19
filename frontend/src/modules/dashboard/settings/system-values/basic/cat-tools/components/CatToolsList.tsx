import Link from "next/link";
import { DEFAULT_CAT_TOOL_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useDeleteCATTool } from "../hooks/useDeleteCatTool.hook";
import { useGetAllCatTools } from "../hooks/useGetAllCatTools.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";

export const CatToolsList: React.FC = () => {
    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_CAT_TOOL_PAGE_SIZE,
        });

    const { mutate: deleteCatTool } = useDeleteCATTool();

    const { data: catToolsData } = useGetAllCatTools(queryParams) as any;

    const handleDeleteCATTool = (catToolId: string) => {
        deleteCatTool(catToolId);
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
                    <Link href={`/dashboard/settings/system-values/basic/cat-tools/${id}/edit`}>
                        <IconEdit />
                    </Link>
                    <Link href="#" onClick={() => handleDeleteCATTool(id)}>
                        <IconTrash />
                    </Link>
                </div>
            ),
        },
    ];

    return (
        // <CustomDataTable
        //     title="All CAT Tools"
        //     data={catToolsData?.data?.data}
        //     columns={myColumns}
        //     defaultPageSize={DEFAULT_CAT_TOOL_PAGE_SIZE}
        //     pageSizeOptions={[3, 5, 7, 10, 15, 20]}
        //     newResourceLabel="New CAT Tool"
        //     newResourceLink="/dashboard/settings/system-values/basic/cat-tools/new"
        //     onPageChange={handlePageChange}
        //     onPageSizeChange={handlePageSizeChange}
        //     onSearch={(searchQuery) => handleSearch(searchQuery, "name")}
        //     onSort={handleSort}
        //     totalCount={catToolsData?.data?.totalCount}
        //     searchPlaceholder="Search by name"
        // />
        <h1>Table Needs Update</h1>

    );
};
