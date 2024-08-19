"use client";
// ======/ Imports /======
import { Modal } from "@mantine/core";
import Link from "next/link";
import { SetStateAction, useState, useEffect, useTransition } from "react";
import vendorsFetcher, { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { UpdatedTaskVendorRequestPayload } from "@/modules/dashboard/projects/Services/UpdateTaskAssignedVendor";
import { TextInput } from "@mantine/core";

// ======/ Imports /======

interface ModalProps {
    opened: boolean;
    close: () => void;
    open?: () => void;
    setUploadedFileByURLData: React.Dispatch<SetStateAction<string>>;

    // actionFunc: () => Promise<"Vendor ID value is undefined" | undefined>;
    // handleModalUploadButtton:
    //     | (() => Promise<"Error:Cannot update task: vendorId value is null" | undefined>)
    //     | (() => Promise<void>);
    handleModalUploadButtton: () => void;
}

export default function UploadFileByURLModal({
    opened,
    close,
    open,
    handleModalUploadButtton,
    setUploadedFileByURLData,
}: ModalProps) {
    const [isPending, startTransition] = useTransition();
    const [fileURLValue, setFileURLValue] = useState("");

    return (
        <>
            <Modal opened={opened} onClose={close} size="auto" title="Upload File By URL." centered>
                {/* <h1 className="">Upload File By URL</h1> */}
                {/*  */}
                {/* <TextInput
                    className="form-input w-80 rounded-xl py-3"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                /> */}
                {/*  */}
                <form className="mb-8 mt-8 px-8">
                    <label htmlFor="file-url">File URL: </label>
                    <input
                        id="file-url"
                        type="text"
                        className="form-input min-w-96 rounded-md py-4 "
                        placeholder={"file url for example: https://www.google.com/ ..."}
                        onChange={(event) => {
                            // setFileURLValue(event.currentTarget.value);
                            setUploadedFileByURLData(event.target.value);
                        }}
                    />
                </form>

                {/* ------------BUTTONS------------ */}
                <div className="my-4  px-8 flex justify-end min-w-96 gap-x-8">
                    {/* Cancel Button */}

                    <button
                        onClick={close}
                        className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                    >
                        Cancel
                    </button>

                    {/* Confirm Button */}

                    <button
                        onClick={async () => await handleModalUploadButtton()}
                        type="button"
                        className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                    >
                        Confrim Upload
                    </button>
                </div>
                {/* ------------BUTTONS------------ */}
                {/* ------------Table------------ */}
                <div className="mb-10"></div>
                {/* ------------Table------------ */}
            </Modal>
        </>
    );
}
