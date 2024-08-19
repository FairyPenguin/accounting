"use client";
import { IconUpload } from "@tabler/icons-react";
import UploadFileByURLModal from "./UploadFileByURLModal";
import useUploadFileByURLModalHook from "@/modules/dashboard/projects/Hooks/useUploadFileByURLModalHook";
import { useState } from "react";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";

interface Props {
    selectedFolder: string;
    folderID: string;
    job: JobByUUID;
    project: ProjectByUUID;
}

function UploadManager({ selectedFolder, folderID, job, project }: Props) {
    const [uploadedFileByURL, setUploadedFileByURL] = useState("");
    // const [fileURL, setFileURL] = useState("");
    const { openModal, setOpenModal, openUploadFileModalHandler, handleModalUploadButtton } =
        useUploadFileByURLModalHook();

    // console.log("FileURL IN UM", fileURL);

    const uploadedFileData = { url: uploadedFileByURL, folderId: Number(folderID) };

    const revalidationRoute = `/dashboard/projects/${project.uuid}/jobs/${job.uuid}?tab=${encodeURIComponent("File Manager")}`;

    console.log(revalidationRoute);

    // console.log(uploadedFileData);

    return (
        <>
            <UploadFileByURLModal
                setUploadedFileByURLData={setUploadedFileByURL}
                opened={openModal}
                close={() => setOpenModal(false)}
                handleModalUploadButtton={() => handleModalUploadButtton(uploadedFileData, revalidationRoute)}
            />

            {/* uploadfiles-section */}
            <section
                className="uploadfiles-section py-3 px-3 flex items-center
justify-end  bg-slate-100"
            >
                <div className="btns__wrapper flex py-1 items-center gap-x-6 justify-end">
                    {/* Upload Button Selection */}

                    <button
                        // onClick={() => openModalHandler()}
                        className="flex items-center min-w-28 h-10 rounded-md bg-purple-500 px-2 py-1 gap-x-2"
                    >
                        <IconUpload color="white" />
                        <span className="text-base font-bold text-white">Upload Files</span>
                    </button>
                    {/* Upload Button URL */}
                    <button
                        onClick={() => openUploadFileModalHandler()}
                        className="flex items-center min-w-28 h-10 rounded-md bg-purple-500 px-2 py-1 gap-x-2"
                    >
                        <IconUpload color="white" />
                        <span className="text-base font-bold text-white">Upload File By URL</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default UploadManager;
