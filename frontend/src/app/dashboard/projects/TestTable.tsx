"use client";

import clientsFetcher, { getAllClients } from "@/modules/dashboard/projects/Services/FetchAllClients";
import projectsFetcher, {
    Client,
    getAllProjects,
    Project,
} from "@/modules/dashboard/projects/Services/FetchAllProjects";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

// Types

interface Props {
    projects?: Project[];
}

// constants
const PAGE_SIZE = 25;

export default function TestTable({ projects }: Props) {
    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, settotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState<Client[]>([]);

    console.log(totalRecords, totalPages);

    useEffect(() => {
        projectsDataFetcher();
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        // setRecords(projects.slice(from, to));
    }, [page]);

    async function projectsDataFetcher() {
        try {
            const response = await getAllClients();

            const dataArray = await clientsFetcher();

            setRecords(dataArray);

            // if (response && response.data && dataArray.totalCount && dataArray.totalPage) {
            //     const totalRecords = response.totalCount;
            //     const totalPages = response.totalPage;
            //     const projectsArray = response.data;

            //     setTotalRecords(totalRecords);
            //     settotalPages(totalPages);
            //     setRecords(dataArray);
            // }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DataTable
            height={500}
            withTableBorder
            records={records}
            columns={[
                { accessor: "name", width: 100 },
                { accessor: "uuid", width: 100 },
                { accessor: "id", width: "100%" },
            ]}
            totalRecords={totalRecords}
            recordsPerPage={PAGE_SIZE}
            page={page}
            onPageChange={(p) => setPage(p)}
        />
    );
}
