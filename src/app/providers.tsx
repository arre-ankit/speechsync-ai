"use client";
export const runtime = 'edge'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";

export const Providers = ({children}:{children:ReactNode}) => {
    return <SessionProvider>
        {children}
    </SessionProvider>
}