import { IconChevronDown } from "@tabler/icons-react";
import { Group, Tree, TreeNodeData } from "@mantine/core";
// import { data } from "./data";

function FileManager() {
    const data: TreeNodeData[] = [];
    return (
        <>
            <section>
                <Tree
                    data={data}
                    levelOffset={23}
                    renderNode={({ node, expanded, hasChildren, elementProps }) => (
                        <Group gap={5} {...elementProps}>
                            {hasChildren && (
                                <IconChevronDown
                                    size={18}
                                    style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                                />
                            )}

                            <span>{node.label}</span>
                        </Group>
                    )}
                />
            </section>
        </>
    );
}

export default FileManager;
