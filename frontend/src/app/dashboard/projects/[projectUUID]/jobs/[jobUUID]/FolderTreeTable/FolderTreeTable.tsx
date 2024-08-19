import { Stack, Group } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import styles from "./FolderTreeTable.module.css";
import { IconFolder, IconFolderCancel, IconFolderCheck } from "@tabler/icons-react";
import { ChildFolder } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";
import IconFolderPlus from "@/shared/components/icon/icon-folder-plus";
import TreeC from "../Tree/Tree";
import RootFolderTree from "../JobVIewTabs/RootFolderTree";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import { SetStateAction } from "react";

interface FileTreeTableProps {
    records: any[];
    project: ProjectByUUID;
    selectedFolder: string;
    setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
    folderID: string;
    setFolderID: React.Dispatch<React.SetStateAction<string>>;
}

export default function FolderTreeTable({
    records,
    project,
    selectedFolder,
    setSelectedFolder,
    folderID,
    setFolderID,
}: FileTreeTableProps) {
    /**
     *
     * project.attachments
     * 67c129bd-e72e-4e4b-bcad-aac810371bad
     * .childs => [{...child}]
     * .childs.map((child)=>{
     * name / slug / id /path
     *
     * })
     */

    const NoFoldersAndFilesICON = <IconFolderCancel />;
    const columns = [
        { accessor: "id" },
        {
            accessor: "name",
            render: ({ name }: ChildFolder) => (
                <div className="flex  justify-start items-center gap-1">
                    <IconFolder />
                    {name}
                    {" Attachments"}
                </div>
            ),
        },
    ];

    return (
        <>
            <DataTable
                withTableBorder
                withColumnBorders
                highlightOnHover
                height={500}
                noRecordsText="No Folders or Files Were Found"
                noRecordsIcon={NoFoldersAndFilesICON}
                columns={columns}
                records={records}
                rowExpansion={{
                    content: ({ record }) => (
                        <Stack className={styles.details} p="xs" gap={6}>
                            <Group gap={6}>
                                {/* <div className={styles.label}>Folders: </div> */}
                                {/* <div>{record.}</div> */}
                                {/* <TreeC /> */}
                                <RootFolderTree
                                    rootFolderUUID={project.attachments.uuid}
                                    selectedFolder={selectedFolder}
                                    setSelectedFolder={setSelectedFolder}
                                    folderID={folderID}
                                    setFolderID={setFolderID}
                                />
                            </Group>
                            <Group gap={6}>
                                {/* <div className={styles.label}>Files: </div> */}
                                {/* <Box fs="italic">“{record.missionStatement}”</Box> */}
                            </Group>
                        </Stack>
                    ),
                }}
            />
        </>
    );
}
