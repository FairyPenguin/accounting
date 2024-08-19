"use client";

import { EditLanguage } from "@/modules/dashboard/settings/system-values/advanced/languages/components/EditLanguage";
import { EditLanguagePageProps } from "@/modules/dashboard/settings/system-values/advanced/languages/interfaces";

const EditLanguagePage: React.FC<EditLanguagePageProps> = ({ params: { languageId } }) => {
    return <EditLanguage languageId={String(languageId)} />;
};

export default EditLanguagePage;
