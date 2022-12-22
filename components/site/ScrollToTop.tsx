"use client"
import { usePathname } from 'next/navigation'
import { useEffect} from 'react'

export default function ScrollToTop() {

    const pathname = usePathname();

    useEffect(() =>{
        if(typeof window !== "undefined"){
            window.scrollTo(0,0);
        }
    }, [pathname])
}
