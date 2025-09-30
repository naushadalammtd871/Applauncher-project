import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center mt-20 sm:mt-40 justify-center flex-col gap-10'>
        <motion.div initial={{opacity: 0, y: -500}} animate={{opacity: 1, y: 0}} transition={{duration: 2}} className="">
            <h1 className='text-emerald-600 text-3xl font-bold'>Hello developer</h1>
        </motion.div>
        <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x: 0}} transition={{duration: 2}} className="flex items-center justify-center">
            <p className='sm:text-xl text-sm w-full sm:w-3/4 text-center text-[#ffffffc4]'>
                Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy. On Earth, most weather phenomena occur in the lowest layer of the planet's atmosphere, the troposphere, just below the stratosphere.
            </p>
        </motion.div>
        <motion.button onClick={() => navigate("/label1")} initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0}} transition={{duration: 2}} className='text-xl mt-5 sm:mt-0 font-bold text-[#333333] bg-emerald-600 py-[10px] px-[30px] rounded-full'>Explore</motion.button>
    </div>
  )
}

export default Home
