"use client";

import { EditCatTool } from "@/modules/dashboard/settings/system-values/basic/cat-tools/components/EditCatTool";
import { EditCATToolPageProps } from "@/modules/dashboard/settings/system-values/basic/cat-tools/interfaces";

const EditCATToolPage: React.FC<EditCATToolPageProps> = ({ params: { toolId } }) => {
    return <EditCatTool toolId={String(toolId)} />;
};

export default EditCATToolPage;
