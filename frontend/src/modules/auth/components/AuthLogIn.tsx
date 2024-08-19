import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLoginHook } from "../hooks";
import { StartComponent } from "@/shared/components/Start";

export const AuthLogInComponent: React.FC = () => {
    const [email, setEmail] = useState("admin@admin.com");
    const [password, setPassword] = useState("123456");
    const { login, loading, error } = useLoginHook();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        login(email, password);
    };

    return (
        <section className="container absolute inset-0 m-auto mx-auto max-w-md rounded-lg bg-white p-6 shadow-md sm:h-fit">
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
            <h1 className="mb-6 text-lg font-bold">Welcome Back! Please Sign In</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email <StartComponent />
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                        placeholder="Enter your email"
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
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                        placeholder="Enter your password"
                    />
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                <button
                    type="submit"
                    className="focus:shadow-outline mt-6 w-full rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Sign In"}
                </button>
            </form>
            <div className="mt-4 text-center">
                <Link href="/sign-up" className="text-purple-500 hover:text-purple-700">
                    Dont have an account?
                </Link>
            </div>
        </section>
    );
};

export default AuthLogInComponent;
