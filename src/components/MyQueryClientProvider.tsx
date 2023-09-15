"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FunctionComponent, ReactNode, useState } from "react"

type MyQueryClientProviderProps = {
    children: ReactNode | ReactNode[]
}

export const MyQueryClientProvider: FunctionComponent<MyQueryClientProviderProps> = ({children}) => {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}