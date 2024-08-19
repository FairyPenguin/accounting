"use client";

import FormSuccessBanner from "@/modules/dashboard/projects/Components/FormSuccessBanner";
import TaskCreationForm from "@/modules/dashboard/projects/Components/TaskCreationForm";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { PM } from "@/modules/dashboard/projects/Services/FetchAllPMs";
import { Vendor } from "@/modules/dashboard/projects/Services/FetchAllVendors";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import PostNewTaskForm, { TaskRequestPayload } from "@/modules/dashboard/projects/Services/PostNewTaskFormData";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PropsType {
    UnitsArray: Unit[];
    vendorsArray: Vendor[];
    PMsArray: PM[];
    job: JobByUUID;
    project: ProjectByUUID;
    setShowTaskCreationForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function TaskCreation({ vendorsArray, UnitsArray, PMsArray, job, project, setShowTaskCreationForm }: PropsType) {
    const [taskSuccess, setTaskSuccess] = useState<boolean>(false);
    const [showSuccessBanner, setshowSuccessBanner] = useState<boolean>(false);

    const router = useRouter();
    /**
     *
     * @param data
     * @param value
     * @param selectedProjectId
     */

    async function postTaskForm(data: TaskRequestPayload) {
        try {
            const postReqResponse = await PostNewTaskForm(data);

            if (postReqResponse.data.data !== undefined && postReqResponse.data.success) {
                const projectData = postReqResponse.data.data;

                // router.push(`?taskId=${projectData.id}&taskName=${projectData.name}`);
                router.replace(`/dashboard/projects/${project.uuid}/jobs/${job.uuid}`);
                setTaskSuccess(true);
                // setshowSuccessBanner(true);

                console.log("from If success ==>");

                const message = postReqResponse.data.message;
                const success = postReqResponse.data.success;
                console.log(projectData);
                console.log(message);
                console.log(success);

                console.log("...Task ==> POST Req Sent Successfully ^__^ ", "POSTED Successfully");
            }
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    }

    return (
        <>
            {/* <FormSuccessBanner
                successState={taskSuccess}
                successMessagetext={"Task"}
                createButtonText={"task"}
                createButtonURL={`/dashboard/projects`}
                viewButtonText={"tasks"}
                listButtonURL={"/dashboard/projects"}
            /> */}
            {!taskSuccess && (
                <TaskCreationForm
                    vendors={vendorsArray}
                    postFunc={postTaskForm}
                    units={UnitsArray}
                    PMs={PMsArray}
                    job={job}
                    setShowTaskCreationForm={setShowTaskCreationForm}
                />
            )}
        </>
    );
}

export default TaskCreation;
