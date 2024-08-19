"use client";
// Imports
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { Currency } from "@/modules/dashboard/projects/Services/FetchAllCurrencies";
import { Country } from "@/modules/dashboard/projects/Services/FetchAllCountries";
import { Project } from "@/modules/dashboard/projects/Services/FetchAllProjects";
import DropDownSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownSelect";
import TextInput from "@/modules/dashboard/projects/FormFieldsComponents/TextInput";
import DropDownMultipleSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownMultipleSelect";
import NumericInput from "@/modules/dashboard/projects/FormFieldsComponents/NumericInput";
import DatePickerInput from "@/modules/dashboard/projects/FormFieldsComponents/DatePickerInput";
import TextAreaInput from "@/modules/dashboard/projects/FormFieldsComponents/TextAreaInput";
import { useRouter } from "next/navigation";
import { ProjectByUUID } from "@/modules/dashboard/projects/Services/FetchSingleProjectByUUID";
import { JobByUUID } from "@/modules/dashboard/projects/Services/FetchSingleJobByUUID";
import DateFormatter from "@/shared/helpers/DateFormatter";
import { jobFormData } from "@/modules/dashboard/projects/Services/UpdateSingleJobByUUID";

export type JobInputs = {
    name: string;
    startDate: Date;
    endDate: string;
    projectId: number;
    targetLanguageIds: number[];
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
    clientId: number;
    deadline: Date;
    specializationId: number;
    account: string;
    clientService: string;
    clientServiceChecklist: string;
    jobName: string;
    tools: string;
    quantity: string;
    quantityExtention: string;
    durationDate: string;
    jobDeadline: string;
    primaryPMId: string;
    secondaryPM: string;
    salesPerson: string;
    accountManager: string;
    totalPrice: string;
    unitPrice: string;
    currency: string;
    inHouseService: string;
    freelancerService: string;
    inHouseTaskInstructions: string;
    freelancerTaskInstructions: string;
    [key: string]: string | number | string[] | number[] | Date;
};

type Props = {
    clients: Client[];
    units: Unit[];
    languages: Language[];
    specializations: Speciality[];
    currencies: Currency[];
    clientServices: ClientService[];
    countries: Country[];
    project: ProjectByUUID | undefined;
    job: JobByUUID;
    projects?: Project[];
    projectId: number;
    projectName: string;
    pathNameIncludsProjectUUID: string;
    updateJobFunc: (data: jobFormData, UUID: string) => void;
};

