import { IconFolderFilled, IconFileFilled } from "@tabler/icons-react";

function QuickAccessFileManager() {
    return (
        <>
            {/* Cards Grid <== */}

            <section className="my-6">
                <div className="Cards-Wrapper flex flex-wrap gap-3">
                    {/* Folder */}
                    <div className="Card flex items-center gap-2 p-2 border border-spacing-0 border-zinc-300 w-full max-w-60 rounded-md">
                        <div className="">
                            <IconFolderFilled size={28} className="fill-slate-600" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="font-bold">Purchase Verification Folder</p>
                            <span>100MB</span>
                        </div>
                    </div>
                    {/* Folder */}
                    <div className="Card flex items-center gap-2 p-2 border border-spacing-0 border-zinc-300 w-full max-w-60 rounded-md">
                        <div className="">
                            <IconFileFilled size={28} className="fill-slate-600" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="font-bold">License-details.pdf</p>
                            <span>2.3MB</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap"></div>
            </section>
        </>
    );
}

export default QuickAccessFileManager;
