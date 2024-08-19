export default function FormSectionWrapper({
    children,
    sectionName,
}: {
    children: React.ReactElement;
    sectionName: string;
}) {
    return (
        <div className={`${sectionName} rounded-md border-b border-gray-900/10 bg-white px-6 py-4 pb-12`}>
            {children}
        </div>
    );
}
