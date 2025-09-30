import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center mt-20 sm:mt-40 justify-center flex-col gap-10'>
        <motion.div initial={{opacity: 0, y: -500}} animate={{opacity: 1, y: 0}} transition={{duration: 2}} className="">
            <h1 className='text-emerald-600 sm:text-3xl text-2xl font-bold'>Hello developer</h1>
        </motion.div>
        <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x: 0}} transition={{duration: 2}} className="flex items-center justify-center">
            <p className='sm:text-xl text-sm w-full sm:w-3/4 text-center text-[#ffffffc4]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur repellendus vitae laboriosam sed nemo incidunt, distinctio reprehenderit tempore sint iste accusamus vero est quos error officia illum ipsam odio quod hic nihil eius expedita nulla!
            </p>
        </motion.div>
        <motion.button onClick={() => navigate("/label1")} initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0}} transition={{duration: 2}} className='text-xl font-bold text-[#333333] bg-emerald-600 py-[10px] px-[30px] rounded-full'>Explore</motion.button>
    </div>
  )
}

export default Home