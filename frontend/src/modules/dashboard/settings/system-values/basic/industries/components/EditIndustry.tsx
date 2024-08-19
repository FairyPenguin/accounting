import { IndustryForm } from "./IndustryForm";
import { useCallback, useEffect } from "react";
import { EditIndustryProps } from "../interfaces";
import { useIndustryForm } from "../hooks/useIndustryForm";
import { IndustryPayload } from "../types/addIndustry.type";
import { useEditIndustry } from "../hooks/useEditIndustry.hook";
import { useGetIndustryDetails } from "../hooks/useGetIndustryDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=industries&subTab=overview" },
    { label: "Industries", href: "/dashboard/settings/system-values/basic?tab=industries&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditIndustry: React.FC<EditIndustryProps> = ({ industryId }) => {
    const { register, handleSubmit, errors, reset } = useIndustryForm();

    const { data: industryDetails } = useGetIndustryDetails(industryId) as any;
    const { mutate: editIndustry } = useEditIndustry();

    const onSubmit = useCallback(
        (data: IndustryPayload) => {
            editIndustry(
                { industryId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editIndustry, reset],
    );

    useEffect(() => {
        if (industryDetails) {
            reset(industryDetails?.data?.data);
        }
    }, [industryDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit Industry:</h1>
                <IndustryForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={industryDetails?.data?.data}
                    submitButtonLabel="Edit Industry"
                />
            </div>
        </form>
    );
};
