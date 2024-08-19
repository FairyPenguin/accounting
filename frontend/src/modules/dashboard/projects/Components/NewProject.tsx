import React, { useState } from "react";

interface DropdownOption {
    id: number;
    name: string;
}

interface FormProps {
    clients?: DropdownOption[];
    contactPersons?: DropdownOption[];
    languagePairs?: DropdownOption[];
    specializations?: DropdownOption[];
    managers?: DropdownOption[];
}

const defaultData = {
    clients: [
        { id: 1, name: "Client A" },
        { id: 2, name: "Client B" },
        { id: 3, name: "Client C" },
    ],
    contactPersons: [
        { id: 1, name: "Contact Person A" },
        { id: 2, name: "Contact Person B" },
        { id: 3, name: "Contact Person C" },
    ],
    languagePairs: [
        { id: 1, name: "English -> Spanish" },
        { id: 2, name: "French -> German" },
        { id: 3, name: "Chinese -> Japanese" },
    ],
    specializations: [
        { id: 1, name: "Legal" },
        { id: 2, name: "Medical" },
        { id: 3, name: "Technical" },
    ],
    managers: [
        { id: 1, name: "Manager A" },
        { id: 2, name: "Manager B" },
        { id: 3, name: "Manager C" },
    ],
};

export const NewProject: React.FC<FormProps> = ({
    clients = defaultData.clients,
    contactPersons = defaultData.contactPersons,
    languagePairs = defaultData.languagePairs,
    specializations = defaultData.specializations,
    managers = defaultData.managers,
}) => {
    const [selectedClient, setSelectedClient] = useState<string>("");
    const [selectedContactPerson, setSelectedContactPerson] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [selectedLanguagePair, setSelectedLanguagePair] = useState<string>("");
    const [selectedSpecialization, setSelectedSpecialization] = useState<string>("");
    const [selectedPrimaryManager, setSelectedPrimaryManager] = useState<string>("");
    const [selectedSecondaryManager, setSelectedSecondaryManager] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [internalNote, setInternalNote] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Process form data here
        console.log({
            selectedClient,
            selectedContactPerson,
            name,
            description,
            selectedLanguagePair,
            selectedSpecialization,
            selectedPrimaryManager,
            selectedSecondaryManager,
            startDate,
            deadline,
            internalNote,
        });
    };

    const handleReset = () => {
        // Reset form fields here
    };

    return (
        <div className="max-w-screen container p-5">
            <label htmlFor="client" className="mb-6 block text-lg font-extrabold">
                New Project
            </label>
            <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-4">
                <div>
                    <select
                        id="client"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}
                    >
                        {clients.map((client) => (
                            <option key={client.id} value={client.name}>
                                {client.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="contactPerson" className="mb-2 block">
                        Client Contact Person
                    </label>
                    <select
                        id="contactPerson"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={selectedContactPerson}
                        onChange={(e) => setSelectedContactPerson(e.target.value)}
                    >
                        {contactPersons.map((person) => (
                            <option key={person.id} value={person.name}>
                                {person.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="name" className="mb-2 block">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="mb-2 block">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="languagePairs" className="mb-2 block">
                        Language Pairs
                    </label>
                    <select
                        id="languagePairs"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={selectedLanguagePair}
                        onChange={(e) => setSelectedLanguagePair(e.target.value)}
                    >
                        {languagePairs.map((pair) => (
                            <option key={pair.id} value={pair.name}>
                                {pair.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="specialization" className="mb-2 block">
                        Specialization
                    </label>
                    <select
                        id="specialization"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={selectedSpecialization}
                        onChange={(e) => setSelectedSpecialization(e.target.value)}
                    >
                        {specializations.map((specialization) => (
                            <option key={specialization.id} value={specialization.name}>
                                {specialization.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="primaryManager" className="mb-2 block">
                        Primary Manager
                    </label>
                    <select
                        id="primaryManager"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={selectedPrimaryManager}
                        onChange={(e) => setSelectedPrimaryManager(e.target.value)}
                    >
                        {managers.map((manager) => (
                            <option key={manager.id} value={manager.name}>
                                {manager.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="secondaryManager" className="mb-2 block">
                        Secondary Manager
                    </label>
                    <select
                        id="secondaryManager"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={selectedSecondaryManager}
                        onChange={(e) => setSelectedSecondaryManager(e.target.value)}
                    >
                        {managers.map((manager) => (
                            <option key={manager.id} value={manager.name}>
                                {manager.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="startDate" className="mb-2 block">
                        Start At
                    </label>
                    <input
                        id="startDate"
                        type="date"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="deadline" className="mb-2 block">
                        Deadline At
                    </label>
                    <input
                        id="deadline"
                        type="date"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="internalNote" className="mb-2 block">
                        Internal Note
                    </label>
                    <textarea
                        id="internalNote"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                        value={internalNote}
                        onChange={(e) => setInternalNote(e.target.value)}
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button type="button" className="rounded-md bg-gray-300 px-4 py-2 shadow-sm" onClick={handleReset}>
                        Cancel
                    </button>
                    <button type="submit" className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};
