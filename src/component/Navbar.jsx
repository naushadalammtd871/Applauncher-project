import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3 border-b border-b-[#ffffff9c]'>
        <div className="">
            <h1 className='text-2xl font-bold text-[#fffc]'>weather</h1>
        </div>
        <div className="">
            <SignedOut>
                <SignInButton>
                    <button className='text-lg font-bold text-[#333333] bg-[#ffffffe5] py-[4px] px-[25px] rounded-full'>Sign</button>    
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar