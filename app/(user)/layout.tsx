"use client";

import Banner from "../../components/site/Banner"
import Header from "../../components/site/Header"
import "../../styles/globals.css"
import Provider from "../../components/site/Provider"
import Mouse from "../../components/site/Mouse"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="transition-all duration-700 bg-gray-100 dark:bg-[#1F2937] text-[#1a1a1a] dark:text-gray-300">
      <Provider>
        <Header/>
        <Mouse/>
        <div className="mt-[10px] px-5 mx-auto max-w-6xl">
          <Banner/>
          {children}
        </div>
      </Provider>
      </body>
    </html>
  )
}
