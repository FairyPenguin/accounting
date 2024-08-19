"use client";
// ======/ Imports /======
import { Modal } from "@mantine/core";
import Link from "next/link";
import { SetStateAction, useState, useEffect, useTransition } from "react";
import FreelancersTable from "./FreelancersTable";
import vendorsFetcher, { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { UpdatedTaskVendorRequestPayload } from "@/modules/dashboard/projects/Services/UpdateTaskAssignedVendor";
import { TextInput } from "@mantine/core";

// ======/ Imports /======

interface ModalProps {
    vendorID: UpdatedTaskVendorRequestPayload;
    setVendorID: React.Dispatch<SetStateAction<UpdatedTaskVendorRequestPayload>>;
    vendorsArray: Vendor[];
    opened: boolean;
    close: () => void;
    open?: () => void;
    // actionFunc: () => Promise<"Vendor ID value is undefined" | undefined>;
    modalConfirmButtonFunc:
        | (() => Promise<"Error:Cannot update task: vendorId value is null" | undefined>)
        | (() => Promise<void>);
    tableActionFunc?: (vendorID: number) => void;
}

export default function FreelancersListModal({
    opened,
    close,
    open,
    modalConfirmButtonFunc,
    vendorsArray,
    tableActionFunc,
    vendorID,
    setVendorID,
}: ModalProps) {
    const [isPending, startTransition] = useTransition();
    const [searchvalue, setSearchValue] = useState<string>("");
    const [records, setRecords] = useState(vendorsArray);

    useEffect(() => {
        getVendorsListBySearch(searchvalue);
        console.log("Changed", searchvalue);
    }, [searchvalue]);

    async function getVendorsListBySearch(searchString: string) {
        const response = await vendorsFetcher(searchString);
        setRecords(response);
    }

    return (
        <>
            <Modal opened={opened} onClose={close} size="auto" title="Search and Select Freelancers." centered>
                <h1 className="">Search Freelancers</h1>
                {/*  */}
                {/* <TextInput
                    className="form-input w-80 rounded-xl py-3"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                /> */}
                <input
                    type="text"
                    className="form-input w-full rounded-xl py-3"
                    placeholder={"Search..."}
                    onChange={(event) => setSearchValue(event.currentTarget.value)}
                />

                {/* ------------BUTTONS------------ */}
                <div className="my-4 flex justify-center gap-x-5 space-x-4">
                    {/* Cancel Button */}

                    <button
                        onClick={close}
                        className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                    >
                        Cancel
                    </button>

                    {/* Confirm Button */}

                    <button
                        onClick={async () => await modalConfirmButtonFunc()}
                        type="button"
                        className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                    >
                        Confrim Selection
                    </button>
                </div>
                {/* ------------BUTTONS------------ */}
                {/* ------------Table------------ */}
                <div className="mb-10">
                    <FreelancersTable
                        tableTitle={""}
                        UUID={""}
                        // handleModalDeleteButttonFunc={tableActionFunc}
                        records={records}
                        projectUUID={""}
                        jobUUID={""}
                        vendorID={vendorID}
                        setVendorID={setVendorID}
                    />
                </div>
                {/* ------------Table------------ */}
            </Modal>
        </>
    );
}
