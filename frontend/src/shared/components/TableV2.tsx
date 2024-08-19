"use client";

import { useEffect, useState } from "react";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import { deleteItemFromTable } from "@/modules/dashboard/projects/Services/DeleteActions";
import { tableDataFetcher } from "../services/TableDataFetcher";
import { IconLoader } from "@tabler/icons-react";

export interface Column {
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

interface TableProps {
    columns: Column[];
    endpoint: string;
    tableTitle: string;
    createNewItemButtonText: string;
    newResourceLink: string;
    searchBy: string;
    searchByKey: string;
    UUID: string;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalDeleteButttonFunc: () => Promise<void>;
    data?: any;
    refreshData?: boolean;
    lookupType?: string
}

// constants
const PAGE_SIZE = 25;

export default function TableV2<DataType>({
    columns,
    endpoint,
    createNewItemButtonText,
    tableTitle,
    newResourceLink,
    searchBy,
    searchByKey,
    UUID,
    openModal,
    setOpenModal,
    handleModalDeleteButttonFunc,
    lookupType
}: TableProps) {
    // ----------------->  States |

    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, settotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState<DataType[]>([]);
    const [data, setData] = useState<DataType[]>([]);
    const [refreshData, setRefreshData] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const searchByAttribute = searchByKey;
    const [search, setSearch] = useState<string>("");

    // Functions <----------------- |

    // States <----------------- |

    // ----------------->  Effects |
    useEffect(() => {
        DataFetcher();
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
    }, [page, refreshData, search]);

    useEffect(() => {
        DataFetcher();
    }, [refreshData]);

    // Effects <----------------- |

    // ----------------->  Functions |

    function toggleDelete() {
        setRefreshData(true);
    }

    const handleSearchChange = (searchQuery: string) => {
        setSearch(searchQuery);
    };

    async function DataFetcher() {
        setLoading(true);
        try {
            const response = await tableDataFetcher<DataType>(page, PAGE_SIZE, endpoint, search, searchByAttribute, lookupType);

            if (response && response.data && response.totalCount && response.totalPage) {
                const totalRecords = response.totalCount;
                const totalPages = response.totalPage;
                const recordsArray = response.data;

                setTotalRecords(totalRecords);
                settotalPages(totalPages);
                setRecords(recordsArray);
                setData(recordsArray);
                setRefreshData(false);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    // Functions <----------------- |

    return (
        <>
            <DeleteConfirmModal
                opened={openModal}
                close={() => setOpenModal(false)}
                actionFunc={handleModalDeleteButttonFunc}
            />

            {loading ? (
                <IconLoader />
            ) : (
                <CustomDataTable
                    title={tableTitle}
                    data={data}
                    columns={columns}
                    newResourceLabel={createNewItemButtonText}
                    newResourceLink={newResourceLink}
                    onSearch={handleSearchChange}
                    onSort={() => {}}
                    searchPlaceholder={searchBy}
                    records={records}
                    totalRecords={totalRecords}
                    PAGE_SIZE={PAGE_SIZE}
                    page={page}
                    setPage={setPage}
                    onPageChange={(p) => {
                        setPage(p);
                    }}
                />
            )}
        </>
    );
}
