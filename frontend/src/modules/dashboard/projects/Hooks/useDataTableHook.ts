// "use client";
// import { useEffect, useState } from "react";
// import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";

// interface DataTableProps {
//     columns?: any;
//     fetcherFunction: (page?: number, limit?: number) => {};
// }

// // constants
// const PAGE_SIZE = 25;

// export default function useDataTableHook<DataType>({ fetcherFunction }: DataTableProps) {
//     // ----------------->  States |

//     const [totalRecords, setTotalRecords] = useState(0);
//     const [totalPages, settotalPages] = useState(1);
//     const [page, setPage] = useState(1);
//     const [records, setRecords] = useState<DataType[]>([]);
//     const [data, setData] = useState<DataType[]>([]);
//     // States <----------------- |

//     // ----------------->  Effects |
//     useEffect(() => {
//         tableDataFetcher(page, PAGE_SIZE);
//         const from = (page - 1) * PAGE_SIZE;
//         const to = from + PAGE_SIZE;
//         // setRecords(projects.slice(from, to));
//     }, [page]);

//     // Effects <----------------- |

//     // ----------------->  Functions |
//     async function tableDataFetcher(page: number, PAGE_SIZE: number) {
//         try {
//             const response = await fetcherFunction(page, PAGE_SIZE);

//             if (response && fetcherFunction.data && fetcherFunction.totalCount && fetcherFunction.totalPage) {
//                 setTotalRecords(totalRecords);
//                 settotalPages(totalPages);
//                 setRecords(projectsArray);
//                 setData(projectsArray);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     // Functions <----------------- |

//     return { totalRecords, totalPages, page, setPage, records, data, PAGE_SIZE };
// }
