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


// Delete from Table


export async function deleteItemFromTable(UUID: string, endpoint: string, route: string) {
    try {
        const response: APIResponseType = await APIFunctionalUtility().DELETEMethod<APIResponseType>(
            `${endpoint}/${UUID}`,
        );


        if (response.data.success) {
            revalidatePath(`${route}`, "page");
            console.error(response.data.message);
            return { success: response.data.success };
        }
    } catch (error) {
        console.error(error);
        return { success: false, error: error };
    }

    // const response: APIResponseType = await APIFunctionalUtility().DELETEMethod<APIResponseType>(
    //     `projects/${UUID}`,
    // );

    // if (response.data.success) {
    //     revalidatePath("/dashboard/projects", "page");
    //     console.error(response.data.message);
    //     return { success: response.data.success };
    // }
    redirect(`${route}`);

}


// Delete from View

export async function deleteItemFromItemView(UUID: string, endpoint: string, route: string) {
    const response: APIResponseType = await APIFunctionalUtility().DELETEMethod<APIResponseType>(`${endpoint}/${UUID}`);

    if (response.data.success) {
        console.info(response.data.message);
        // return { success: response.data.success };

        revalidatePath(`${route}`, "page");
        redirect(`${route}`);
    }

    return { success: response.data.success, error: response.data.message };
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
