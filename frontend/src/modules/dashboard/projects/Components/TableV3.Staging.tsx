"use client";

import { useEffect, useState } from "react";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import { deleteItemFromTable } from "../Services/DeleteActions";
import { tableFetchHelper } from "../Services/TableFetchHelper.Staging";
import MantineTableBase from "./MantineTableBase";

/**
 *  Warning
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 *
 */
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
    UUID: string;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalDeleteButttonFunc: () => Promise<void>;
    // data?: any;
    refreshData?: boolean;
}

// constants
const PAGE_SIZE = 25;

/**
 *  Warning
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 * Please Don't chnage or add any code to the TableV2 component
 *
 */

export default function TableV3<DataType>({
    columns,
    endpoint,
    createNewItemButtonText,
    tableTitle,
    newResourceLink,
    UUID,
    openModal,
    setOpenModal,
    handleModalDeleteButttonFunc,
}: TableProps) {
    // ----------------->  States |

    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, settotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState<DataType[]>([]);
    const [data, setData] = useState<DataType[]>([]);
    const [refreshData, setRefreshData] = useState<boolean>(false);

    console.log(refreshData);

    // Functions <----------------- |

    // States <----------------- |

    // ----------------->  Effects |
    useEffect(() => {
        DataFetcher();
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        // setRecords(projects.slice(from, to));
    }, [page]);

    useEffect(() => {
        DataFetcher();
        // console.log("Triggered the effect YES!!");
    }, [refreshData]);

    // Effects <----------------- |

    // ----------------->  Functions |

    function toggleDelete() {
        setRefreshData(true);
    }

    /**
     *  Warning
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     *
     */

    async function DataFetcher() {
        try {
            const response = await tableFetchHelper<DataType>(page, PAGE_SIZE, endpoint);

            if (response && response.data && response.totalCount && response.totalPage) {
                const totalRecords = response.totalCount;
                const totalPages = response.totalPage;
                const recordsArray = response.data;
                // console.log(recordsArray);

                setTotalRecords(totalRecords);
                settotalPages(totalPages);
                setRecords(recordsArray);
                setData(recordsArray);
                setRefreshData(false);
                return { totalRecords, totalPages, recordsArray };
            }
        } catch (error) {
            console.error(error);
        }
    }

    // async function handleModalDeleteButtton() {
    //     try {
    //         const res = await deleteItemFromTable(UUID, "projects", "dashboard/projects");

    //         if (res && res.success) {
    //             // console.log(res.success);
    //             // close();
    //             setRefreshData(true);
    //             setOpenModal(false);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // Functions <----------------- |

    /**
     *  Warning
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     * Please Don't chnage or add any code to the TableV2 component
     *
     */

    return (
        <>
            <DeleteConfirmModal
                opened={openModal}
                close={() => setOpenModal(false)}
                actionFunc={handleModalDeleteButttonFunc}
                // actionFunc={() => deleteItemFromTable(UUID, "projects", "dashboard/projects")}
            />

            <MantineTableBase
                title={tableTitle}
                data={data}
                columns={columns}
                newResourceLabel={createNewItemButtonText}
                newResourceLink={newResourceLink}
                onSearch={() => {}}
                onSort={() => {}}
                searchPlaceholder="Search by project name..."
                records={records}
                totalRecords={totalRecords}
                PAGE_SIZE={PAGE_SIZE}
                page={page}
                setPage={setPage}
                onPageChange={(p) => {
                    setPage(p);
                }}
            />
        </>
    );
}
