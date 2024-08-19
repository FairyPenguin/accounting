import { useCallback } from "react";
import { StateForm } from "./StateForm";
import { useStateForm } from "../hooks/useStateForm";
import { StatePayload } from "../types/addState.type";
import { useAddState } from "../hooks/useAddState.hook";
import CustomBreadcrumb from "@/shared/components/breadCrumb/CustomBreadCrumb";

const breadcrumbItems = [
    { label: "System Values (Basic)", href: "/dashboard/settings/system-values/basic?tab=states&subTab=overview" },
    { label: "States", href: "/dashboard/settings/system-values/basic?tab=states&subTab=overview" },
    { label: "Create", href: "#" },
];

export const AddState: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useStateForm();

    const { mutate: addState } = useAddState();

    const onSubmit = useCallback(
        (data: StatePayload) => {
            addState(data, {
                onSuccess: () => {
                    reset();
                },
            });
        },
        [addState, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className="flex flex-col p-5">
                <h1 className="mb-8 text-lg font-extrabold">Create State:</h1>
                <StateForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    submitButtonLabel="Create State"
                />
            </div>
        </form>
    );
};
