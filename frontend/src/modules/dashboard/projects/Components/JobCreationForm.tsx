"use client";
// Imports
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DropDownSelect from "../FormFieldsComponents/DropDownSelect";
import TextInput from "../FormFieldsComponents/TextInput";
import DatePickerInput from "../FormFieldsComponents/DatePickerInput";
import TextAreaInput from "../FormFieldsComponents/TextAreaInput";
import NumericInput from "../FormFieldsComponents/NumericInput";
import DropDownMultipleSelect from "../FormFieldsComponents/DropDownMultipleSelect";
import { type Client } from "../Services/FetchAllClients";
import { Unit } from "../Services/FetchAllCalculationUnits";
import { Language } from "../Services/FetchAllLangs";
import { Speciality } from "../Services/FetchAllSpecializations";
import { Currency } from "../Services/FetchAllCurrencies";
import { ClientService } from "../Services/FetchAllClientServices";
import { Country } from "../Services/FetchAllCountries";
import PostNewJobFormData from "../Services/PostNewJobFormData";
import { Project } from "../Services/FetchAllProjects";
import Link from "next/link";
import { ProjectByUUID } from "../Services/FetchSingleProjectByUUID";
import { useRouter } from "next/navigation";

export type JobInputs = {
    name: string;
    startDate: string;
    endDate: string;
    projectId: number;
    targetLanguageIds: number[];
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
    clientId: number;
    deadline: string;
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
    setShowJobCreationForm: React.Dispatch<React.SetStateAction<boolean>>;
    project: ProjectByUUID;
    clients: Client[];
    units: Unit[];
    languages: Language[];
    specializations: Speciality[];
    currencies: Currency[];
    clientServices: ClientService[];
    countries: Country[];
    projects?: Project[];
    projectId: number;
    projectName: string;
    pathNameIncludsProjectUUID: string;
    postFunc: (
        data?: any,
        value?: any,
        responseData?: any,
        setResponseData?: any,
        setProjectSuccess?: any,
    ) => Promise<void>;
};

