import React from 'react'

import { FiBell } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav className='flex bg-transparent'>
            <div className='flex justify-between items-center w-full py-2 px-20'>
                <div className='flex-ji-center space-x-20'>
                    <h3 className='text-blue-500 italic text-2xl font-bold tracking-tighter'>food+</h3>
                    <form className='flex-ji-center'>
                        <label htmlFor="input-search">
                            <RiSearch2Line className='text-muted-foreground' size={20} />
                        </label>
                        <input type="text" placeholder='Search for Food' className='bg-transparent rounded-md p-2 placeholder:text-sm placeholder:font-medium placeholder:tracking-tight outline-none transition ease-in-out duration-300' />
                    </form>
                </div>

                <div className='flex items-center gap-x-4'>
                    <button>
                        <FiBell size={20} className='text-muted-foreground' />
                    </button>
                    <div className='relative'>
                        <div className='size-1.5 bg-blue-600 rounded-full absolute z-20 right-0.5 ring-1 ring-white'></div>
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar