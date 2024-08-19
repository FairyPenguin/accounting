import { Breadcrumbs, Anchor } from "@mantine/core";
import { IconArrowBigRightLine, IconArrowMoveRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export interface ProjectBreadcrumbsProps {
    // title: string;
    // href: string;
    projectId: string;
    projectName: string;
    projectURL: string;
    jobName?: string;
    jobURL?: string;
    taskName?: string;
    taskURL?: string;
    indexLevel: number;
}

// optional type if job if task if project other types not working union discrmination josh kan 3amlaha

export default function ProjectBreadcrumbs({
    indexLevel,
    projectId,
    projectName,
    projectURL,
    jobName,
    jobURL,
    taskName,
    taskURL,
}: ProjectBreadcrumbsProps) {
    const [pathIndex, setPathIndex] = useState<number>(0);
    //
    // console.log(pathIndex);

    const items = [
        //
        { title: "Projects", href: "/dashboard/projects" },
        {
            title: `${projectName}`,
            href: `${`/dashboard/projects/${projectURL}?projectId=${projectId}&projectName=${projectName}`}`,
        },
        {
            title: `${jobName ? jobName : ""}`,
            href: `${jobURL ? `/dashboard/projects/${projectURL}/jobs/${jobURL}` : ""}`,
        },
        {
            title: `${taskName ? taskName : ""}`,
            href: `${taskURL ? `/dashboard/projects/${projectURL}/jobs/${jobURL}/tasks/${taskURL}` : ""}`,
        },
        //
    ].map((item, index) => {
        if (item.href !== "") {
            return (
                <Link
                    onClick={() => setPathIndex(index)}
                    className={`font-bold ${indexLevel === index ? "text-purple-900 underline underline-offset-2" : "text-purple-500"}`}
                    href={item.href}
                    key={index}
                >
                    {item.title}
                </Link>
            );
        }
        return null;
    });

    return (
        <>
            <div className="flex items-center h-8 px-4 py-2 mb-3 bg-slate-100 rounded-sm w-full">
                <Breadcrumbs separator={<IconArrowMoveRight />}>{items}</Breadcrumbs>
            </div>
        </>
    );
}
