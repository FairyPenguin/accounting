"use client";
// ======/ Imports /======
import { Modal } from "@mantine/core";
import Link from "next/link";
import { useState, useTransition } from "react";

// ======/ Imports /======

interface ModalProps {
    opened: boolean;
    close: () => void;
    open?: () => void;
    // actionFunc: () =>
    //     | Promise<void>
    //     | Promise<string | boolean>
    //     | (() => void)
    //     | Promise<() => Promise<void>>
    //     | Promise<() => void>
    //     | void
    //     | Promise<{ success: true; error?: undefined } | { success: boolean; error: unknown }>
    //     | Promise<{ success: false }>
    //     | (() => any)
    //     | (() => Promise<void | undefined>)
    //     | (() => void);
    actionFunc: () =>
        | Promise<
              | {
                    success: false;
                    error?: undefined;
                }
              | {
                    success: boolean;
                    error: unknown;
                }
              | undefined
          >
        | Promise<void>
        | void;
}

export default function DeleteConfirmModal({ opened, close, open, actionFunc }: ModalProps) {
    const [isPending, startTransition] = useTransition();

    return (
        <>
            <Modal opened={opened} onClose={close} size="xs" title="Confirmation" centered>
                <h1>Confirm the delete operation.</h1>
                {/* ------------BUTTONS------------ */}
                <div className="my-10 flex justify-center gap-x-5 space-x-4">
                    {/* Cancel Button */}

                    <button
                        onClick={close}
                        className="rounded-md border border-red-600 px-4 py-2 font-semibold text-red-600 shadow-sm"
                    >
                        Cancel
                    </button>

                    {/* Confirm Button */}

                    <button
                        onClick={actionFunc}
                        type="button"
                        className="rounded-md bg-purple-500 px-4 py-2 text-white shadow-sm"
                    >
                        Confrim Delete
                    </button>
                </div>
                {/* ------------BUTTONS------------ */}{" "}
            </Modal>
        </>
    );
}
