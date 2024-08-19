import {
    ChildFile,
    ChildFolder,
    fetchFolderTreeByUUID,
    FolderTree,
} from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";
import {
    IconFolderOpen,
    IconFolder,
    IconFile,
    IconFileTypeJpg,
    IconFileTypePdf,
    IconFileTypePng,
    IconFileTypeTxt,
} from "@tabler/icons-react";
import React, { useState } from "react";

interface Props {
    folder: ChildFolder | FolderTree | ChildFile;
    setPath: React.Dispatch<React.SetStateAction<string>>;
    path: string;
    folderID: string;
    setFolderID: React.Dispatch<React.SetStateAction<string>>;
    selectedFolder: string;
    setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
}

// Folder component definition
export default function Folder({
    folder,
    setPath,
    path,
    folderID,
    setFolderID,
    selectedFolder,
    setSelectedFolder,
}: Props) {
    const [children, setChildren] = useState<[] | (ChildFolder | ChildFile)[]>([]); // State to store the children folders
    const [isLoading, setIsLoading] = useState(false); // State to handle loading status
    const [isExpanded, setIsExpanded] = useState(false); // State to handle whether the folder is expanded
    const [isFolder, setIsFolder] = useState(false);
    // const [mergedArray, setMergedArray] = useState<ChildFolder[] | ChildFile[]>([]);

    const mergedArray: (ChildFolder | ChildFile)[] = [];

    async function handleClick() {
        if (folder.type === "folder" && !isExpanded) {
            // If folder is not expanded, fetch its children
            setIsLoading(true); // Set loading state to true
            try {
                // const response = await fetch(`/api/folder/${folder.uuid}`); // Replace with your actual API endpoint
                const response = await fetchFolderTreeByUUID(`${folder.uuid}`);
                const data = response;
                if (data && data.data) {
                    // const mergedFilesAndFoldersArray: TypeAOrB[] = data.data.children.concat(data.data.files);

                    data.data.children.forEach((folder) => {
                        folder.type = "folder";
                        return mergedArray.push(folder as ChildFolder);
                    });

                    data.data.files.forEach((file) => {
                        file.type = "file";
                        return mergedArray.push(file as ChildFile);
                    });

                    console.log("merged\n", mergedArray);

                    // mergedFilesAndFoldersArray.map((item) => {
                    //     if (item.children) {
                    //         setIsFolder(true);
                    //     }
                    // });
                    setChildren(mergedArray); // Set the fetched children to state

                    // set Path
                    setPath(data.data.path);

                    //set folder id
                    setFolderID(data.data.id);

                    // set selcted folder
                    setSelectedFolder(data.data.name);
                }
            } catch (error) {
                console.error("Error fetching folder contents:", error);
            } finally {
                setIsLoading(false); // Turn off the loading state
            }
        }
        setIsExpanded(!isExpanded); // Toggle the expanded state
    }

    function FolderAndFileIconsHandler() {
        const filesTypes = {};

        if (folder.type === "folder") {
            return isExpanded ? (
                <IconFolderOpen color="var(--mantine-color-grape-9)" size={24} stroke={2.5} />
            ) : (
                <IconFolder color="var(--mantine-color-grape-9)" size={24} stroke={2.5} />
            );
        }

        // if (folder.type === "file") return <IconFile color="var(--mantine-color-grape-9)" size={16} stroke={2.5} />;
        if (folder.type === "file") {
            if (folder.name.endsWith(".jpg")) {
                return <IconFileTypeJpg color="var(--mantine-color-grape-7)" size={22} stroke={2} />;
            }

            if (folder.name.endsWith(".pdf")) {
                return <IconFileTypePdf color="var(--mantine-color-grape-7)" size={22} stroke={2} />;
            }

            if (folder.name.endsWith(".png")) {
                return <IconFileTypePng color="var(--mantine-color-grape-7)" size={22} stroke={2} />;
            }

            if (folder.name.endsWith(".txt")) {
                return <IconFileTypeTxt color="var(--mantine-color-grape-7)" size={22} stroke={2} />;
            }

            return <IconFile color="var(--mantine-color-grape-8)" size={22} stroke={2} />;
        }
    }

    return (
        <>
            <div style={{ marginLeft: "20px" }}>
                {" "}
                {/* Add margin to create a tree structure */}
                <div
                    onClick={() => (folder.type === "folder" ? handleClick() : null)}
                    // style={{ cursor: "pointer" }}
                    className="cursor-pointer flex items-center gap-2 py-1"
                >
                    {" "}
                    {/* Click handler to expand folder */}
                    <FolderAndFileIconsHandler />
                    {folder.name} {isLoading && <span>Loading...</span>} {/* Show loading spinner when loading */}
                </div>
                {isExpanded &&
                    children && ( // Render children if folder is expanded
                        <div>
                            {children.map(
                                // Recursive rendering of Folder component
                                (child) => {
                                    return (
                                        <Folder
                                            key={child.id}
                                            folder={child}
                                            path={path}
                                            setPath={setPath}
                                            folderID={folderID}
                                            setFolderID={setFolderID}
                                            selectedFolder={selectedFolder}
                                            setSelectedFolder={setSelectedFolder}
                                        />
                                    );
                                },
                            )}
                        </div>
                    )}
            </div>
        </>
    );
}
