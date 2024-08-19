import Image from "next/image";
import Link from "next/link";

export const PublicNavbar: React.FC = () => {
    return (
        <div className="p-5">
            <Link href="/" className="main-logo flex shrink-0 items-center">
                {/* <Image
                    width="100"
                    height="100"
                    className="ml-[5px] w-8 flex-none"
                    src={"/assets/images/logo.svg"}
                    alt="logo"
                /> */}
                <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                    {/* {process.env.NEXT_PUBLIC_APP_NAME} */}
                    RASberry
                </span>
            </Link>
        </div>
    );
};
