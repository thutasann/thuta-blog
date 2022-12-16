"use client";

import styles from "../../styles/mouse.module.css";
import { useEffect, useRef, useState } from "react";

function Mouse (){
    const mouse = useRef(null);
    const [click, setClick] = useState<boolean>(false);
    let cursor: HTMLElement | any;

    // Handle Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
        cursor.setAttribute(
            "style",
            `top : ${e.pageY - 10}px; left:${e.pageX - 10}px;`
        )
    }
    
    // Handle Mouse Click
    const handleMouseClick = () => {
        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 500);
    }

    useEffect(() => {
        cursor = mouse.current;
        if (typeof window !== "undefined"){
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("click", handleMouseClick);
            return () =>{
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("click", handleMouseClick)    
            }
        }
    }, []);

    return (
        <div
            className={`${styles.cursor} ${click && styles.expand} z-[9999]`}
            ref={mouse}
        ></div>
    )
}

export default Mouse;