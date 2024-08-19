import LayoutSegments from "./LayoutSegments";

export default function ProjectsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            {/* <nav>
                <h1>ProjectsLayout</h1>
                <LayoutSegments />
            </nav> */}

            {children}
        </section>
    );
}
