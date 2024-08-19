import { useDisclosure } from "@mantine/hooks";
import { deleteItemFromItemView } from "@/modules/dashboard/projects/Services/DeleteActions";


export default function useDeleteConfirmModalHook() {
    const [opened, { close, open }] = useDisclosure(false);

    return { opened, open, close, deleteItemFromItemView }

}