const Footer = () => {
    return (
        <div className="mt-auto hidden justify-center p-6 pt-5 text-center dark:text-white-dark sm:block">
            © {new Date().getFullYear()}. {process.env.NEXT_PUBLIC_APP_NAME} All rights reserved.
        </div>
    );
};

export default Footer;
