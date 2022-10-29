import { motion } from "framer-motion"

export const Waves = () => {

    const topVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    }

    const bottomVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    }

    return (
        <>
            <motion.div
                variants={topVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-0 right-0 w-full h-auto">
                <svg style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 340" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="#3b82f6" offset="0%"></stop><stop stopColor="#3b82f6" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,0L34.3,17C68.6,34,137,68,206,119C274.3,170,343,238,411,255C480,272,549,238,617,238C685.7,238,754,272,823,272C891.4,272,960,238,1029,187C1097.1,136,1166,68,1234,68C1302.9,68,1371,136,1440,175.7C1508.6,215,1577,227,1646,226.7C1714.3,227,1783,215,1851,226.7C1920,238,1989,272,2057,277.7C2125.7,283,2194,261,2263,226.7C2331.4,193,2400,147,2469,119C2537.1,91,2606,79,2674,62.3C2742.9,45,2811,23,2880,62.3C2948.6,102,3017,204,3086,209.7C3154.3,215,3223,125,3291,119C3360,113,3429,193,3497,192.7C3565.7,193,3634,113,3703,85C3771.4,57,3840,79,3909,119C3977.1,159,4046,215,4114,198.3C4182.9,181,4251,91,4320,62.3C4388.6,34,4457,68,4526,85C4594.3,102,4663,102,4731,85C4800,68,4869,34,4903,17L4937.1,0L4937.1,340L4902.9,340C4868.6,340,4800,340,4731,340C4662.9,340,4594,340,4526,340C4457.1,340,4389,340,4320,340C4251.4,340,4183,340,4114,340C4045.7,340,3977,340,3909,340C3840,340,3771,340,3703,340C3634.3,340,3566,340,3497,340C3428.6,340,3360,340,3291,340C3222.9,340,3154,340,3086,340C3017.1,340,2949,340,2880,340C2811.4,340,2743,340,2674,340C2605.7,340,2537,340,2469,340C2400,340,2331,340,2263,340C2194.3,340,2126,340,2057,340C1988.6,340,1920,340,1851,340C1782.9,340,1714,340,1646,340C1577.1,340,1509,340,1440,340C1371.4,340,1303,340,1234,340C1165.7,340,1097,340,1029,340C960,340,891,340,823,340C754.3,340,686,340,617,340C548.6,340,480,340,411,340C342.9,340,274,340,206,340C137.1,340,69,340,34,340L0,340Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stopColor="#3b82f6" offset="0%"></stop><stop stopColor="#3b82f600" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 50px)", opacity: "0.9" }} fill="url(#sw-gradient-1)" d="M0,0L34.3,22.7C68.6,45,137,91,206,124.7C274.3,159,343,181,411,187C480,193,549,181,617,153C685.7,125,754,79,823,102C891.4,125,960,215,1029,249.3C1097.1,283,1166,261,1234,226.7C1302.9,193,1371,147,1440,153C1508.6,159,1577,215,1646,226.7C1714.3,238,1783,204,1851,164.3C1920,125,1989,79,2057,85C2125.7,91,2194,147,2263,175.7C2331.4,204,2400,204,2469,198.3C2537.1,193,2606,181,2674,181.3C2742.9,181,2811,193,2880,192.7C2948.6,193,3017,181,3086,192.7C3154.3,204,3223,238,3291,260.7C3360,283,3429,295,3497,294.7C3565.7,295,3634,283,3703,232.3C3771.4,181,3840,91,3909,73.7C3977.1,57,4046,113,4114,119C4182.9,125,4251,79,4320,56.7C4388.6,34,4457,34,4526,39.7C4594.3,45,4663,57,4731,79.3C4800,102,4869,136,4903,153L4937.1,170L4937.1,340L4902.9,340C4868.6,340,4800,340,4731,340C4662.9,340,4594,340,4526,340C4457.1,340,4389,340,4320,340C4251.4,340,4183,340,4114,340C4045.7,340,3977,340,3909,340C3840,340,3771,340,3703,340C3634.3,340,3566,340,3497,340C3428.6,340,3360,340,3291,340C3222.9,340,3154,340,3086,340C3017.1,340,2949,340,2880,340C2811.4,340,2743,340,2674,340C2605.7,340,2537,340,2469,340C2400,340,2331,340,2263,340C2194.3,340,2126,340,2057,340C1988.6,340,1920,340,1851,340C1782.9,340,1714,340,1646,340C1577.1,340,1509,340,1440,340C1371.4,340,1303,340,1234,340C1165.7,340,1097,340,1029,340C960,340,891,340,823,340C754.3,340,686,340,617,340C548.6,340,480,340,411,340C342.9,340,274,340,206,340C137.1,340,69,340,34,340L0,340Z"></path></svg>
            </motion.div>
            <motion.div
                variants={bottomVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-0 right-0 w-full h-auto">
                <svg style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 340" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(59, 130, 246, 1)" offset="0%"></stop><stop stopColor="rgba(59, 130, 246, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,0L34.3,17C68.6,34,137,68,206,119C274.3,170,343,238,411,255C480,272,549,238,617,238C685.7,238,754,272,823,272C891.4,272,960,238,1029,187C1097.1,136,1166,68,1234,68C1302.9,68,1371,136,1440,175.7C1508.6,215,1577,227,1646,226.7C1714.3,227,1783,215,1851,226.7C1920,238,1989,272,2057,277.7C2125.7,283,2194,261,2263,226.7C2331.4,193,2400,147,2469,119C2537.1,91,2606,79,2674,62.3C2742.9,45,2811,23,2880,62.3C2948.6,102,3017,204,3086,209.7C3154.3,215,3223,125,3291,119C3360,113,3429,193,3497,192.7C3565.7,193,3634,113,3703,85C3771.4,57,3840,79,3909,119C3977.1,159,4046,215,4114,198.3C4182.9,181,4251,91,4320,62.3C4388.6,34,4457,68,4526,85C4594.3,102,4663,102,4731,85C4800,68,4869,34,4903,17L4937.1,0L4937.1,340L4902.9,340C4868.6,340,4800,340,4731,340C4662.9,340,4594,340,4526,340C4457.1,340,4389,340,4320,340C4251.4,340,4183,340,4114,340C4045.7,340,3977,340,3909,340C3840,340,3771,340,3703,340C3634.3,340,3566,340,3497,340C3428.6,340,3360,340,3291,340C3222.9,340,3154,340,3086,340C3017.1,340,2949,340,2880,340C2811.4,340,2743,340,2674,340C2605.7,340,2537,340,2469,340C2400,340,2331,340,2263,340C2194.3,340,2126,340,2057,340C1988.6,340,1920,340,1851,340C1782.9,340,1714,340,1646,340C1577.1,340,1509,340,1440,340C1371.4,340,1303,340,1234,340C1165.7,340,1097,340,1029,340C960,340,891,340,823,340C754.3,340,686,340,617,340C548.6,340,480,340,411,340C342.9,340,274,340,206,340C137.1,340,69,340,34,340L0,340Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(59, 130, 246, 1)" offset="0%"></stop><stop stopColor="rgba(59, 130, 246, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 50px)", opacity: "0.9" }} fill="url(#sw-gradient-1)" d="M0,0L34.3,22.7C68.6,45,137,91,206,124.7C274.3,159,343,181,411,187C480,193,549,181,617,153C685.7,125,754,79,823,102C891.4,125,960,215,1029,249.3C1097.1,283,1166,261,1234,226.7C1302.9,193,1371,147,1440,153C1508.6,159,1577,215,1646,226.7C1714.3,238,1783,204,1851,164.3C1920,125,1989,79,2057,85C2125.7,91,2194,147,2263,175.7C2331.4,204,2400,204,2469,198.3C2537.1,193,2606,181,2674,181.3C2742.9,181,2811,193,2880,192.7C2948.6,193,3017,181,3086,192.7C3154.3,204,3223,238,3291,260.7C3360,283,3429,295,3497,294.7C3565.7,295,3634,283,3703,232.3C3771.4,181,3840,91,3909,73.7C3977.1,57,4046,113,4114,119C4182.9,125,4251,79,4320,56.7C4388.6,34,4457,34,4526,39.7C4594.3,45,4663,57,4731,79.3C4800,102,4869,136,4903,153L4937.1,170L4937.1,340L4902.9,340C4868.6,340,4800,340,4731,340C4662.9,340,4594,340,4526,340C4457.1,340,4389,340,4320,340C4251.4,340,4183,340,4114,340C4045.7,340,3977,340,3909,340C3840,340,3771,340,3703,340C3634.3,340,3566,340,3497,340C3428.6,340,3360,340,3291,340C3222.9,340,3154,340,3086,340C3017.1,340,2949,340,2880,340C2811.4,340,2743,340,2674,340C2605.7,340,2537,340,2469,340C2400,340,2331,340,2263,340C2194.3,340,2126,340,2057,340C1988.6,340,1920,340,1851,340C1782.9,340,1714,340,1646,340C1577.1,340,1509,340,1440,340C1371.4,340,1303,340,1234,340C1165.7,340,1097,340,1029,340C960,340,891,340,823,340C754.3,340,686,340,617,340C548.6,340,480,340,411,340C342.9,340,274,340,206,340C137.1,340,69,340,34,340L0,340Z"></path></svg>
            </motion.div>
        </>
    )
}