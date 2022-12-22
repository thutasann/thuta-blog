"use client";

import Banner from "../../components/site/Banner"
import Header from "../../components/site/Header"
import "../../styles/globals.css"
import { Provider } from "react-redux";
import ProviderTheme from "../../components/site/Provider"
import Mouse from "../../components/site/Mouse"
import { store } from "../../store";
import Footer from "../../components/site/Footer";
import ScrollToTop from "../../components/site/ScrollToTop";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants } from "../../animations";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const route = usePathname();

  return (
    <html lang="en">
      <AnimatePresence>
        <body className="bg-gray-100 dark:bg-[#1F2937] text-[#1a1a1a] dark:text-gray-300">
            <Provider store={store}>
              <ProviderTheme>
                {/* @ts-ignore */}
                <ScrollToTop/>
                <Header/>
                <motion.div
                  key={route}
                  initial="initialState"
                  animate="animateState"
                  exit="exitState"
                  transition={{
                    duration: 0.75,
                    ease: "easeOut",
                  }}
                  variants={fadeVariants}
                >
                  <Mouse/>
                  <div className="mt-[10px] px-5 mx-auto max-w-6xl">
                    <Banner/>
                    {children}
                    <Footer/>
                  </div>
                </motion.div>
              </ProviderTheme>
            </Provider>
        </body>
      </AnimatePresence>
    </html>
  )
}
