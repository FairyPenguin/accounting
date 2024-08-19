import { CatToolForm } from "./CatToolForm";
import { useCallback, useEffect } from "react";
import { EditCATToolProps } from "../interfaces";
import { useCatToolForm } from "../hooks/useCatToolForm";
import { CatToolPayload } from "../types/addCatTool.type";
import { useEditCatTool } from "../hooks/useEditCatTool.hook";
import { useGetCatToolDetails } from "../hooks/useGetCatToolDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview" },
    { label: "Cat Tools", href: "/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditCatTool: React.FC<EditCATToolProps> = ({ toolId }) => {
    const { register, handleSubmit, errors, reset } = useCatToolForm();

    const { data: catToolDetails } = useGetCatToolDetails(toolId) as any;
    const { mutate: editCatTool } = useEditCatTool();

    const onSubmit = useCallback(
        (data: CatToolPayload) => {
            editCatTool(
                { toolId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editCatTool, reset],
    );

    useEffect(() => {
        if (catToolDetails) {
            reset(catToolDetails?.data?.data);
        }
    }, [catToolDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit User:</h1>
                <CatToolForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={catToolDetails?.data?.data}
                    submitButtonLabel="Edit CAT Tool"
                />
            </div>
        </form>
    );
};
