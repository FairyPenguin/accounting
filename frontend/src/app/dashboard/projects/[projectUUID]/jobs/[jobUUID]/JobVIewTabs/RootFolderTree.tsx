import React, { useState, useEffect } from "react";
import Folder from "./FolderComponent";
import { fetchFolderTreeByUUID, FolderTree } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";
import { IconFolderFilled, IconFileFilled } from "@tabler/icons-react";
// Import the Folder component

interface Props {
    rootFolderUUID: string;
    selectedFolder: string;
    setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
    folderID: string;
    setFolderID: React.Dispatch<React.SetStateAction<string>>;
}

export default function RootFolderTree({
    rootFolderUUID,
    selectedFolder,
    setSelectedFolder,
    folderID,
    setFolderID,
}: Props) {
    const [rootFolder, setRootFolder] = useState<null | FolderTree>(null); // State to hold the root folder
    const [path, setPath] = useState("");

    // console.log(path);

    useEffect(() => {
        const fetchRootFolder = async () => {
            try {
                const response = await fetchFolderTreeByUUID(rootFolderUUID);
                const data = response;
                if (data && data.data) {
                    data.data.name = data.data.name + " Root Folder";
                    data.data.type = "folder";
                    setRootFolder(data.data);
                    // Set the fetched children to state
                }
            } catch (error) {
                console.error("Error fetching root folder:", error);
            }
        };

        fetchRootFolder(); // Fetch the root folder on component mount
    }, [rootFolderUUID]); // Re-fetch if rootUuid changes

    if (!rootFolder) {
        return <div>Loading root folder...</div>; // Show loading state until the root folder is fetched
    }

    return (
        <>
            <section>
                <div className="flex flex-col justify-between gap-y-2">
                    <p className="font-medium">Path: {path}</p>
                    <p className="font-medium">Folder ID: {folderID}</p>
                    <p className="font-medium">Selected Folder: {selectedFolder}</p>
                </div>

                <br />
                <Folder
                    folder={rootFolder}
                    setPath={setPath}
                    path={path}
                    folderID={folderID}
                    setFolderID={setFolderID}
                    selectedFolder={selectedFolder}
                    setSelectedFolder={setSelectedFolder}
                />
            </section>
        </>
    );
}