export default function JobCreationForms({
    project,
    clients,
    units,
    specializations,
    languages,
    currencies,
    clientServices,
    countries,
    postFunc,
    projectId,
    projectName,
    pathNameIncludsProjectUUID,
    projects,
    setShowJobCreationForm,
}: Props) {
    const [value, setValue] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<JobInputs>();

    const router = useRouter();
    // langs data filtered
    // const projectIdValueCheck = projectId === undefined || projectId === null || projectId === 0 ? false : true;

    const languagesFilteredData = languages.map((language) => {
        return { value: language.id, label: language.name };
    });

    const onSubmit: SubmitHandler<JobInputs> = async (data) => {
        const selectedProjectId = data.projectId;
        postFunc(data, value, selectedProjectId);
    };

    const ProjectURL = `${pathNameIncludsProjectUUID}?projectId=${projectId}&projectName=${projectName}`;

    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">Create New Job</h1>
            </section>

            <section className="max-w-screen container p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
                    <div className="space-y-12">
                        {/* JOB INFO SECTION */}
                        <div className="Jobs Info border-b border-gray-900/10 bg-white px-6 py-4 pb-12 ">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Jobs Info</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

                                {/* Client Service */}

                                <DropDownSelect
                                    label={"Client Service"}
                                    htmlFor={"client-service"}
                                    id={"client-service"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"serviceId"}
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

                                <DropDownSelect
                                    label={"Client Service Checklist "}
                                    htmlFor={"client-service"}
                                    id={"client-service"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"clientServiceChekclist"}
                                ></DropDownSelect>

                                {/* Project Name */}

                                <TextInput
                                    label={"Job Name"}
                                    htmlFor={"project-name"}
                                    id={"project-name"}
                                    widthClass={"sm:col-span-5"}
                                    register={register}
                                    registerName={"name"}
                                />

                                {/* Source Language && Target Language(s) */}

                                <DropDownSelect
                                    label={"Source Language "}
                                    htmlFor={"source-language"}
                                    id={"source-language"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"sourceLanguageId"}
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
                                />

                                {/* Tools */}

                                <DropDownSelect
                                    label={"Tools "}
                                    htmlFor={"tools"}
                                    id={"source-language"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"tools"}
                                >
                                    {""}
                                </DropDownSelect>

                                <div className="flex gap-2 sm:col-span-4">
                                    <NumericInput
                                        label={"Quantity"}
                                        htmlFor={"quantity"}
                                        id={"quantity"}
                                        widthClass={"sm:col-span-2"}
                                        register={register}
                                        registerName={"workQuantity"}
                                    />
                                    <DropDownSelect
                                        label={"Quantity Extention"}
                                        htmlFor={"quantity-extention"}
                                        id={"quantity-extention"}
                                        widthClass={"sm:col-span-2"}
                                        register={register}
                                        registerName={"calculationUnitId"}
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
                                />

                                <DatePickerInput
                                    label={"Job Deadline"}
                                    htmlFor={"job-deadline"}
                                    id={"job-deadline"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"endDate"}
                                />

                                {/* Job Instructions */}
                                <TextAreaInput
                                    label={"Job Instructions"}
                                    htmlFor={"job-instructions"}
                                    id={"job-instructions"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"jobInstructions"}
                                />
                            </div>
                        </div>

                        {/* Team Info  */}

                        <div className="team-info rounded-md border-b border-gray-900/10 bg-white px-6 py-4 pb-12">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Team Info</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Primary PM */}
                                <DropDownSelect
                                    label={"Primary PM "}
                                    htmlFor={"primary-pm"}
                                    id={"primary-pm"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"primaryPMId"}
                                >
                                    <option key={1} value="1">
                                        1
                                    </option>
                                </DropDownSelect>

                                {/* Secondary PM */}
                                <DropDownSelect
                                    label={"Secondary PM "}
                                    htmlFor={"secondary-pm"}
                                    id={"secondary-pm"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"secondaryPM"}
                                >
                                    {""}
                                </DropDownSelect>

                                {/* Sales Person && Account Manager */}

                                <DropDownSelect
                                    label={"Sales Person"}
                                    htmlFor={"sales-person"}
                                    id={"sales-person"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"salesPerson"}
                                >
                                    {""}
                                </DropDownSelect>

                                <DropDownSelect
                                    label={"Account Manager"}
                                    htmlFor={"account-manager"}
                                    id={"account-manager"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"accountManager"}
                                >
                                    {""}
                                </DropDownSelect>
                            </div>
                        </div>

                        {/* Pricing Info  */}

                        <div className="pricing-info rounded-md border-b border-gray-900/10 bg-white px-6 py-4 pb-12">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Pricing Info</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* total price */}
                                <NumericInput
                                    label={"Total Price"}
                                    htmlFor={"total-price"}
                                    id={"total-price"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"totalPrice"}
                                />

                                {/* Unit Price */}
                                <NumericInput
                                    label={"Unit Price"}
                                    htmlFor={"unit-price"}
                                    id={"unit-price"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"unitPrice"}
                                />

                                <DropDownSelect
                                    label={"Currency "}
                                    htmlFor={"currency"}
                                    id={"currency"}
                                    widthClass={"sm:col-span-2"}
                                    register={register}
                                    registerName={"currency"}
                                >
                                    {currencies ? (
                                        currencies.map((currency, index) => {
                                            return <option key={index}>{currency.name}</option>;
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>
                            </div>
                        </div>

                        {/* Tasks Info  */}

                        <div className="tasks-info rounded-md border-b border-gray-900/10 bg-white px-6 py-4 pb-12">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Tasks Info</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* In-House Service(s) && Freelancer Service(s)*/}
                                <DropDownSelect
                                    label={"In House Service(S) "}
                                    htmlFor={"freelancer-service"}
                                    id={"freelancer-service"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"freelancerService"}
                                >
                                    {""}
                                </DropDownSelect>

                                <DropDownSelect
                                    label={"Freelancer Service(s)"}
                                    htmlFor={"inhouse-service"}
                                    id={"inhouse-service"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"inHouseService"}
                                >
                                    {""}
                                </DropDownSelect>

                                <TextAreaInput
                                    label={"In-House Task Instructions"}
                                    htmlFor={"inhouse-task-instructions"}
                                    id={"inhouse-task-instructions"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"inHouseTaskInstructions"}
                                />

                                <TextAreaInput
                                    label={"Freelancer Task Instructions"}
                                    htmlFor={"freelancer-task-instructions"}
                                    id={"freelancer-task-instructions"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"freelancerTaskInstructions"}
                                />
                            </div>
                        </div>

                        {/* End >> of >> Sections >> */}
                        {/* ------------BUTTONS------------ */}

                        <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                            {/* Cancel Button */}

                            <button
                                type="button"
                                className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                                onClick={() => {
                                    setShowJobCreationForm(false);
                                }}
                            >
                                <span>Cancel</span>
                            </button>

                            {/* Create Button */}

                            <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                                Create
                            </button>
                        </div>

                        {/* ------------BUTTONS------------ */}
                    </div>
                </form>
            </section>
        </>
    );
}
