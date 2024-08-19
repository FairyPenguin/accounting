export default function FormFieldsWrapper({ children }: { children: React.ReactElement }) {
    return <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">{children}</div>;
}
