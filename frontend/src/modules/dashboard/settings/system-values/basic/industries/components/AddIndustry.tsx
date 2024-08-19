import { useCallback } from "react";
import { IndustryForm } from "./IndustryForm";
import { useIndustryForm } from "../hooks/useIndustryForm";
import { IndustryPayload } from "../types/addIndustry.type";
import { useAddIndustry } from "../hooks/useAddIndustry.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=industries&subTab=overview" },
    { label: "Industries", href: "/dashboard/settings/system-values/basic?tab=industries&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddIndustry: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useIndustryForm();

    const { mutate: addIndustry } = useAddIndustry();

    const onSubmit = useCallback(
        (data: IndustryPayload) => {
            addIndustry(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addIndustry, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create Industry:</h1>
                <IndustryForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create Industry"
                />
            </div>
        </form>
    );
};
