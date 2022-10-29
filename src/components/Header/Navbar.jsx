import { motion } from "framer-motion"
import Logo from "./Logo";

const Navbar = () => {
    return (
        <motion.nav className="sticky top-0 bg-white h-20 border-b border-gray-400">
            <div className="container mx-auto w-full h-full">
                <header className="bg-red-400 w-full h-full flex justify-between">
                    <Logo />
                </header>
            </div>
        </motion.nav>
    )
}

export default Navbar;