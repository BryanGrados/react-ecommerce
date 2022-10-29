import Navbar from "./components/Header/Navbar"
import LandingPage from './components/Landing/LandingPage'

const App = () => {
  return (
    <div className="bg-[#f7f7f7] dark:bg-zinc-900 transition-colors ease-in-out delay-150">
      <LandingPage />
      <Navbar />
    </div>
  )
}

export default App