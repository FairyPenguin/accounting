import Link from "next/link";
import { DEFAULT_SERVICES_PAGE_SIZE } from "../constants";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import { useDeleteService } from "../hooks/useDeleteService.hook";
import { useGetAllServices } from "../hooks/useGetAllServices.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";

export const ServicesList: React.FC = () => {
    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_SERVICES_PAGE_SIZE,
        });

    const { mutate: deleteService } = useDeleteService();
    const { data: servicesData } = useGetAllServices(queryParams) as any;

    const handleDeleteService = (serviceId: string) => {
        deleteService(serviceId);
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
                    <Link href={`/dashboard/settings/system-values/basic/Services/${id}/edit`}>
                        <IconEdit />
                    </Link>
                    <Link href="#" onClick={() => handleDeleteService(id)}>
                        <IconTrash />
                    </Link>
                </div>
            ),
        },
    ];

    return (
        // <CustomDataTable
        //     title="All Services"
        //     data={servicesData?.data?.data}
        //     columns={myColumns}
        //     defaultPageSize={DEFAULT_SERVICES_PAGE_SIZE}
        //     pageSizeOptions={[3, 5, 7, 10, 15, 20]}
        //     newResourceLabel="New Service"
        //     newResourceLink="/dashboard/settings/system-values/basic/Services/new"
        //     onPageChange={handlePageChange}
        //     onPageSizeChange={handlePageSizeChange}
        //     onSearch={(searchQuery) => handleSearch(searchQuery, "name")}
        //     onSort={handleSort}
        //     totalCount={servicesData?.data?.totalCount}
        //     searchPlaceholder="Search by name"
        // />
        <h1>Table Needs Update</h1>

    );
};
