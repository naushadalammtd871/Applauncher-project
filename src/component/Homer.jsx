import { useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homer = () => {
    const navigate = useNavigate();

    const { isSignedIn, isLoaded, user } = useUser();

    if (!isLoaded) {
        // Handle loading state
        return null;
    }

    if (!isSignedIn) {
        return (
            <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x: 0}} transition={{duration: 3}} className='w-full flex items-center justify-center mx-auto mt-60'>
                <div className="">
                    <h1 className='text-3xl text-center font-bold text-emerald-600'>Before signing letter him try again............?</h1>
                </div>
            </motion.div>
        )
    };

    const updateUser = async () => {
        await user.update({
        firstName: "John",
        lastName: "Doe",
        });
    };


  return (
    <div className='flex flex-col items-center justify-center sm:mt-20 mt-12 gap-6'>
        <div className="h-[120px] w-[120px] rounded-full">
            <img className='hfull w-full object-cover' src="/Assets/cloud.png" alt="" />
        </div>
        <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x: 0}} transition={{duration: 1.5}} className="">
            <p onClick={updateUser} className='text-2xl sm:text-3xl font-bold flex items-center gap-1 text-center text-emerald-600'>
                <p>Hello, {user.firstName}</p>
                <p>{user.lastName}</p>
            </p>
        </motion.div>
        <div className="flex items-center justify-center">
            <p className='sm:text-xl text-sm w-full sm:w-3/4 text-center font-bold text-[#ffffffc0]'>Hello, <span className='text-emerald-600'>{user.firstName}</span> you can check your daily today weather free of const, offer provided for 1 month please dont miss you can check and very functionality provided explore this and, give me rating, if your daily check weather of nearest area and locality area.</p>
        </div>
        <div className="sm:mt-5 mt-7">
            <motion.button onClick={() => navigate("/label2")} initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0}} transition={{duration: 2}} className='text-xl font-bold text-[#333333] bg-emerald-600 py-[10px] px-[30px] rounded-full'>Explore</motion.button>
        </div>
    </div>
  )
}

export default Homer
