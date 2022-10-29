import { motion } from "framer-motion"
import { useEffect } from "react";
import { MainText } from "../AnimatedTexts";
import { Waves } from "./Waves";

const LandingPage = () => {

    const changeTextProps = ["Bienvenido", "a", "Bxpress"];

    //make a delay function to use in the useEffect
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    //useEffect to change the text

    useEffect(() => {
        const changeText = async () => {
            for (let i = 0; i < changeTextProps.length; i++) {
                await delay(1000);
                console.log(changeTextProps[i]);
                const text = document.querySelector(".text");
                text.innerHTML = changeTextProps[i];
            }
        };
        changeText();
    }, []);



    return (
        <motion.div className="relative min-h-screen ">
            <Waves />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <MainText text="Bienvenido" className="text" />
            </div>
        </motion.div>

    )
}

export default LandingPage;