"use client";

import Banner from "../../components/site/Banner"
import Header from "../../components/site/Header"
import "../../styles/globals.css"
import { Provider } from "react-redux";
import ProviderTheme from "../../components/site/Provider"
import Mouse from "../../components/site/Mouse"
import { store } from "../../store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="transition-all duration-700 bg-gray-100 dark:bg-[#1F2937] text-[#1a1a1a] dark:text-gray-300">
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <ProviderTheme>
                <Header/>
                <Mouse/>
                <div className="mt-[10px] px-5 mx-auto max-w-6xl">
                  <Banner/>
                  {children}
                </div>
              </ProviderTheme>
            </PersistGate>
          </Provider>
      </body>
    </html>
  )
}
