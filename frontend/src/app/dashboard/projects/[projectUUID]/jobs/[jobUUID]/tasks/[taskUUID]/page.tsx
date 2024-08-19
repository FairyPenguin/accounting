import getSingleTaskByUUID from "@/modules/dashboard/projects/Services/FetchSingleTaskByUUID";
import TaskView from "./TaskView";
import getSingleProjectByUUID from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import vendorsFetcher from "@/modules/dashboard/projects/Services/FetchAllVendors";
import getSingleJobByUUID from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";

export default async function page({
    params,
}: {
    params: {
        projectUUID: string;
        jobUUID: string;
        taskUUID: string;
    };
}) {
    //
    const projectUUID = params.projectUUID;
    const jobUUID = params.jobUUID;
    const taskUUID = params.taskUUID;
    const taskData = await getSingleTaskByUUID(taskUUID);
    const projectData = (await getSingleProjectByUUID(projectUUID)).data.data;
    const jobData = (await getSingleJobByUUID(jobUUID)).JobByUUID;
    const vendorsArray = await vendorsFetcher();

    if (!jobData) {
        console.error("Failed to fetch job data...");
        return "Failed to fetch job data...";
    }

    //
    return (
        <>
            {taskData && projectData ? (
                <TaskView
                    projectUUID={projectUUID}
                    jobUUID={jobUUID}
                    task={taskData}
                    project={projectData}
                    vendors={vendorsArray}
                    job={jobData}
                />
            ) : (
                <p className="font-semibold text-red-800">Failed to fetch task data...</p>
            )}
        </>
    );
}
