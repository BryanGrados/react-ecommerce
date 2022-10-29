import { animate, animations, motion } from "framer-motion"

export const ButtonDefault = (props) => {

    const buttonVariants = {
        hover: { scale: 1.1, },
        tap: { scale: 0.9, },
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    }

    return (
        <>
            <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="p-2 font-medium text-center text-blue-500 border border-blue-500 rounded-md hover:text-white hover:bg-blue-500">
                <motion.span>
                    {props.children}
                </motion.span>
            </motion.button>
        </>
    )
}

export const ButtonTextIcon = ({ text, icon }) => {

    const buttonVariants = {
        hover: { scale: 1.1, },
        tap: { scale: 0.9, },
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    }

    return (
        <>
            <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="p-2 font-medium text-center text-blue-500 border border-blue-500 rounded-md hover:text-white hover:bg-blue-500">
                <motion.span className="flex items-center justify-center gap-3">
                    {text}  {icon}
                </motion.span>
            </motion.button>
        </>
    )
}

export const ButtonIcon = ({ icon }) => {

    const buttonVariants = {
        hover: { scale: 1.1, rotate: 360, transition: { duration: 0.4 } },
        tap: { scale: 0.9 },
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    }

    return (
        <>
            <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="p-2 font-medium text-center text-blue-500 border border-blue-500 rounded-full hover:text-white hover:bg-blue-500">
                <motion.span>
                    {icon}
                </motion.span>
            </motion.button>
        </>
    )
}
