"use client";
import React, { useState, useEffect, useCallback } from "react";
import { IconWifi } from "./icon/icon-wifi";

const ConnectionStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [showToast, setShowToast] = useState(false);

    const handleOnline = useCallback(() => {
        setIsOnline(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    }, []);

    const handleOffline = useCallback(() => {
        setIsOnline(false);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    }, []);

    useEffect(() => {
        const checkOnlineStatus = () => setIsOnline(navigator.onLine);

        checkOnlineStatus();

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, [handleOnline, handleOffline]);

    if (!showToast) return null;

    return (
        <div
            className={` flex items-center border-l-4 ${
                isOnline ? "border-l-green-500" : "border-l-red-500"
            } fixed bottom-0 left-0 m-8 rounded-xl p-5 text-sm shadow-3xl transition-opacity duration-1000 ease-out ${
                showToast ? "opacity-100" : "opacity-0"
            } z-50 bg-white text-gray-500`}
            style={{ transition: "opacity 1s ease-out" }}
        >
            <span
                className={`ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full  ${
                    isOnline ? "bg-green-500" : "bg-red-500"
                }`}
            >
                <IconWifi />
            </span>
            <span className="ml-4 text-sm">
                {isOnline ? "Internet connection is back!" : "Internet connection is lost!"}
            </span>
        </div>
    );
};

export default ConnectionStatus;
