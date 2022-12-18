"use client";

import { ThemeProvider } from 'next-themes'

function ProviderTheme({
    children
} :{
    children: React.ReactNode
}) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default ProviderTheme