"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import projectsFetcher, { getAllProjects, Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import CustomDataTable from "@/shared/components/CustomTable/components/CustomDataTable";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import { deleteProjectFromTable } from "@/modules/dashboard/projects/Services/DeleteSingleProject";
// import useDataTableHook from "../Hooks/useDataTableHook";

interface Props {
    ProjectsData?: Project[];
}

// constants
const PAGE_SIZE = 25;

async function fetchProjects(page: number, PAGE_SIZE: number) {
    try {
        const response = await projectsFetcher(page, PAGE_SIZE);

        if (response && response.data && response.totalCount && response.totalPage) {
            const totalRecords = response.totalCount;
            const totalPages = response.totalPage;
            const projectsArray = response.data;
            return {
                totalRecords,
                totalPages,
                projectsArray,
            };
        }
    } catch (error) {
        console.error(error);
    }
}

export default function ProjectsList() {
    // ----------------->  States |
    const [opened, { close, open }] = useDisclosure(false);
    const [UUID, setUUID] = useState<string>("");

    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, settotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState<Project[]>([]);
    const [data, setData] = useState<Project[]>([]);
    // States <----------------- |

    // const { PAGE_SIZE, data, page, records, setPage, totalPages, totalRecords } = useDataTableHook<Project[]>(fetchProjects())
    // ----------------->  Effects |
    useEffect(() => {
        projectsDataFetcher();
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        // setRecords(projects.slice(from, to));
    }, [page]);

    // Effects <----------------- |

    // ----------------->  Functions |
    async function projectsDataFetcher() {
        try {
            const response = await projectsFetcher(page, PAGE_SIZE);

            if (response && response.data && response.totalCount && response.totalPage) {
                const totalRecords = response.totalCount;
                const totalPages = response.totalPage;
                const projectsArray = response.data;

                setTotalRecords(totalRecords);
                settotalPages(totalPages);
                setRecords(projectsArray);
                setData(projectsArray);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Functions <----------------- |

    function handleDeleteAction(UUID: string) {
        open();
        setUUID(UUID);
    }

    async function handleDeleteBtn(UUID: string) {
        try {
            const res = await deleteProjectFromTable(UUID);

            if (res.success) {
                // console.log(res.success);
                close();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const myColumns = [
        {
            accessor: "name",
            title: "Project Name",
            render: ({ name, uuid, id }: Project) => (
                <Link href={`projects/${uuid}?projectId=${id}&projectName=${name}`}>{name}</Link>
            ),
        },
        {
            accessor: "client.name",
            title: "Client",
            render: ({ client }: any) => <div>{client.name}</div>,
        },
        {
            accessor: "primaryPM.firstName",
            title: "Primary PM",
            render: ({ primaryPM }: any) => (
                <div>
                    {primaryPM.firstName} {primaryPM.lastName}
                </div>
            ),
        },
        {
            accessor: "status",
            title: "Status",
            render: ({ status }: any) => <div>{status}</div>,
        },
        {
            accessor: "actions",
            title: "Actions",
            sortable: false,
            render: ({ id, uuid }: any) => (
                <div className="flex max-w-4 justify-around gap-2">
                    <Link href={`/dashboard/projects/${uuid}/edit`}>
                        <IconEdit />
                    </Link>
                    <button onClick={() => handleDeleteAction(uuid)}>
                        {/* onClick={() => deleteSingleProjectByUUID(uuid)}> */}
                        <IconTrash />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            {/* HOOK */}
            <CustomDataTable
                title="All Projects"
                data={data}
                columns={myColumns}
                newResourceLabel="New Project"
                newResourceLink="/dashboard/projects/new-project"
                onSearch={() => { }}
                onSort={() => { }}
                searchPlaceholder="Search by project name..."
                records={records}
                totalRecords={totalRecords}
                PAGE_SIZE={PAGE_SIZE}
                page={page}
                setPage={setPage}
            />
            {/* HOOK */}

            <DeleteConfirmModal opened={opened} close={close} actionFunc={() => handleDeleteBtn(UUID)} />
            {/* <CustomDataTable
                title="All Projects"
                data={data}
                columns={myColumns}
                newResourceLabel="New Project"
                newResourceLink="/dashboard/projects/new-project"
                onSearch={() => { }}
                onSort={() => { }}
                searchPlaceholder="Search by project name..."
                records={records}
                totalRecords={totalRecords}
                PAGE_SIZE={PAGE_SIZE}
                page={page}
                setPage={setPage}
            /> */}
        </>
    );
}
