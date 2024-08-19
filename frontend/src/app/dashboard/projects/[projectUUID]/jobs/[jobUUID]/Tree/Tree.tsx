import { IconFolder, IconFolderOpen } from "@tabler/icons-react";
import { Group, RenderTreeNodePayload, Tree } from "@mantine/core";
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from "@mantinex/dev-icons";
// import  data  from "./data.json";
import classes from "./Tree.module.css";
import { ChildFolder, FolderTree } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";

interface FileIconProps {
    name: string;
    isFolder: boolean;
    expanded: boolean;
}

// interface TreeNodeData {
//     label: React.ReactNode;
//     value: string;
//     nodeProps?: Record<string, any>;
//     children?: TreeNodeData[];
// }

// Define the TreeNodeData interface extending ChildFolder
// interface TreeNodeData extends FolderTree {
//     label: React.ReactNode;
//     value: string;
//     nodeProps?: Record<string, any>;
//     children?: TreeNodeData[];
// }

const data = [
    {
        id: "2",
        uuid: "4c5cea68-8209-492e-b7e0-b49dbd2152fe",
        createdAt: "2024-08-12T13:46:51.092Z",
        updatedAt: "2024-08-12T13:46:51.092Z",
        name: "Project1",
        slug: "Project1",
        tenantId: "1",
        path: "/root#1/Project1",
        parentId: "1",
        createdById: "2",
        referenceType: "project",
        referenceId: "1",
        deletedAt: null,
        label: "Project1",
        value: "/root#1/Project1",
        children: [
            {
                id: "302",
                uuid: "f27d4b62-2275-45b6-a0a2-d4c6d9f6c1fb",
                name: "Nested Folder Layer#6",
                slug: "Nested-Folder Layer#6",
                path: "/root#1/Project1/Nested-Folder Layer#6",
                parentId: "2",
                label: "Nested Folder Layer#6",
                value: "/root#1/Project1/Nested-Folder Layer#6",
                children: [
                    {
                        id: "302",
                        uuid: "f27d4b62-2275-45b6-a0a2-d4c6d9f6c1fb",
                        name: "Nested Folder Layer#6",
                        slug: "Nested-Folder Layer#6",
                        path: "/root#1/Project1/Nested-Folder Layer#6",
                        parentId: "2",
                        label: "Nested Folder Layer#6666",
                        value: "/root#1/Project1/Nested-Folder Layer#6666",
                        children: [
                            {
                                id: "302",
                                uuid: "f27d4b62-2275-45b6-a0a2-d4c6d9f6c1fb",
                                name: "Nested Folder Layer#6",
                                slug: "Nested-Folder Layer#6",
                                path: "/root#1/Project1/Nested-Folder Layer#6",
                                parentId: "2",
                                label: "Nested Folder Layer#7777",
                                value: "/root#1/Project1/Nested-Folder Layer#7777",
                                children: [
                                    {
                                        id: "302",
                                        uuid: "f27d4b62-2275-45b6-a0a2-d4c6d9f6c1fb",
                                        name: "Nested Folder Layer#6",
                                        slug: "Nested-Folder Layer#6",
                                        path: "/root#1/Project1/Nested-Folder Layer#6",
                                        parentId: "2",
                                        label: "Nested Folder Layer#6",
                                        value: "/root#1/Project1/Nested-Folder Layer#6",
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: "303",
                uuid: "2092cf08-993c-4b24-b13a-5327456d8a49",
                name: "Nested Folder Layer#5",
                slug: "Nested-Folder Layer#5",
                path: "/root#1/Project1/Nested-Folder Layer#5",
                parentId: "2",
                label: "Nested Folder Layer#5",
                value: "/root#1/Project1/Nested-Folder Layer#5",
            },
            {
                id: "304",
                uuid: "fe9d49e4-9fff-4d76-b535-496af37cbd0f",
                name: "Nested Folder Layer#4",
                slug: "Nested-Folder Layer#4",
                path: "/root#1/Project1/Nested-Folder Layer#4",
                parentId: "2",
                label: "Nested Folder Layer#4",
                value: "/root#1/Project1/Nested-Folder Layer#4",
            },
            {
                id: "305",
                uuid: "6206cdde-ea5a-4ab9-9ac5-cb4484591ec6",
                name: "Nested Folder Layer#3",
                slug: "Nested-Folder Layer#3",
                path: "/root#1/Project1/Nested-Folder Layer#3",
                parentId: "2",
                label: "Nested Folder Layer#3",
                value: "/root#1/Project1/Nested-Folder Layer#3",
            },
            {
                id: "306",
                uuid: "07692d1a-e05a-4729-bd21-7a8c076bfc8b",
                name: "Nested Folder Layer#2",
                slug: "Nested-Folder Layer#2",
                path: "/root#1/Project1/Nested-Folder Layer#2",
                parentId: "2",
                label: "Nested Folder Layer#2",
                value: "/root#1/Project1/Nested-Folder Layer#2",
            },
            {
                id: "307",
                uuid: "5afc1796-cc9d-4af9-9493-2218f6bc549d",
                name: "Nested Folder Layer#1",
                slug: "Nested-Folder Layer#1",
                path: "/root#1/Project1/Nested-Folder Layer#1",
                parentId: "2",
                label: "Nested Folder Layer#1",
                value: "/root#1/Project1/Nested-Folder Layer#1",
            },
        ],
    },
];

function FileIcon({ name, isFolder, expanded }: FileIconProps) {
    if (name.endsWith("package.json")) {
        return <NpmIcon size={14} />;
    }

    if (name.endsWith(".ts") || name.endsWith(".tsx") || name.endsWith("tsconfig.json")) {
        return <TypeScriptCircleIcon size={14} />;
    }

    if (name.endsWith(".css")) {
        return <CssIcon size={14} />;
    }

    if (isFolder) {
        return expanded ? (
            <IconFolderOpen color="var(--mantine-color-grape-9)" size={16} stroke={2.5} />
        ) : (
            <IconFolder color="var(--mantine-color-grape-9)" size={16} stroke={2.5} />
        );
    }

    return null;
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
    return (
        <Group gap={5} {...elementProps}>
            <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />
            <span>{node.label}</span>
        </Group>
    );
}

export default function TreeC() {
    return (
        <Tree
            classNames={classes}
            selectOnClick
            clearSelectionOnOutsideClick
            data={data}
            renderNode={(payload) => <Leaf {...payload} />}
        />
    );
}
