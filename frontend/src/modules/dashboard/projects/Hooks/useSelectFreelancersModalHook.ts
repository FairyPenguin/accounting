import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import UpdateTaskVendorByUUID, { UpdatedTaskVendorRequestPayload } from "../Services/UpdateTaskAssignedVendor";


export default function useSelectFreelancersModalHook() {
    const [opened, { close, open }] = useDisclosure(false);
    const [openModal, setOpenModal] = useState(false);
    // const [vendorID, setVendorID] = useState<UpdatedTaskVendorRequestPayload>({ vendorId: null });

    // console.log(vendorID);
    console.log(openModal);


    function openModalHandler() {
        setOpenModal(true);
        console.log(openModal);
    }


    // function handleTableSelectActionButton(vendorIDValue: number) {
    //     setVendorID({ vendorId: vendorIDValue });
    //     // console.log(vendorID);
    // }



    async function handleModalConfirmButtton(vendorID: UpdatedTaskVendorRequestPayload, UUID: string, route: string) {
        try {

            // if (vendorID.vendorId === null) {
            //     console.error("Cannot update task: vendorId value is null");
            //     return "Error:Cannot update task: vendorId value is null"
            // }
            // console.log(vendorID);

            const res = await UpdateTaskVendorByUUID(vendorID, UUID, route);
            // if (res && res.success === false) {
            //     // console.log(res.success);
            //     // close();
            //     setOpenModal(false);
            //     console.log(openModal);
            // }

            setOpenModal(false);
            console.log(openModal);

        } catch (error) {
            console.error(error);
        }
    }


    return {
        openModal, setOpenModal, openModalHandler
        , handleModalConfirmButtton
    }

}