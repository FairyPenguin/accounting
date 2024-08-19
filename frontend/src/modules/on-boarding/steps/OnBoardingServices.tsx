import Link from "next/link";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { formatDate } from "@/shared/helpers/formatDate.helper";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";

export const OnBoardingServices = () => {
    return <div>Services</div>;
    // const handleDeleteService = (serviceId: string) => {};
    // const myColumns = [
    //     {
    //         accessor: "name",
    //         title: "Service",
    //         sortable: true,
    //         render: ({ name }: any) => <div className="max-w-xs text-gray-700">{name}</div>,
    //     },
    //     {
    //         accessor: "active",
    //         title: "Enabled",
    //         sortable: true,
    //         render: ({ active }: any) => <div className="max-w-xs text-center text-gray-700">{String(active)}</div>,
    //     },
    //     {
    //         accessor: "actions",
    //         title: "Actions",
    //         sortable: false,
    //         render: ({ id }: any) => (
    //             <div className="flex justify-center gap-5">
    //                 <Link href={`/dashboard/settings/system-values/basic/Services/${id}/edit`}>
    //                     <span>Enable</span>
    //                 </Link>
    //                 <Link href={`/dashboard/settings/system-values/basic/Services/${id}/edit`}>
    //                     <IconEdit />
    //                 </Link>
    //                 <Link href="#" onClick={() => handleDeleteService(id)}>
    //                     <IconTrash />
    //                 </Link>
    //             </div>
    //         ),
    //     },
    // ];
    // return (
    //     <div className="max-w-screen sm:mx-32">
    //         <CustomDataTable
    //             title="All Services"
    //             data={[{ name: " test", active: true }]}
    //             columns={myColumns}
    //             defaultPageSize={10}
    //             pageSizeOptions={[3, 5, 7, 10, 15, 20]}
    //             newResourceLabel="New Service"
    //             newResourceLink="/dashboard/settings/system-values/basic/Services/new"
    //             onPageChange={() => console.log()}
    //             onPageSizeChange={() => console.log()}
    //             onSearch={(searchQuery) => console.log()}
    //             onSort={() => console.log()}
    //             totalCount={20}
    //             searchPlaceholder="Search by name"
    //         />
    //     </div>
    // );
};
