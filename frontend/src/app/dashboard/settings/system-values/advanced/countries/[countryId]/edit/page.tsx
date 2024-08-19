"use client";

import { EditCountry } from "@/modules/dashboard/settings/system-values/advanced/countries/components/EditCountry";
import { EditCountryPageProps } from "@/modules/dashboard/settings/system-values/advanced/countries/interfaces";

const EditCountryPage: React.FC<EditCountryPageProps> = ({ params: { countryId } }) => {
    return <EditCountry countryId={String(countryId)} />;
};

export default EditCountryPage;
