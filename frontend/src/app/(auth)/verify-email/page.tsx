"use client";

import Image from "next/image";
import Link from "next/link";

const VerifyEmail = () => {
    return (
        <section className="container absolute inset-0 m-auto mx-auto max-w-md rounded-lg bg-white p-7 shadow-md sm:h-fit">
            <div className="flex justify-center pb-10">
                <Link href="/" className="main-logo flex shrink-0 items-center pl-5">
                    <Image
                        src={"/assets/images/logo.svg"}
                        className="inline w-16 ltr:-ml-1 rtl:-mr-1 sm:w-12 md:w-10"
                        alt="logo"
                        width="100"
                        height="100"
                    />
                    <span className="align-middle text-2xl font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </span>
                </Link>
            </div>

            <h1 className="my-4 text-lg font-extrabold">Verify Your Email</h1>
            <p className="pb-3 text-base font-medium text-gray-600">
                Thanks for registration! <br />
                Please, check your mailbox for email verification link.
            </p>

            {/* Redirect Button */}
            <div className="mt-6 flex justify-center">
                <Link href="/log-in">
                    <p className="rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700">
                        Redirect to Login Page
                    </p>
                </Link>
            </div>
        </section>
    );
};

export default VerifyEmail;
