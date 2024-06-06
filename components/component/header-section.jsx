import { cn } from '@/lib/utils'
import React from 'react'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'

const HeaderSection = ({ title = "Example", className }) => {
    return (
        <div className={cn("header-section mt-8 mb-4 px-7 flex justify-between items-center text-white", className)}>
            <h2 className="font-semibold">{title}</h2>
            <div className="cursor-pointer">
                <PiDotsThreeOutlineFill />
            </div>
        </div>
    )
}

export default HeaderSection