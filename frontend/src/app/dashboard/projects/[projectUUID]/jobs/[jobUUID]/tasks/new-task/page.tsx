import unitsFetcher from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import TaskCreation from "./TaskCreation";
import vendorsFetcher from "@/modules/dashboard/projects/Services/FetchAllVendors";
import getAllPMs from "@/modules/dashboard/projects/Services/FetchAllPMs";

export default async function page() {
    // Form DropDown Inputs Props Data
    //--------------------//
    const UnitsArray = await unitsFetcher();
    const vendorsArray = await vendorsFetcher();
    const PMsArray = await getAllPMs();

    //--------------------//

    return <h1>NEW TASK PAGE Not Required in routing</h1>;
    // <TaskCreation PMsArray={PMsArray} UnitsArray={UnitsArray} vendorsArray={vendorsArray} />;
}
