import { useState, useEffect } from "react"
import { BsSunFill, BsFillMoonFill } from "react-icons/bs"

const ThemeSwitcher = () => {

    const [theme, setMode] = useState(() => {
        return JSON.parse(localStorage.getItem('mode')) || 'light'
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('mode', JSON.stringify(theme))
    }, [theme])

    const toggleTheme = () => {
        setMode(theme === 'light' ? 'dark' : 'light')
    }

    function alterIcon() {
        return theme === 'dark' ? <BsSunFill /> : <BsFillMoonFill />
    }
    
    return (
        <div>
            <button onClick={toggleTheme} className="p-2 text-black rounded-lg hover:border-2 hover:border-black hover:dark:border-white dark:text-white">
                {alterIcon()}
            </button>
        </div>
    )
}

export default ThemeSwitcher;