export default function JobEditingForm({
    clients,
    units,
    specializations,
    languages,
    currencies,
    clientServices,
    countries,
    updateJobFunc,
    // projectId,
    projectName,
    pathNameIncludsProjectUUID,
    projects,
    project,
    job,
}: Props) {
    // States
    /**
     *
     */
    const [value, setValue] = useState<string[]>([]);
    const [formValues, setFormValues] = useState();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        // getValues,
        formState: { errors },
    } = useForm<jobFormData>();

    if (!project) {
        return "error no project found";
    }

    console.log(project.id);

    const languagesFilteredData = languages.map((language) => {
        return { value: language.id, label: language.name };
    });

    const onSubmit: SubmitHandler<jobFormData> = async (data) => {
        if (project) {
            data.projectId = Number(project.id);
        }
        const idsToNumbers = value.map((id: any) => Number(id));
        data.targetLanguageIds = idsToNumbers;

        console.log(data);

        updateJobFunc(data, job.uuid);
    };

    function handleSubmitRegular(e: any) {
        e.preventDefault();

        // const payloadData = getValues();
        // console.log(payloadData);
        // updateJobFunc(payloadData, job.uuid);
    }

    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">Edit Job</h1>
            </section>

            <section className="max-w-screen container p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
                    <div className="space-y-12">
                        {/* JOB INFO SECTION */}
                        <div className="Jobs Info border-b border-gray-900/10 bg-white px-6 py-4 pb-12 ">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Job Info</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* {projectId && projectId !== 0 && projectName !== "" ? (
                                    <DropDownSelect
                                        label={"Project Name"}
                                        htmlFor={"project-name"}
                                        id={"project-name"}
                                        widthClass={"col-span-full"}
                                        register={register}
                                        registerName={"projectId"}
                                        disabled={true}
                                    >
                                        <option value={projectId}>{projectName}</option>
                                    </DropDownSelect>
                                ) : (
                                    "Project Not Found"
                                )} */}

                                <DropDownSelect
                                    label={"Project Name"}
                                    htmlFor={"project-name"}
                                    id={"project-name"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"projectId"}
                                    disabled={true}
                                >
                                    <option value={project.id}>{project.name}</option>
                                </DropDownSelect>

                                {/* Client Service */}

                                <DropDownSelect
                                    label={"Client Service"}
                                    htmlFor={"client-service"}
                                    id={"client-service"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"serviceId"}
                                    defaultValue={job.serviceId}
                                >
                                    {clientServices ? (
                                        clientServices.map((service) => {
                                            return (
                                                <option key={service.id} value={service.id}>
                                                    {service.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>

                                {/* Client Service Checklist*/}

                                {/* <DropDownSelect
                                    label={"Client Service Checklist "}
                                    htmlFor={"client-service"}
                                    id={"client-service"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"clientServiceChekclist"}
                                ></DropDownSelect> */}

                                {/* Project Name */}

                                <TextInput
                                    label={"Job Name"}
                                    htmlFor={"project-name"}
                                    id={"project-name"}
                                    widthClass={"sm:col-span-5"}
                                    register={register}
                                    registerName={"name"}
                                    defaultValue={job.name}
                                />

                                {/* Source Language && Target Language(s) */}

                                <DropDownSelect
                                    label={"Source Language "}
                                    htmlFor={"source-language"}
                                    id={"source-language"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"sourceLanguageId"}
                                    defaultValue={job.sourceLanguageId}
                                >
                                    {languages ? (
                                        languages.map((language) => {
                                            return (
                                                <option key={language.id} value={language.id}>
                                                    {language.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>

                                <DropDownMultipleSelect
                                    label={"Target Language "}
                                    htmlFor={"target-language"}
                                    id={"target-language"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"targetLanguageIds"}
                                    data={languagesFilteredData}
                                    value={value}
                                    setValue={setValue}
                                    // defaultValue={job.targetLanguageId}
                                />

                                {/* Tools */}

                                {/* <DropDownSelect
                                    label={"Tools "}
                                    htmlFor={"tools"}
                                    id={"source-language"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"tools"}
                                    defaultValue={job.}
                                ></DropDownSelect> */}

                                <div className="flex gap-2 sm:col-span-4">
                                    <NumericInput
                                        label={"Quantity"}
                                        htmlFor={"quantity"}
                                        id={"quantity"}
                                        widthClass={"sm:col-span-2"}
                                        register={register}
                                        registerName={"workQuantity"}
                                        defaultValue={String(job.workQuantity)}
                                    />
                                    <DropDownSelect
                                        label={"Quantity Extention"}
                                        htmlFor={"quantity-extention"}
                                        id={"quantity-extention"}
                                        widthClass={"sm:col-span-2"}
                                        register={register}
                                        registerName={"calculationUnitId"}
                                        defaultValue={job.calculationUnitId}
                                    >
                                        {units ? (
                                            units.map((unit) => {
                                                return (
                                                    <option key={unit.id} value={unit.id}>
                                                        {unit.name}
                                                    </option>
                                                );
                                            })
                                        ) : (
                                            <option>No Resposne From the Server</option>
                                        )}
                                    </DropDownSelect>
                                </div>

                                {/* <div className="sm:col-span-2"></div> */}

                                {/* Duration Date && Job Deadline */}

                                <DatePickerInput
                                    label={"Start Date"}
                                    htmlFor={"duration-date"}
                                    id={"duration-date"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"startDate"}
                                    defaultValue={DateFormatter(job.startDate)}
                                />

                                <DatePickerInput
                                    label={"Job Deadline"}
                                    htmlFor={"job-deadline"}
                                    id={"job-deadline"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"endDate"}
                                    defaultValue={DateFormatter(job.endDate)}
                                />

                                {/* Job Instructions */}
                                <TextAreaInput
                                    label={"Job Instructions"}
                                    htmlFor={"job-instructions"}
                                    id={"job-instructions"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"jobInstructions"}
                                    defaultValue={job.jobInstructions}
                                />
                            </div>
                        </div>

                        {/* Team Info  */}

                        {/* Pricing Info  */}

                        {/* Tasks Info  */}

                        {/* End >> of >> Sections >> */}
                        {/* ------------BUTTONS------------ */}

                        <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                            {/* Cancel Button */}

                            <button
                                type="button"
                                className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                                onClick={() => {
                                    router.back();
                                }}
                            >
                                <span>Cancel</span>
                            </button>

                            {/* Create Button */}

                            <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                                Update
                            </button>
                        </div>

                        {/* ------------BUTTONS------------ */}
                    </div>
                </form>
            </section>
        </>
    );
}
