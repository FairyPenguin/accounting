import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function GoBackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                router.back();
            }}
            className="mb-3 min-w-28 h-8 rounded-md bg-purple-500 px-2 py-1
             text-white shadow-sm flex items-center justify-center gap-x-1"
        >
            <IconArrowLeft size={28} />
            <span className="text-base font-semibold">Go Back</span>
        </button>
    );
}

export default GoBackButton;
