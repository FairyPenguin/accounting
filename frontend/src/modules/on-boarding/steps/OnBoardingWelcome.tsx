import { useRouter } from "next/navigation";

export const OnBoardingWelcome: React.FC = () => {
    const router = useRouter();

    const submitHandler = () => {
        router.push("/onboarding/setup");
    };

    return (
        <section className="container rounded-lg p-10 sm:p-40">
            <h1 className="text-2xl font-extrabold text-purple-600">Welcome!</h1>
            <p className="py-6 text-base">
                Thank you for creating a <span className="font-semibold"> "{process.env.NEXT_PUBLIC_APP_NAME}" </span>{" "}
                account! <br />
                Before we can start working, we need to adjust some system values.
                <br />
                Let's do it!
            </p>
            <button
                type="submit"
                className="focus:shadow-outline w-md mt-6 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
                onClick={submitHandler}
            >
                Ok, Let's get started!
            </button>
        </section>
    );
};
