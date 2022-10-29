import { FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Logo = () => {

    const logoVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.5
            },
        },
        hover: {
            scale: 1.1,
        },
        onView: {
            rotate: 360,
            transition: {
                duration: 10,
                repeat: Infinity,
            }
        }
    }

    return (
        <div className='border bg-white flex items-center justify-center' >
            <motion.span
                className='text-3xl text-blue-500'
                variants={logoVariants}
                initial='hidden'
                animate='visible'
                whileInView='onView'
                whileHover='hover'
                whileTap='hover'
            >
                <FaReact />
            </motion.span>
            <h2 className="hidden text-xl font-semibold">Logo</h2>
        </div >
    )
}

export default Logo;
