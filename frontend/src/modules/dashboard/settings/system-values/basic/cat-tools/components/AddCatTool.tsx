import { useCallback } from "react";
import { CatToolForm } from "./CatToolForm";
import { useCatToolForm } from "../hooks/useCatToolForm";
import { useAddCatTool } from "../hooks/useAddCatTool.hook";
import { CatToolPayload } from "../types/addCatTool.type";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview" },
    { label: "Cat Tools", href: "/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddCatTool: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useCatToolForm();

    const { mutate: addUser } = useAddCatTool();

    const onSubmit = useCallback(
        (data: CatToolPayload) => {
            addUser(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addUser, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create CAT Tool:</h1>
                <CatToolForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create CAT Tool"
                />
            </div>
        </form>
    );
};
