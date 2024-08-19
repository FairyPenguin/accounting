"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IRootState } from "@/shared/store";
import { usePathname } from "next/navigation";
import AnimateHeight from "react-animate-height";
import IconFile from "../components/icon/icon-file";
import IconHome2 from "../components/icon/icon-home2";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { getTranslation } from "@/shared/utils/i18n.util";
import IconFolder from "../components/icon/icon-folders";
import IconMinus from "@/shared/components/icon/icon-minus";
import IconSettings from "../components/icon/icon-settings";
import IconLightBulb from "../components/icon/icon-lightbulb";
import IconBriefCase from "../components/icon/icon-briefcase";
import { toggleSidebar } from "@/shared/store/themeConfigSlice";
import IconUsersGroup from "../components/icon/icon-users-group";
import IconSalePercent from "../components/icon/icon-sale-percent";
import IconCaretDown from "@/shared/components/icon/icon-caret-down";
import IconCaretsDown from "@/shared/components/icon/icon-carets-down";
import IconMenuInvoice from "../components/icon/menu/icon-menu-invoice";
import IconMenuUsers from "@/shared/components/icon/menu/icon-menu-users";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>("");
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);

    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? "" : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add("active");
            const ul: any = selector.closest("ul.sub-menu");
            if (ul) {
                let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link") || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, [location]);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        const currentUrl = window.location.pathname;

        document.querySelectorAll(".sidebar ul a").forEach((link) => {
            link.classList.remove("active");
        });

        const links = document.querySelectorAll(".sidebar ul a");

        links.forEach((link: any) => {
            const href = link.getAttribute("href").split("?")[0];

            if (currentUrl.startsWith(href)) {
                link.classList.add("active");
            }
        });
    };

    useEffect(() => {
        const menuMapping = {
            "/dashboard/reports": "reports",
            "/dashboard/settings": "settings",
            "/dashboard/projects": "projects",
            "/dashboard/quotes": "quotes",
            "/dashboard/clients": "clients",
            "/dashboard/vendors": "vendors",
            "/dashboard/invoices": "invoices",
        };

        const currentPath = location.pathname + location.search;
        const matchedMenu = Object.entries(menuMapping).find(([path]) => currentPath.startsWith(path));

        if (matchedMenu) {
            const [, menuKey] = matchedMenu;
            setCurrentMenu(menuKey);
        }
    }, [location]);

    return (
        <div className={semidark ? "dark" : ""}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[300px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${
                    semidark ? "text-white-dark" : ""
                }`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/dashboard/overview" className="main-logo flex shrink-0 items-center">
                            {/* <Image
                                width="100"
                                height="100"
                                className="ml-[5px] w-8 flex-none"
                                src={"/assets/images/logo.svg"}
                                alt="logo"
                            /> */}
                            <span className="align-middle text-2xl font-semibold dark:text-white-light lg:inline ltr:ml-1.5 rtl:mr-1.5">
                                RASberry
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                            <li className="nav-item">
                                <Link href="/dashboard/overview" className="group" onClick={() => toggleMenu("")}>
                                    <div className="flex items-center">
                                        <IconHome2 className="shrink-0 group-hover:!text-purple-800" />
                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                            {t("Overview")}
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{t("modules")}</span>
                            </h2>

                            <li className="nav-item">
                                <ul>
                                    {/* Start Opportunities Module */}
                                    {/* <li className="nav-item">
                                        <Link
                                            href="/dashboard/opportunities"
                                            className="group"
                                            onClick={() => toggleMenu("")}
                                        >
                                            <div className="flex items-center">
                                                <IconLightBulb className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Opportunities")}
                                                </span>
                                            </div>
                                        </Link>
                                    </li> */}
                                    {/* End Offers Module */}

                                    {/* Start Offers Module */}
                                    {/* <li className="nav-item">
                                        <Link href="/dashboard/offers" className="group" onClick={() => toggleMenu("")}>
                                            <div className="flex items-center">
                                                <IconSalePercent className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Offers")}
                                                </span>
                                            </div>
                                        </Link>
                                    </li> */}
                                    {/* End Offers Module */}

                                    {/* Start Quotes Module */}
                                    <li className="menu nav-item">
                                        {/* <Link href="/dashboard/quotes" className="group" onClick={() => toggleMenu("")}>
                                            <div className="flex items-center">
                                                <IconBriefCase className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Quotes")}
                                                </span>
                                            </div>
                                        </Link> */}

                                        {/* <button
                                            type="button"
                                            className={`${
                                                currentMenu === "quotes" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("quotes")}
                                        >
                                            <div className="flex items-center">
                                                <IconBriefCase className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Quotes")}
                                                </span>
                                            </div>

                                            <div className={currentMenu !== "quotes" ? "-rotate-90 rtl:rotate-90" : ""}>
                                                <IconCaretDown />
                                            </div>
                                        </button> */}

                                        <AnimateHeight duration={300} height={currentMenu === "quotes" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                {/* <li>
                                                    <Link href="/dashboard/quotes/">{t("Overview")}</Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link href="/dashboard/quotes/list">{t("Quotes List")}</Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link href="/dashboard/quotes/groups">{t("Groups")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/quotes/templates">{t("Templates")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/quotes/tasks">{t("Tasks")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/quotes/jobs">{t("Jobs")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/quotes/resources">{t("Resources")}</Link>
                                                </li> */}
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    {/* End Quotes Module */}

                                    {/* Start Projects Module */}
                                    <li className="menu nav-item">
                                        {/* <button
                                            type="button"
                                            className={`${
                                                currentMenu === "projects" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("projects")}
                                        >
                                            <div className="flex items-center">
                                                <IconFolder className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Projects")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "projects" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button> */}

                                        <AnimateHeight duration={300} height={currentMenu === "projects" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                {/* <li>
                                                    <Link href="/dashboard/projects/">{t("Overview")}</Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link href="/dashboard/projects/list">{t("Projects List")}</Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link href="/dashboard/projects/groups">{t("Groups")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/projects/templates">{t("Templates")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/projects/tasks">{t("Tasks")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/projects/jobs">{t("Jobs")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/projects/resources">{t("Resources")}</Link>
                                                </li> */}
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    {/* End Projects Module */}

                                    {/* Start Clients Module */}
                                    {/* <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "clients" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("clients")}
                                        >
                                            <div className="flex items-center">
                                                <IconUsersGroup className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Clients")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "clients" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === "clients" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/dashboard/clients">{t("Overview")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/clients/list">{t("Clients")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/clients/contacts">{t("Contacts")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/clients/price-lists">
                                                        {t("Price Lists")}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li> */}
                                    {/* End Clients Module */}

                                    {/* Start Vendors Module */}
                                    {/* <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "vendors" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("vendors")}
                                        >
                                            <div className="flex items-center">
                                                <IconMenuUsers className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Vendors")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "vendors" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === "vendors" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/dashboard/vendors">{t("Overview")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendors/list">{t("Vendors")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendors/contacts">{t("Contacts")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendors/price-profiles">
                                                        {t("Price Profiles")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendors/price-list">{t("Price List")}</Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li> */}
                                    {/* End Vendors Module */}

                                    {/* Start Invoices Module */}
                                    {/* <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "invoices" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("invoices")}
                                        >
                                            <div className="flex items-center">
                                                <IconMenuInvoice className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Invoices")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "invoices" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === "invoices" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/dashboard/invoices">{t("Overview")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/invoices/client-invoices">
                                                        {t("Client Invoices")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/invoices/client-receivables">
                                                        {t("Client Receivables")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/invoices/client-payments">
                                                        {t("Client Payments")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/invoices/vendor-invoices">
                                                        {t("Vendor Invoices")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/invoices/vendor-payables">
                                                        {t("Vendor Payables")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/invoices/vendor-payments">
                                                        {t("Vendor Payments")}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li> */}
                                    {/* End Invoices Module */}

                                    {/* Start Reports Module */}
                                    {/* <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "reports" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("reports")}
                                        >
                                            <div className="flex items-center">
                                                <IconFile className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Reports")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "reports" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === "reports" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/dashboard/reports">{t("Overview")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/reports/business-reports">
                                                        {t("Business Reports")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/reports/client-feedback">
                                                        {t("Client Feedback")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/reports/cash-flow">{t("Cash Flow")}</Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li> */}
                                    {/* End Reports Module */}

                                    {/* Start Accounting Module */}
                                    <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "finance" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("finance")}
                                        >
                                            <div className="flex items-center">
                                                <IconMenuUsers className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Finance")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "finance" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === "finance" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/dashboard/finance/overview">{t("Overview")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/finance/accounts">{t("Accounts")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/finance/transactions">
                                                        {t("Transactions")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/finance/journal-entries">
                                                        {t("Journal Entries")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/finance/transfers">{t("Transfers")}</Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    {/* End Accounting Module */}

                                    {/* Start Settings */}
                                    {/* <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={`${
                                                currentMenu === "settings" ? "active" : ""
                                            } nav-link group w-full`}
                                            onClick={() => toggleMenu("settings")}
                                        >
                                            <div className="flex items-center">
                                                <IconSettings className="shrink-0 group-hover:!text-purple-800" />
                                                <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                                                    {t("Settings")}
                                                </span>
                                            </div>

                                            <div
                                                className={currentMenu !== "settings" ? "-rotate-90 rtl:rotate-90" : ""}
                                            >
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === "settings" ? "auto" : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/dashboard/settings/general">{t("General")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/settings/projects-quotes">
                                                        {t("Projects & Quotes")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/settings/clients-vendors">
                                                        {t("Clients & Vendors")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/settings/portals">{t("Portals")}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/settings/user-management?tab=overview&subTab=overview-&-analytics">
                                                        {t("User Management")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/settings/system-values/basic?tab=cat-tools&subTab=overview">
                                                        {t("System Values (Basic)")}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/settings/system-values/advanced?tab=languages&subTab=overview">
                                                        {t("System Values (Advanced)")}
                                                    </Link>
                                                </li>{" "}
                                                <li>
                                                    <Link href="/dashboard/settings/integrations">
                                                        {t("Integrations")}
                                                    </Link>
                                                </li>{" "}
                                                <li>
                                                    <Link href="/dashboard/settings/templates">{t("Templates")}</Link>
                                                </li>{" "}
                                                <li>
                                                    <Link href="/dashboard/settings/system-information">
                                                        {t("System Information")}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li> */}
                                    {/* End Settings */}
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
