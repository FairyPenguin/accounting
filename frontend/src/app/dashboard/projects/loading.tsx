"use client";
import { Skeleton } from "@mantine/core";

export default function Loading() {
    return (
        <>
            <Skeleton height={50} mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={800} mt={6} radius="m" />
            {/* <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" /> */}
        </>
    );
}

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import Headers from "./Header";
// import "./styles.css";

// type FormValues = {
//   firstName: string;
//   lastName: string;
// };

// let renderCount = 0;

// export default function App() {
//   const { register, handleSubmit } = useForm<FormValues>();
//   const onSubmit = (data: FormValues) => console.log(data);
//   renderCount++;

//   return (
//     <div>
//       <Headers
//         renderCount={renderCount}
//         description="Performant, flexible and extensible forms with easy-to-use validation."
//       />

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input readOnly {...register("firstName")} placeholder="First Name" />
//         <fieldset disabled>
//           <input {...register("lastName")} placeholder="First Name" />
//         </fieldset>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
