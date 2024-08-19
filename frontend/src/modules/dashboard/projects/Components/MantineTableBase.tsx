"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DataTable, useDataTableColumns, DataTableSortStatus, DataTableColumn } from "mantine-datatable";
import { Button, Group } from "@mantine/core";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import IconAdd from "@/shared/components/icon/icon-add";

interface Column {
    accessor: string;
    sortable?: boolean;
    title?: string;
    render?: (data: any) => JSX.Element;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
    resizable?: boolean;
    draggable?: boolean;
    toggleable?: boolean;
}

// interface DataItem extends Record<string, unknown> {
//     [key: string]: any;
// }

interface CustomDataTableProps<DataType> {
    records: DataType[];
    PAGE_SIZE: number;
    page: number;
    totalRecords: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    title: string;
    data: [] | DataType[];
    columns: Column[];
    pageSizeOptions?: number[];
    newResourceLink: string;
    newResourceLabel: string;
    defaultPageSize?: number;
    totalCount?: number;
    searchPlaceholder?: string;
    // onPageChange?: (page: number) => void;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    onSearch?: (searchQuery: string) => void;
    onSort?: (columnAccessor: string, direction: "ASC" | "DESC") => void;
}

export default function MantineTableBase<DataType>({
    title,
    columns,
    newResourceLink,
    newResourceLabel,
    searchPlaceholder,
    onPageChange,
    onSearch,
    onSort,
    onPageSizeChange,
    records,
    PAGE_SIZE,
    page,
    totalRecords,
    setPage,
}: CustomDataTableProps<DataType>) {
    const key = "custom-data-table";

    const { effectiveColumns, resetColumnsWidth, resetColumnsOrder, resetColumnsToggle } =
        useDataTableColumns<DataType>({
            key,
            columns: columns.map((column) => ({
                ...column,
                resizable: true,
                sortable: true,
                toggleable: true,
                draggable: true,
            })),
        });

    useEffect(() => {
        resetColumnsWidth();
        resetColumnsOrder();
        resetColumnsToggle();
    }, []);

    return (
        <div className="panel max-w-screen">
            <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                <h3 className="text-lg font-extrabold dark:text-white-light">{title}:</h3>
                <div className="ltr:ml-auto rtl:mr-auto">
                    {/* <input
                        type="text"
                        className="form-input w-80 rounded-xl py-3"
                        placeholder={searchPlaceholder || "Search..."}
                        onChange={(e) => onSearch?.(e.target.value)}
                    /> */}
                </div>
                <Link
                    href={newResourceLink}
                    className="flex cursor-pointer items-center justify-center rounded-xl bg-purple-500 p-2 font-semibold text-white hover:bg-purple-700"
                >
                    <IconAdd />
                    <span className="mx-1">{newResourceLabel}</span>
                </Link>
            </div>
            <div
            // className="datatables"
            >
                <DataTable<DataType>
                    withTableBorder
                    withColumnBorders
                    highlightOnHover
                    // striped
                    storeColumnsKey={key}
                    records={records}
                    columns={effectiveColumns}
                    totalRecords={totalRecords}
                    paginationActiveBackgroundColor="grape"
                    recordsPerPage={PAGE_SIZE}
                    page={page}
                    onPageChange={onPageChange ? onPageChange : (p) => setPage(p)}
                    minHeight={500}
                    paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} rows`}
                    noRecordsText="No records Found"
                />

                <div className="flex justify-center space-x-5">
                    <Button className="bg-purple-700 p-3 font-medium text-white" onClick={resetColumnsWidth}>
                        Reset Width
                    </Button>
                    <Button className="bg-purple-700 p-3 font-medium text-white" onClick={resetColumnsOrder}>
                        Reset Order
                    </Button>
                    <Button className="bg-purple-700 p-3 font-medium text-white" onClick={resetColumnsToggle}>
                        Reset Appearance
                    </Button>
                </div>
            </div>
        </div>
    );
}
