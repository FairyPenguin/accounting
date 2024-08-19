"use client";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";

import IconTrash from "@/shared/components/icon/icon-trash";
import IconEdit from "@/shared/components/icon/icon-edit";
import Link from "next/link";
import React from "react";

const SettingsSystemValuesAdvancedCalculationUnitsComponent = () => {
    const myData = [
        {
            id: "1",
            displayName: "source word",
            symbol: "source word",
            preferredItem: "No",
            default: "Yes",
            active: "Yes",
        },
        {
            id: "2",
            displayName: "source page 1800",
            symbol: "source page 1800",
            preferredItem: "No",
            default: "No",
            active: "Yes",
        },
        {
            id: "3",
            displayName: "target page 1800",
            symbol: "target page 1800",
            preferredItem: "No",
            default: "No",
            active: "Yes",
        },
        {
            id: "4",
            displayName: "target page 1500",
            symbol: "target page 1500",
            preferredItem: "No",
            default: "No",
            active: "Yes",
        },
        {
            id: "5",
            displayName: "target page 1500 without spaces",
            symbol: "target page 1500 without spaces",
            preferredItem: "No",
            default: "No",
            active: "Yes",
        },
        {
            id: "6",
            displayName: "target word",
            symbol: "target word",
            preferredItem: "No",
            default: "No",
            active: "Yes",
        },
        { id: "7", displayName: "4h", symbol: "4h", preferredItem: "No", default: "No", active: "Yes" },
        { id: "8", displayName: "8h", symbol: "8h", preferredItem: "No", default: "No", active: "Yes" },
        { id: "9", displayName: "1h", symbol: "1h", preferredItem: "No", default: "No", active: "Yes" },
    ];

    const myColumns = [
        {
            accessor: "displayName",
            title: "Display Name",
            sortable: true,
            render: ({ displayName }: any) => <div>{displayName}</div>,
        },
        {
            accessor: "symbol",
            title: "Symbol",
            sortable: true,
            render: ({ symbol }: any) => <div>{symbol}</div>,
        },
        {
            accessor: "preferredItem",
            title: "Preferred Item",
            sortable: true,
            render: ({ preferredItem }: any) => <div>{preferredItem}</div>,
        },
        {
            accessor: "active",
            title: "Active",
            sortable: true,
            render: ({ active }: any) => <div>{active}</div>,
        },
        {
            accessor: "default",
            title: "Default",
            sortable: true,
            render: ({ default: isDefault }: any) => <div>{String(isDefault)}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id }: any) => (
                <div className="flex justify-around gap-4">
                    <Link
                        href={`/dashboard/settings/system-values-advanced/calculation-units/${id}/edit`}
                        legacyBehavior={true}
                    >
                        <a className="text-indigo-600 hover:text-indigo-900">
                            <IconEdit />
                        </a>
                    </Link>
                    <Link
                        href={`/dashboard/settings/system-values-advanced/calculation-units/${id}/delete`}
                        legacyBehavior={true}
                    >
                        <a className="text-red-600 hover:text-red-900">
                            <IconTrash />
                        </a>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        // <CustomDataTable
        //     title="All Calculation Units"
        //     data={myData}
        //     columns={myColumns}
        //     pageSizeOptions={[5, 10, 15, 20, 25, 50, 100]}
        //     newResourceLabel="Add Calculation Unit"
        //     newResourceLink="/dashboard/settings/system-values-advanced/calculation-units/new"
        //     defaultPageSize={5}
        //     onPageSizeChange={() => {}}
        //     totalCount={myData.length}
        // />
        <h1>Table Needs Update</h1>

    );
};

export default SettingsSystemValuesAdvancedCalculationUnitsComponent;
