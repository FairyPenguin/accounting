import { fetchFolderTreeByUUID } from "@/modules/dashboard/projects/Services/FetchFolderTreeByUUID";

async function page({ params }: { params: { slug: string[] } }) {
    console.log(params.slug);

    const folders = await fetchFolderTreeByUUID("67c129bd-e72e-4e4b-bcad-aac810371bad");

    console.log(folders.data?.children);

    return (
        <div>
            <h2>{params.slug[1]}</h2>
            <h1>SLUGINHOOOO</h1>
            <ul>
                {params.slug.map((slug, index) => {
                    return <li key={index}>{slug}</li>;
                })}
            </ul>
        </div>
    );
}

export default page;
