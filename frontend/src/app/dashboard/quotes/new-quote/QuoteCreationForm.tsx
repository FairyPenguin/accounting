"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Account } from "@/modules/dashboard/projects/Services/FetchAllAccounts";
import { Unit } from "@/modules/dashboard/projects/Services/FetchAllCalculationUnits";
import { ClientService } from "@/modules/dashboard/projects/Services/FetchAllClientServices";
import { PM } from "@/modules/dashboard/projects/Services/FetchAllPMs";
import { Client } from "@/modules/dashboard/projects/Services/FetchAllClients";
import { QuoteResponsePayload } from "@/modules/dashboard/quotes/Services/PostNewQuoteForm";
import { useState } from "react";
import DatePickerInput from "@/modules/dashboard/projects/FormFieldsComponents/DatePickerInput";
import DropDownMultipleSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownMultipleSelect";
import DropDownSelect from "@/modules/dashboard/projects/FormFieldsComponents/DropDownSelect";
import NumericInput from "@/modules/dashboard/projects/FormFieldsComponents/NumericInput";
import TextAreaInput from "@/modules/dashboard/projects/FormFieldsComponents/TextAreaInput";
import { Language } from "@/modules/dashboard/projects/Services/FetchAllLangs";
import TextInput from "@/modules/dashboard/projects/FormFieldsComponents/TextInput";
import { Speciality } from "@/modules/dashboard/projects/Services/FetchAllSpecializations";
import Link from "next/link";

export type NewQuoteFormInputs = {
    name: string;
    startDate: Date;
    endDate: string;
    quoteId: number;
    targetLanguageId: number;
    sourceLanguageId: number;
    calculationUnitId: number;
    workQuantity: number;
    serviceId: number;
    jobInstructions: string;
    clientId: number;
    deadline: Date;
    quotationDate: Date;
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
    clientServices: ClientService[];
    accounts: Account[];
    PMs: PM[];
    specializations: Speciality[];
    postFunc: (
        data?: any,
        value?: any,
        responseData?: any,
        setResponseData?: any,
        setProjectSuccess?: any,
    ) => Promise<void>;
};

function QuoteCreationForm({
    specializations,
    clients,
    units,
    languages,
    clientServices,
    accounts,
    PMs,
    postFunc,
}: Props) {
    const [value, setValue] = useState<string[]>([]);
    const [responseData, setResponseData] = useState<QuoteResponsePayload>();
    const [projectSuccess, setProjectSuccess] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<NewQuoteFormInputs>();

    const onSubmit: SubmitHandler<NewQuoteFormInputs> = async (data) => {
        console.log(data);
        postFunc(data, value, responseData, setResponseData, setProjectSuccess);
    };

    // const languagesFilteredData = languages.map((language) => {
    //     return { value: language.id, label: language.name };
    // });

    return (
        <>
            <section className="max-w-screen container p-5">
                <h1 className="pb-6 text-3xl">Create New Quote</h1>
            </section>

            <section className="max-w-screen container p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl space-y-4">
                    <div className="space-y-12">
                        {/* JOB INFO SECTION */}
                        <div className="Jobs Info border-b border-gray-900/10 bg-white px-6 py-4 pb-12 ">
                            {/* <h2 className="text-2xl font-semibold leading-7 text-gray-900">Jobs Info</h2> */}

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
                                    {PMs ? (
                                        PMs.map((PM, _index) => {
                                            // Get Pm fullname
                                            const pmFullName = PM.firstName + " " + PM.lastName;

                                            return (
                                                <option
                                                    //  key={index}
                                                    key={PM.id}
                                                    value={PM.id}
                                                >
                                                    {pmFullName}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>

                                <TextInput
                                    label={"Quote Name"}
                                    htmlFor={"quote-name"}
                                    id={"quote-name"}
                                    widthClass={"col-span-full"}
                                    register={register}
                                    registerName={"name"}
                                />

                                {/* Client Dropdown */}
                                <DropDownSelect
                                    label={"Client"}
                                    htmlFor={"client"}
                                    id={"client"}
                                    widthClass={"col-span-3"}
                                    register={register}
                                    registerName={"clientId"}
                                >
                                    {clients ? (
                                        clients.map((client, _index) => {
                                            return (
                                                <option
                                                    //  key={index}
                                                    key={client.id}
                                                    value={client.id}
                                                >
                                                    {client.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>

                                {/* Client Service */}
                                <DropDownSelect
                                    label={"Client Service"}
                                    htmlFor={"client-service"}
                                    id={"client-service"}
                                    widthClass={"col-span-3"}
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
                                {/* Account DropDown*/}

                                <DropDownSelect
                                    label={"Account"}
                                    htmlFor={"account"}
                                    id={"account"}
                                    widthClass={"col-span-3"}
                                    register={register}
                                    registerName={"account"}
                                >
                                    {accounts ? (
                                        accounts.map((account) => {
                                            return (
                                                <option value={account.id} key={account.id}>
                                                    {account.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>

                                {/* Specialization DropDown*/}

                                <DropDownSelect
                                    label={"Specialization"}
                                    htmlFor={"specialization"}
                                    id={"specialization"}
                                    widthClass={"md:col-span-2"}
                                    register={register}
                                    registerName={"specializationId"}
                                >
                                    {specializations ? (
                                        specializations.map((speciality) => {
                                            return (
                                                <option value={speciality.id} key={speciality.id}>
                                                    {speciality.name}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option>No Resposne From the Server</option>
                                    )}
                                </DropDownSelect>

                                {/* Source Language && Target Language(s) */}
                                <DropDownSelect
                                    label={"Source Language "}
                                    htmlFor={"source-language"}
                                    id={"source-language"}
                                    widthClass={"sm:col-span-3"}
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

                                <DropDownSelect
                                    label={"Target Language "}
                                    htmlFor={"target-language"}
                                    id={"target-language"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"targetLanguageId"}
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

                                {/* Quantity */}

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
                                    label={"End Date"}
                                    htmlFor={"job-deadline"}
                                    id={"job-deadline"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"endDate"}
                                />

                                <DatePickerInput
                                    label={"Quotation Deadline"}
                                    htmlFor={"quotation-deadline"}
                                    id={"quotation-deadline"}
                                    widthClass={"sm:col-span-3"}
                                    register={register}
                                    registerName={"quotationDate"}
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

                        {/* Pricing Info  */}

                        {/* End >> of >> Sections >> */}
                        {/* ------------BUTTONS------------ */}

                        <div className="mt-4 flex justify-end space-x-4 border-t border-gray-900/10 pb-12 pt-4">
                            {/* Cancel Button */}

                            <button
                                type="button"
                                className="rounded-md bg-gray-300 px-4 py-2 shadow-sm"
                                // onClick={handleReset}
                            >
                                <Link href={"/dashboard/quotes"}>Cancel</Link>
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

export default QuoteCreationForm;
