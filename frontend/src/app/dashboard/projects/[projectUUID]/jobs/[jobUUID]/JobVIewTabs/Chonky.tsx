import { FullFileBrowser as F, FileBrowserProps, FileBrowserHandle, setChonkyDefaults } from "chonky";
const FullFileBrowser = F as React.MemoExoticComponent<
    React.ForwardRefExoticComponent<FileBrowserProps & React.RefAttributes<FileBrowserHandle>>
>;
import { ChonkyIconFA } from "chonky-icon-fontawesome";
// const _FullFileBrowser = FullFileBrowser as any;

export default function MyFileBrowser() {
    setChonkyDefaults({ iconComponent: ChonkyIconFA as any });
    const files = [
        { id: "lht", name: "Projects", isDir: true },
        {
            id: "mcd",
            name: "chonky-sphere-v2.png",
            thumbnailUrl: "https://chonky.io/chonky-sphere-v2.png",
        },
    ];
    const folderChain = [{ id: "xcv", name: "Demo", isDir: true }];
    return (
        <div style={{ height: 300 }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
        </div>
    );
}
