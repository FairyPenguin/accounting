"use client";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { SetStateAction, useEffect, useState } from "react";
import IconEdit from "@/shared/components/icon/icon-edit";
import IconTrash from "@/shared/components/icon/icon-trash";
import Link from "next/link";
import DeleteConfirmModal from "@/modules/dashboard/projects/FormFieldsComponents/DeleteConfirmModal";
import useDeleteConfirmModalWithTableHook from "@/modules/dashboard/projects/Hooks/useDeleteConfirmModalWithTableHook";
import { deleteItemFromTable } from "@/modules/dashboard/projects/Services/DeleteActions";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import { TaskInJobTasksList } from "@/modules/dashboard/projects/Services/FetchJobTasks";
import IconUser from "@/shared/components/icon/icon-user";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { IconCheck, IconSelect } from "@tabler/icons-react";
import { UpdatedTaskVendorRequestPayload } from "@/modules/dashboard/projects/Services/UpdateTaskAssignedVendor";

interface TasksTableProps {
    // columns: Column[];
    // endpoint: string;
    tableTitle: string;
    // createNewItemButtonText: string;
    // newResourceLink: string;
    UUID: string;
    openModal?: boolean;
    setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalDeleteButttonFunc?: (vendorID: number) => void;
    // data?: any;
    // refreshData?: boolean;
    records: Vendor[];
    projectUUID: string;
    jobData?: JobByUUID;
    jobUUID: string;
    vendorID: UpdatedTaskVendorRequestPayload;
    setVendorID: React.Dispatch<SetStateAction<UpdatedTaskVendorRequestPayload>>;
}

export default function FreelancersTable({
    vendorID,
    setVendorID,
    records,
    projectUUID,
    jobData,
    jobUUID,
    handleModalDeleteButttonFunc,
}: TasksTableProps) {
    // States
    const [selectedRecords, setSelectedRecords] = useState<Vendor[]>([]);
    // const [vendorID, setVendorID] = useState<UpdatedTaskVendorRequestPayload>({ vendorId: null });

    // Check the selected rows array before access it
    // extract selected row vendor id from vendor object

    function getSlectedRowVendorID(rows: Vendor[] | []) {
        if (rows.length !== 0) {
            const selectedVendorID = Number(rows[0].id);
            console.log(selectedVendorID);
            // handleModalDeleteButttonFunc(selectedVendorID);
            setVendorID({ vendorId: selectedVendorID });

            // return selectedVendorID;
        } else {
            console.log("No selected row");
        }

        return [];
    }

    const onSelectedRecordsChange = (newSelectedRecords: Vendor[]) => {
        setSelectedRecords(newSelectedRecords);
        // getSlectedRowVendorID(newSelectedRecords);
        // console.log(newSelectedRecords);

        // call function for each selected record
        newSelectedRecords.map((record) => {
            const recordArray = [record];
            getSlectedRowVendorID(recordArray);
        });
    };

    //
    //
    const FreelancersTableColumns = [
        {
            accessor: "id",
            title: "ID",
            render: ({ id }: Vendor) => <div>{id}</div>,
        },
        {
            accessor: "name",
            title: "Name",
            render: ({ name, uuid, id }: Vendor) => <Link href={"#"}>{name}</Link>,
        },
        {
            accessor: "type",
            title: "Type",
            render: ({ type, uuid, id }: Vendor) => <div>{type}</div>,
        },
        // {
        //     accessor: "actions",
        //     title: "Actions",
        //     sortable: false,
        //     render: ({ id, uuid }: Vendor) => (
        //         <div className="flex max-w-4 justify-around gap-2 px-6">
        //             <button
        //                 className="flex justify-center items-center gap-0.5"
        //                 // onClick={() => {
        //                 //     // handleModalDeleteButttonFunc(Number(id));
        //                 //     handleModalDeleteButttonFunc(getSlectedRowVendorID());
        //                 //     // openModalHandler();
        //                 // }}
        //             >
        //                 <IconCheck size={"1.1rem"} />
        //                 <span className="font-bold text-purple-500">Select</span>
        //             </button>
        //         </div>
        //     ),
        // },
    ];

    return (
        <>
            {/* Modal ???  */}
            {/* Modal ???  */}
            <DataTable
                selectedRecords={selectedRecords}
                // onSelectedRecordsChange={setSelectedRecords}
                onSelectedRecordsChange={onSelectedRecordsChange}
                // selectionColumnStyle={{ backgroundColor: "#A855F7" }}
                withTableBorder
                withColumnBorders
                records={records}
                columns={FreelancersTableColumns}
                // sortStatus={sortStatus}
                // onSortStatusChange={setSortStatus}
                highlightOnHover
                height={500}
                noRecordsText="No records Found"
            />
        </>
    );
}
