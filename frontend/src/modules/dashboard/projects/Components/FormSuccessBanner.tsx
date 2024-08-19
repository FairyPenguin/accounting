"use client";

import Link from "next/link";
import { useEffect } from "react";

interface FormSuccessProps {
    successMessagetext: string;
    createButtonText: string;
    successState: boolean;
    createButtonURL: string;
    listButtonURL: string;
    viewButtonText: string;
}

function FormSuccessBanner({
    successMessagetext,
    successState,
    createButtonText,
    createButtonURL,
    listButtonURL,
    viewButtonText,
}: FormSuccessProps) {
    // useEffect(() => {
    //     window.scrollTo(0, 0);

    //     if (successState) {
    //         const showTimer = setTimeout(() => {
    //             setSuccessFunc(false);
    //         }, 10000);

    //         return () => {
    //             clearTimeout(showTimer);
    //         };
    //     }
    // }, [setSuccessFunc, successState]);

    return (
        <>
            {successState && (
                <div className="max-w-screen container mb-8 mt-8 max-w-2xl bg-green-100 px-4  py-4">
                    {/* flex container */}
                    <div className="flex items-start justify-start	gap-4">
                        {/* icon wrapper */}
                        <div className="  	">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="green"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* text & buttons Wrapper */}
                        <div className="space-y-2">
                            {/* heading */}

                            <h2 className="text-xl font-extrabold text-green-800">Success</h2>
                            {/* description */}
                            <div>
                                {/* description Text*/}

                                <p className="text-lg text-green-700">
                                    <br />
                                    {successMessagetext} Created Successfuly.
                                </p>
                            </div>

                            {/* buttons flex container */}
                            <div className="flex items-center gap-8 pt-3">
                                <button
                                    className='focus-visible:outline-green-300" rounded-md 
         bg-green-400
         px-2 py-1.5 text-lg  font-semibold text-green-800 hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                >
                                    <Link href={createButtonURL}>Create new {createButtonText}</Link>
                                </button>

                                <button
                                    className='focus-visible:outline-green-300" rounded-md 
                                    bg-green-400
                                    px-2 py-1.5 text-lg  font-semibold text-green-800 hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                >
                                    <Link href={listButtonURL}>View {viewButtonText} list</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FormSuccessBanner;
