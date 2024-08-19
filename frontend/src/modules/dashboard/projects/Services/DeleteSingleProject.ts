"use server";

import APIFunctionalUtility from "@/shared/utils/APIUtility";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface APIResponseType {
    data: {
        success: boolean;
        message: string;
    };
}

export async function deleteProjectFromTable(UUID: string) {
    try {
        const response: APIResponseType = await APIFunctionalUtility().DELETEMethod<APIResponseType>(
            `projects/${UUID}`,
        );

        if (response.data.success) {
            console.error(response.data.message);
            revalidatePath("/dashboard/projects/", "page");

            return { success: response.data.success };
        }
    } catch (error) {
        console.error(error);
        return { success: false, error: error };
    }

    redirect("/dashboard/projects");
}

export async function deleteProjectFromProjectView(UUID: string) {
    const response: APIResponseType = await APIFunctionalUtility().DELETEMethod<APIResponseType>(`projects/${UUID}`);

    if (response.data.success) {
        console.error(response.data.message);
        // return { success: response.data.success };

        revalidatePath("/dashboard/projects", "page");
        redirect("/dashboard/projects");
    }

    return { success: false, error: response.data.message };
}

//
/**
 *
 *
 *
 */

// export async function createTodo(
//     prevState: {
//         message: string;
//     },
//     formData: FormData,
// ) {
//     const schema = z.object({
//         todo: z.string().min(1),
//     });
//     const parse = schema.safeParse({
//         todo: formData.get("todo"),
//     });

//     if (!parse.success) {
//         return { message: "Failed to create todo" };
//     }

//     const data = parse.data;

//     try {
//         await sql`
//         INSERT INTO todos (text)
//         VALUES (${data.todo})
//       `;

//         revalidatePath("/");
//         return { message: `Added todo ${data.todo}` };
//     } catch (e) {
//         return { message: "Failed to create todo" };
//     }
// }

// export async function deleteTodo(
//     prevState: {
//         message: string;
//     },
//     formData: FormData,
// ) {
//     const schema = z.object({
//         id: z.string().min(1),
//         todo: z.string().min(1),
//     });
//     const data = schema.parse({
//         id: formData.get("id"),
//         todo: formData.get("todo"),
//     });

//     try {
//         await sql`
//         DELETE FROM todos
//         WHERE id = ${data.id};
//       `;

//         revalidatePath("/");
//         return { message: `Deleted todo ${data.todo}` };
//     } catch (e) {
//         return { message: "Failed to delete todo" };
//     }
// }