export const fadeVariants = {
    initialState: {
        opacity: 0,
        y: 30,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    animateState: {
        opacity: 1,
        y:0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    exitState: {
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    },
}

export const textVariant = (delay: any) => ({
    hidden: {
        y: 50,
        opacity: 0
    },
    show:{
        y: 0,
        opacity: 1,
        transition:{
            type: 'spring',
            duration: 1.25,
            delay,
        },
    },
});

export const textContainer = {
    hidden:{
        opacity: 0,
    },
    show: (i = 1) =>({
        opacity: 1,
        transition:{
            staggerChildren: 0.1,
            delayChildren: i * 0.1
        }
    }),
};

export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show:{
        opacity: 1,
        y: 0,
        transition:{
            type: "tween",
            ease: "easeIn"
        },
    },
};