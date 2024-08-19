"use client";
import App from "@/App";
import store from "@/shared/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import React, { ReactNode, Suspense } from "react";
import Loading from "@/shared/layouts/loading";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
    children?: ReactNode;
}

const reactQueryClient = new QueryClient({});

const ProviderComponent = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={reactQueryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <MantineProvider
                theme={{
                    fontFamily: "Nunito"
                }}
            >
                <Provider store={store}>
                    <Suspense fallback={<Loading />}>
                        <App>{children}</App>
                    </Suspense>
                </Provider>
            </MantineProvider>
        </QueryClientProvider>
    );
};

export default ProviderComponent;
