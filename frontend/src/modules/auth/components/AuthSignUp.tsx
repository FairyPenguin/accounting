import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StartComponent } from "@/shared/components/Start";

export const AuthSignUpComponent: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        accountType: "",
        brandName: "",
        name: "",
        country: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        timezone: "",
        username: "",
        password: "",
        termsCheckbox: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = () => {
        setFormData({ ...formData, termsCheckbox: !formData.termsCheckbox });
    };

    const submitHandler = () => {
        router.push("/verify-email");
    };

    return (
        <div className="container m-auto mx-auto rounded-lg bg-white p-8 shadow-md sm:my-10 sm:h-fit">
            <div className="flex justify-center pb-10">
                <Link href="/" className="main-logo flex shrink-0 items-center pl-5">
                    <Image
                        src={"/assets/images/logo.svg"}
                        className="inline w-16 sm:w-12 md:w-10 ltr:-ml-1 rtl:-mr-1"
                        alt="logo"
                        width="100"
                        height="100"
                    />
                    <span className="align-middle text-2xl font-semibold transition-all duration-300 dark:text-white-light md:inline ltr:ml-1.5 rtl:mr-1.5">
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </span>
                </Link>
            </div>
            <h1 className="mb-6 text-lg font-bold">Join Us Today and Start Your Journey!</h1>

            {/* First SuperRabbit Account  */}
            <div className="flex flex-col justify-around sm:flex-row">
                <div className="text-sm font-bold"> {process.env.NEXT_PUBLIC_APP_NAME} Account</div>
                <div className="sm:w-2/4">
                    <div className="mt-4">
                        <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                            Account Type <StartComponent />
                        </label>
                        <select
                            id="accountType"
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                        >
                            <option value="" disabled>
                                Select account type
                            </option>
                            <option value="enterprise">Enterprise</option>
                            <option value="freelance">Freelance</option>
                        </select>
                        <div className="mt-2 text-sm text-gray-500">
                            {formData.accountType === "enterprise" ? (
                                <>
                                    <p>
                                        I represent a company. Please select Enterprise if you are going to assign jobs
                                        to in-house translators, freelancers, or other companies. If you select this,
                                        the system will have supplier functionality, and you will be able to assign jobs
                                        to your suppliers.
                                    </p>
                                </>
                            ) : formData.accountType === "freelance" ? (
                                <>
                                    <p>
                                        I am a freelancer. Please select Freelance if you are doing all jobs alone and
                                        do not subcontract freelancers. If you select this, you will not be able to
                                        create suppliers in the system and assign jobs to them.
                                    </p>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
                            Brand Name <StartComponent />
                        </label>
                        <input
                            type="text"
                            id="brandName"
                            name="brandName"
                            value={formData.brandName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter brand name"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Country <StartComponent />
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                        >
                            <option value="" disabled>
                                Select your country
                            </option>
                            <option value="egypt">Egypt</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* End SuperRabbit Account  */}
            <div className="flex justify-center">
                <hr className="my-12 w-[90%] border-gray-300" />
            </div>

            {/* Start Account Owner */}
            <div className="flex flex-col justify-around sm:flex-row">
                <div className="text-sm font-bold">Account Owner</div>
                <div className="sm:w-2/4">
                    <div className="mt-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name <StartComponent />
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name <StartComponent />
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email <StartComponent />
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone <StartComponent />
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                            Timezone <StartComponent />
                        </label>
                        <select
                            id="timezone"
                            name="timezone"
                            value={formData.timezone}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                        >
                            <option value="" disabled>
                                Select your timezone
                            </option>
                            <option value="America/New_York">America/New York</option>
                            <option value="America/Los_Angeles">America/Los Angeles</option>
                            <option value="America/Chicago">America/Chicago</option>
                            <option value="America/Denver">America/Denver</option>
                            <option value="America/Phoenix">America/Phoenix</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username <StartComponent />
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password <StartComponent />
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-center">
                        <input
                            type="checkbox"
                            id="termsCheckbox"
                            name="termsCheckbox"
                            checked={formData.termsCheckbox}
                            onChange={handleCheckboxChange}
                            className="mb-1 rounded border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        />
                        <label htmlFor="termsCheckbox" className="ml-2 text-sm text-gray-700">
                            I have read and accept the{" "}
                            <a href="/privacy-policy" className="text-purple-500 hover:underline">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="/terms-of-service" className="text-purple-500 hover:underline">
                                Terms of Service
                            </a>
                            .
                        </label>
                    </div>

                    {/* End Account Owner */}

                    <button
                        type="submit"
                        className="focus:shadow-outline mt-6 w-full rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
                        onClick={submitHandler}
                    >
                        Sign Up
                    </button>
                    <div className="mt-4 text-center">
                        <Link href="/log-in" className="text-purple-500 hover:text-purple-700">
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
