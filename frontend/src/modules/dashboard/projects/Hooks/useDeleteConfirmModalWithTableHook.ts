import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { deleteItemFromTable } from "@/modules/dashboard/projects/Services/DeleteActions";
import { deleteProjectFromTable } from "@/modules/dashboard/projects/Services/DeleteSingleProject";


export default function useDeleteConfirmModalWithTableHook() {
    // const [opened, { close, open }] = useDisclosure(false);
    const [openModal, setOpenModal] = useState(false);
    const [UUID, setUUID] = useState<string>("");


    // console.log(UUID);

    function openModalHandler() {
        setOpenModal(true);
    }

    function handleTableDeleteActionButton(UUID: string) {
        setUUID(UUID);
    }

    async function handleModalDeleteButtton(endpoint: string, route: string) {
        try {
            const res = await deleteItemFromTable(UUID, endpoint, route);

            if (res && res.success) {
                // console.log(res.success);
                // close();
                setOpenModal(false);
            }
        } catch (error) {
            console.error(error);
        }
    }




    return {
        openModal,
        setOpenModal, UUID, openModalHandler,
        handleTableDeleteActionButton, handleModalDeleteButtton
    }

}