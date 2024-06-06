"use client";
import React, { useState } from 'react'
import { IoBagOutline } from 'react-icons/io5';
import { PiArrowArcLeft } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";

const AsideLeft = () => {
    const [buttonOpen, setButtonOpen] = useState({
        onceHover: false,
        button1: false,
        button2: false,
        button3: false
    });

    /**
     * @param {("button1"|"button2"|"button3"|"onceHover")} button 
     * @param {Boolean} value  */
    const handleButtonState = (button, value) => {
        setButtonOpen(prevState => {
            if (prevState[button] === true && value === true) {
                return prevState;
            }

            return {
                ...Object.keys(prevState).reduce((acc, key) => {
                    acc[key] = key === button ? value : false;
                    return acc;
                }, {}),
                onceHover: true
            };
        });
    };

    return (
        <aside className="h-full p-[14px] bg-white w-[22rem] rounded-3xl">
            <div className="h-full rounded-xl bg-red-50 p-4">
                <div className="flex">
                    <h1 className="text-3xl font-sans font-bold text-balance">
                        Order Your Favorite Food
                    </h1>

                    <button className="p-3 h-fit rounded-full bg-white rotate-[33deg]">
                        <PiArrowArcLeft size={15} />
                    </button>
                </div>

                <div className="mt-4 flex justify-between">
                    <div className="flex -space-x-2 overflow-hidden">
                        <button onMouseOver={() => handleButtonState("onceHover", true)} onClick={() => handleButtonState("button1", true)} className="group/button overflow-hidden flex bg-black min-w-10 text-white rounded-full text-sm">
                            <div className="h-10 w-10 rounded-full flex-ji-center font-sriracha">
                                All
                            </div>
                            <div className={`${buttonOpen.button1 ? "w-14" : "w-0"} transition-all flex justify-start items-center ease-in-out duration-300 group-hover/button:w-14 h-full text-left text-white overflow-hidden`}>
                                <div className="w-full text-xs min-w-14 font-sriracha">
                                    See All
                                </div>
                            </div>
                        </button>

                        <button onMouseOver={() => handleButtonState("onceHover", true)} onClick={() => handleButtonState("button2", true)} className="group/button overflow-hidden flex bg-pink-300 min-w-10 text-black rounded-full text-sm">
                            <div className="h-10 w-10 rounded-full flex-ji-center font-sriracha">
                                B
                            </div>
                            <div className={`${buttonOpen.button2 ? "w-14" : "w-0"} ${buttonOpen.onceHover ? "group-hover/button:w-14" : "!w-14"} transition-all flex justify-start items-center ease-in-out duration-300 h-full text-left overflow-hidden`}>
                                <div className="w-full text-xs min-w-14">
                                    Burger
                                </div>
                            </div>
                        </button>

                        <button onMouseOver={() => handleButtonState("onceHover", true)} onClick={() => handleButtonState("button3", true)} className="group/button overflow-hidden flex bg-blue-600 min-w-10 text-white rounded-full text-sm">
                            <div className="h-10 w-10 rounded-full flex-ji-center font-sriracha">
                                D
                            </div>
                            <div className={`${buttonOpen.button3 ? "w-14" : "w-0"} transition-all flex justify-start items-center ease-in-out duration-300 group-hover/button:w-14 h-full text-left text-white overflow-hidden`}>
                                <div className="w-full text-xs min-w-14">
                                    Drink
                                </div>
                            </div>
                        </button>
                    </div>

                    <button className="overflow-hidden flex-ji-center transition bg-yellow-700/10 hover:bg-yellow-700/20 min-w-10 text-white rounded-full text-sm">
                        <RiSearch2Line className='text-black' size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-2 mt-12 gap-x-4 gap-y-6">

                    <div className="group/item relative w-full flex flex-col justify-center items-center transition-all ease-in-out duration-300 bg-yellow-800/10 hover:bg-yellow-800/20 rounded-2xl pb-3">
                        <img className="group-hover/item:animate-levitate w-28 -translate-y-3" src="/images/burger.png" alt="burger" />
                        <div className="detail text-center">
                            <div className="title text-[0.90rem] font-sriracha font-semibold">
                                <h2>Spicy Beast</h2>
                            </div>
                            <div className="category text-[0.60rem] text-muted-foreground">
                                <p>Double Cheese Burger</p>
                            </div>
                            <div className="font-semibold text-sm mt-2">
                                <h1>$12.67</h1>
                            </div>
                        </div>
                        <button className="absolute -bottom-1.5 -right-2 p-2 rounded-full bg-yellow-800/10 border-[3px] border-white">
                            <IoBagOutline size={15} />
                        </button>
                    </div>

                    <div className="group/item relative w-full flex flex-col justify-center items-center transition-all ease-in-out duration-300 bg-yellow-800/10 hover:bg-yellow-800/20 rounded-2xl pb-3">
                        <img className="group-hover/item:animate-levitate w-28 -translate-y-3" src="/images/burger.png" alt="burger" />
                        <div className="detail text-center">
                            <div className="title text-[0.90rem] font-sriracha font-semibold">
                                <h2>Cheese Bust</h2>
                            </div>
                            <div className="category text-[0.60rem] text-muted-foreground">
                                <p>Double Cheese Burger</p>
                            </div>
                            <div className="font-semibold text-sm mt-2">
                                <h1>$12.67</h1>
                            </div>
                        </div>
                        <button className="absolute -bottom-1.5 -right-2 p-2 rounded-full bg-yellow-800/10 border-[3px] border-white">
                            <IoBagOutline size={15} />
                        </button>
                    </div>

                    <div className="group/item relative w-full flex flex-col justify-center items-center transition-all ease-in-out duration-300 bg-yellow-800/10 hover:bg-yellow-800/20 rounded-2xl pb-3">
                        <img className="group-hover/item:animate-levitate w-28 -translate-y-3" src="/images/burger.png" alt="burger" />
                        <div className="detail text-center">
                            <div className="title text-[0.90rem] font-sriracha font-semibold">
                                <h2>Peparini Moo</h2>
                            </div>
                            <div className="category text-[0.60rem] text-muted-foreground">
                                <p>Peparoni Burger</p>
                            </div>
                            <div className="font-semibold text-sm mt-2">
                                <h1>$12.67</h1>
                            </div>
                        </div>
                        <button className="absolute -bottom-1.5 -right-2 p-2 rounded-full bg-yellow-800/10 border-[3px] border-white">
                            <IoBagOutline size={15} />
                        </button>
                    </div>

                    <div className="group/item relative w-full flex flex-col justify-center items-center transition-all ease-in-out duration-300 bg-yellow-800/10 hover:bg-yellow-800/20 rounded-2xl pb-3">
                        <img className="group-hover/item:animate-levitate w-28 -translate-y-3" src="/images/burger.png" alt="burger" />
                        <div className="detail text-center">
                            <div className="title text-[0.90rem] font-sriracha font-semibold">
                                <h2>Beef Burger</h2>
                            </div>
                            <div className="category text-[0.60rem] text-muted-foreground">
                                <p>Meat Cheese Burger</p>
                            </div>
                            <div className="font-semibold text-sm mt-2">
                                <h1>$12.67</h1>
                            </div>
                        </div>
                        <button className="absolute -bottom-1.5 -right-2 p-2 rounded-full bg-yellow-800/10 border-[3px] border-white">
                            <IoBagOutline size={15} />
                        </button>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                    <div className="relative bg-yellow-800/10 p-4 rounded-2xl space-y-2 overflow-hidden">
                        <h1 className="relative z-20 font-semibold text-black">Gift Drink</h1>
                        <button className="relative z-20 px-5 text-sm py-1.5 bg-black text-white font-sriracha rounded-full">
                            Add+
                        </button>
                        <h1 className="select-none absolute z-10 -bottom-[0.890rem] -right-[1.6rem] font-black text-black/20 text-5xl">
                            FOOD
                        </h1>
                    </div>

                    <div className="relative bg-black p-4 rounded-2xl space-y-2">
                        <h1 className="relative z-20 font-semibold text-white">Free Packing</h1>
                        <button className="relative z-20 px-5 text-sm py-1.5 bg-gray-600 text-white font-sriracha rounded-full">
                            Add+
                        </button>
                        <h1 className="select-none absolute z-10 -bottom-[0.890rem] -right-[1.6rem] font-black text-white/20 text-5xl">
                            FOOD
                        </h1>
                    </div>

                </div>
            </div>
        </aside>
    )
}

export default AsideLeft