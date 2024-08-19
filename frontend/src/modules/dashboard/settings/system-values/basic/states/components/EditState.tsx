import { StateForm } from "./StateForm";
import { useCallback, useEffect } from "react";
import { EditStateProps } from "../interfaces";
import { useStateForm } from "../hooks/useStateForm";
import { StatePayload } from "../types/addState.type";
import { useEditState } from "../hooks/useEditState.hook";
import { useGetStateDetails } from "../hooks/useGetStateDetails.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=states&subTab=overview" },
    { label: "States", href: "/dashboard/settings/system-values/basic?tab=states&subTab=overview" },
    { label: "Edit", href: "#" },
];

export const EditState: React.FC<EditStateProps> = ({ stateId }) => {
    const { register, handleSubmit, errors, reset } = useStateForm();

    const { data: stateDetails } = useGetStateDetails(stateId) as any;
    const { mutate: editState } = useEditState();

    const onSubmit = useCallback(
        (data: StatePayload) => {
            editState(
                { stateId, data },
                {
                    onSuccess: () => {
                        reset();
                    },
                },
            );
        },
        [editState, reset],
    );

    useEffect(() => {
        if (stateDetails) {
            reset(stateDetails?.data?.data);
        }
    }, [stateDetails, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Edit State:</h1>
                <StateForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    values={stateDetails?.data?.data}
                    submitButtonLabel="Edit State"
                />
            </div>
        </form>
    );
};
