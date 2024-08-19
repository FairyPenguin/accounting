"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function dashboard() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/log-in");
    }, [router]);

    return <div />;
}
