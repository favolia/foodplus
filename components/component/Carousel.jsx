"use client";
import React, { useState } from 'react'
import { Carousel as CarouselRoot, CarouselContent, CarouselItem } from '../ui/carousel'
import { SiMastercard } from "react-icons/si";

const Carousel = () => {
    const [onDrag, setOnDrag] = useState(false);

    return (
        <CarouselRoot
            onMouseUp={() => setOnDrag(false)}
            onMouseDown={() => setOnDrag(true)}
            className={`${onDrag ? "cursor-grabbing" : "cursor-grab"} select-none relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto`}>
            <CarouselContent>
                <CarouselItem className="pl-10">
                    <div className="snap-center shrink-0">
                        <div className='bg-slate-900 rounded-lg h-20 w-80 px-6 flex-col flex-ji-center'>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-xs font-semibold text-white'>Master card</p>
                                <h1 className='text-lg font-semibold text-white'>2,235.97 US$</h1>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <h2 className='font-sans tracking-tight text-white'>5367 1120 8905 0177</h2>
                                <div>
                                    <SiMastercard className='text-white' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>

                <CarouselItem className="pl-10">
                    <div className="snap-center shrink-0">
                        <div className='bg-blue-600 rounded-lg h-20 w-80 px-6 flex-col flex-ji-center'>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-xs font-semibold text-white'>Master card</p>
                                <h1 className='text-lg font-semibold text-white'>2,235.97 US$</h1>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <h2 className='font-sans tracking-tight text-white'>5367 1120 8905 0177</h2>
                                <div>
                                    <SiMastercard className='text-white' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button></button>
                </CarouselItem>

                <CarouselItem className="pl-10">
                    <div className="snap-center shrink-0">
                        <div className='bg-pink-400 rounded-lg h-20 w-80 px-6 flex-col flex-ji-center'>
                            <div className='flex w-full justify-between items-center'>
                                <p className='text-xs font-semibold text-white'>Master card</p>
                                <h1 className='text-lg font-semibold text-white'>2,235.97 US$</h1>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <h2 className='font-sans tracking-tight text-white'>5367 1120 8905 0177</h2>
                                <div>
                                    <SiMastercard className='text-white' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </CarouselRoot>
    )
}

export default Carousel