import { motion } from "framer-motion"
import { useEffect } from "react";

export const MainText = ({ text, ...props }) => {

    //reset the animation when the text changes
    useEffect(() => {
        const text = document.querySelector(".text");
        text.classList.remove("animate__animated", "animate__fadeIn");
        void text.offsetWidth;
        text.classList.add("animate__animated", "animate__fadeIn");
    }, [text]);



    return (
        <motion.h1
            className="text-5xl font-bold text-blue-500 "
            {...props}
        >
            {text.split("").map((char, index) => {
                return (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </motion.h1>
    );
}
