"use client";
import { Skeleton } from "@mantine/core";

export default function Loading() {
    return (
        <>
            <Skeleton height={50} mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={38} mt={6} radius="m" />
            <Skeleton height={38} mt={6} radius="m" />
            <Skeleton height={38} mt={6} radius="m" />
            <Skeleton height={38} mt={6} radius="m" />
            <Skeleton height={38} mt={6} radius="m" />
            <Skeleton height={38} mt={6} radius="m" />
            {/* <Skeleton height={8} mt={6} width="70%" radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" /> */}
        </>
    );
}
