import Link from "next/link";
import { IPaymentMethod } from "../types";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import { DEFAULT_PAYMENT_METHODS_PAGE_SIZE } from "../constants";
import { useDeletePaymentMethod } from "../hooks/useDeletePaymentMethod.hook";
import { useGetAllPaymentMethods } from "../hooks/useGetAllPaymentMethods.hook";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useCustomDataTableHandlersHook } from "@/shared/components/CustomTable/hooks/useCustomDataTableHandlersHook.hook";

export const PaymentMethodsList: React.FC = () => {
    const { queryParams, handlePageChange, handlePageSizeChange, handleSearch, handleSort } =
        useCustomDataTableHandlersHook({
            defaultPageSize: DEFAULT_PAYMENT_METHODS_PAGE_SIZE,
        });

    const { mutate: deletePaymentMethod } = useDeletePaymentMethod();
    const { data: paymentMethodsData } = useGetAllPaymentMethods(queryParams) as any;

    const handleDeletePaymentMethod = (paymentMethodId: string) => {
        deletePaymentMethod(paymentMethodId);
    };

    const myColumns = [
        {
            accessor: "name",
            title: "Name",
            sortable: true,
            render: ({ name }: Partial<IPaymentMethod>) => <div className="max-w-xs text-gray-700">{name}</div>,
        },

        {
            accessor: "paymentType",
            title: "Payment Type",
            sortable: true,
            render: ({ paymentType }: Partial<IPaymentMethod>) => (
                <div className="max-w-xs text-center text-gray-700">{String(paymentType)}</div>
            ),
        },
        {
            accessor: "IBAN",
            title: "IBAN",
            sortable: true,
            render: ({ IBAN }: Partial<IPaymentMethod>) => (
                <div className="max-w-xs text-center text-gray-700">{String(IBAN)}</div>
            ),
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id }: Partial<IPaymentMethod>) => (
                <div className="flex justify-center gap-5">
                    <Link href={`/dashboard/settings/system-values/advanced/payment-methods/${id}/edit`}>
                        <IconEdit />
                    </Link>
                    <Link href="#" onClick={() => handleDeletePaymentMethod(String(id))}>
                        <IconTrash />
                    </Link>
                </div>
            ),
        },
    ];

    return (
        // <CustomDataTable
        //     title="All Payment Methods"
        //     data={paymentMethodsData?.data?.data}
        //     columns={myColumns}
        //     defaultPageSize={DEFAULT_PAYMENT_METHODS_PAGE_SIZE}
        //     pageSizeOptions={[3, 5, 7, 10, 15, 20]}
        //     newResourceLabel="New Payment Method"
        //     newResourceLink="/dashboard/settings/system-values/advanced/payment-methods/new"
        //     onPageChange={handlePageChange}
        //     onPageSizeChange={handlePageSizeChange}
        //     onSearch={(searchQuery) => handleSearch(searchQuery, "paymentType")}
        //     onSort={handleSort}
        //     totalCount={paymentMethodsData?.data?.totalCount}
        //     searchPlaceholder="Search by payment type"
        // />
        <h1>Table Needs Update</h1>

    );
};
