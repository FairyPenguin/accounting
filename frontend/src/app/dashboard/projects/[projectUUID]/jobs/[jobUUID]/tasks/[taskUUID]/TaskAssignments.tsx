"use client";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import FreelancersListModal from "./FreelancersListModal";
import useSelectFreelancersModalHook from "@/modules/dashboard/projects/Hooks/useSelectFreelancersModalHook";
import SelectedFreelancersTable from "./SelectedFreelancersTable";
import { TaskByUUID } from "@/modules/dashboard/projects/Services/FetchSingleTaskByUUID";
import { useState } from "react";
import { UpdatedTaskVendorRequestPayload } from "@/modules/dashboard/projects/Services/UpdateTaskAssignedVendor";

interface Props {
    vendorsArray: Vendor[];
    taskUUID: string;
    projectUUID: string;
    jobUUID: string;
    taskData: TaskByUUID;
}

function TaskAssignments({ vendorsArray, taskUUID, projectUUID, jobUUID, taskData }: Props) {
    // States
    const [vendorID, setVendorID] = useState<UpdatedTaskVendorRequestPayload>({ vendorId: null });

    // Hooks
    const {
        openModal,
        setOpenModal,
        openModalHandler,
        // handleTableSelectActionButton,
        handleModalConfirmButtton,
    } = useSelectFreelancersModalHook();

    //Old Solution but not persisited
    // const selectedFreelancersArray = vendorsArray.filter((vendor) => {
    //     return Number(vendor.id) === vendorID.vendorId;
    // });

    // Initial empty [taskVendorsArray] >>
    /**
     * this is the array which provide the SelectedFreelancersTable table with
     * it's ( data / rows )
     *
     * */
    const taskVendorsArray: Vendor[] = [];
    // Push the task assigned vendor to the initially empty [taskVendorsArray]
    taskVendorsArray.push(taskData.vendor);
    /**
     * This is what keeps the selectedfreelancers persisted in the
     * selectedfreelancers table (Because this array is using the vendor object
     * inside the task object without needing any ID or UUID or any fetch it
     * depends on the already fetchd task by UUID and then access it's vendor
     * object and pass this object to the [taskVendorsArray] array,
     * So it depends on the updates that happens to the main task object
     *  (Chnages of the vendor object of course) so it will be always fetching the
     * latest assigned vendor)
     * The upodates and changes for the task vendor comes from
     * the UpdateTaskVendorByUUID() function this function is responsible for
     * the updates for the TaskByUUID and here we just render that updates
     * So the process works liek this the fucntion get the id and update the
     * main task object the update shows here.
     * The function invoking happens when the Confirm button is clicked it
     * triggers the function with the already added ID and the rest is CLEAR.
     */
    // const taskVendor = taskVendorsArray.push(taskData.vendor);
    console.log("taskVendorsArray Is Down me", taskVendorsArray);

    return (
        <>
            <FreelancersListModal
                vendorID={vendorID}
                setVendorID={setVendorID}
                opened={openModal}
                close={() => setOpenModal(false)}
                modalConfirmButtonFunc={async () =>
                    await handleModalConfirmButtton(
                        vendorID,
                        taskUUID,
                        `/dashboard/projects/${projectUUID}/jobs/${jobUUID}/tasks/${taskUUID}`,
                    )
                }
                vendorsArray={vendorsArray}
                // tableActionFunc={handleTableSelectActionButton}
            />

            <section className="Assignments mb-5 mt-5 panel max-w-screen">
                <div className="Top-Menu flex justify-between border-b border-gray-900/10 pb-3 pt-2">
                    <h1 className="text-2xl font-bold">Assignment</h1>
                    <button
                        onClick={() => openModalHandler()}
                        type="button"
                        className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                    >
                        Select Freelancer
                    </button>
                </div>

                {/* SelectedFreelancersTable */}
                <SelectedFreelancersTable
                    tableTitle={""}
                    UUID={""}
                    handleModalDeleteButttonFunc={function (vendorID: number): void {
                        throw new Error("Function not implemented.");
                    }}
                    // records={selectedFreelancersArray}
                    records={taskVendorsArray}
                    projectUUID={""}
                    jobUUID={""}
                />
                {/* SelectedFreelancersTable */}
            </section>
        </>
    );
}

export default TaskAssignments;
