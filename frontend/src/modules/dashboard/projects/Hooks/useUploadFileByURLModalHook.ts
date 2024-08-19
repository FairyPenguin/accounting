import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import PostNewFileByURL, { PostNewFIleByURLRequestPayload } from "../Services/PostNewFileByURL";


export default function useUploadFileByURLModalHook() {
    const [opened, { close, open }] = useDisclosure(false);
    const [openModal, setOpenModal] = useState(false);

    // console.log(openModal);


    function openUploadFileModalHandler() {
        setOpenModal(true);
        // console.log(openModal);
    }



    async function handleModalUploadButtton(paylaod: PostNewFIleByURLRequestPayload, route: string) {
        try {

            const res = await PostNewFileByURL(paylaod, route);
            // if (res && res.success === false) {
            //     // console.log(res.success);
            //     // close();
            //     setOpenModal(false);
            //     console.log(openModal);
            // }

            setOpenModal(false);
            // console.log(openModal);

        } catch (error) {
            console.error(error);
        }
    }


    return {
        openModal, setOpenModal, openUploadFileModalHandler
        , handleModalUploadButtton
    }

}