"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { TbArrowRight } from "react-icons/tb";
import Carousel from "@/components/component/Carousel";
import HeaderSection from "@/components/component/header-section";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiMapPinLineFill } from "react-icons/pi";
import { AiFillClockCircle } from "react-icons/ai";
import Draggable, { DraggableCore } from 'react-draggable';
import AsideLeft from "@/components/component/AsideLeft";

export default function Home() {
  const parentRef = useRef(null);
  const parentRef2 = useRef(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const parentWidth = parentRef.current.clientWidth - 20;
    const buttonWidth = 64;
    setBounds({ left: 0, top: 0, right: parentWidth - buttonWidth, bottom: 0 });
  }, []);

  useEffect(() => {
    const parentWidth = parentRef2.current.clientWidth;
    const buttonWidth = 48;
    setBounds({ left: 0, top: 0, right: parentWidth - buttonWidth, bottom: 0 });
  }, []);

  const handleStop = () => {
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 300);
  };

  return (
    <section className=" flex justify-center gap-x-4 items-center px-8 mb-8">

      <AsideLeft />

      <main className="flex flex-col justify-start gap-y-3 min-h-full w-[23rem] rounded-3xl">
        <div className="px-7 flex justify-between items-center w-full h-20 bg-black text-white rounded-t-2xl rounded-b-3xl overflow-hidden">

          <div className="flex gap-x-3">
            <div className="font-sriracha bg-white text-black font-bold text-lg rounded-full size-10 flex-ji-center">
              3
            </div>
            <div className="leading-4 flex flex-col justify-center">
              <h3 className="font-sriracha font-semibold">Cart</h3>
              <p className="font-sans text-xs">3 Items</p>
            </div>
          </div>

          <div className="flex -space-x-4">
            <div className="z-30 shadow shadow-black/40 font-sriracha bg-blue-300 text-black font-bold text-lg rounded-full size-10 flex-ji-center">
              A
            </div>
            <div className="z-20 shadow shadow-black/40 font-sriracha bg-yellow-300 text-black font-bold text-lg rounded-full size-10 flex-ji-center">
              B
            </div>
            <div className="z-10 shadow shadow-black/40 font-sriracha bg-green-300 text-black font-bold text-lg rounded-full size-10 flex-ji-center">
              C
            </div>
          </div>

        </div>

        <div className="w-full bg-black pt-5 pb-3 min-h-36 rounded-3xl">
          <div className="w-full px-6">
            <div className="flex justify-between items-center w-full rounded-full card-dark p-1">
              <p className="text-muted text-xs translate-x-5">Apply Cupon Code</p>
              <button className="px-6 py-2 rounded-full bg-yellow-50 text-sm font-sriracha font-semibold">
                Apply
              </button>
            </div>

            <div className="mt-4 text-sm font-medium px-4 gap-y-4 flex flex-col justify-center items-center w-full py-6 rounded-3xl card-dark p-1">
              <div className="w-full flex-col gap-y-0.5 flex-ji-center text-white/50">
                <div className="w-full flex justify-between">
                  <p>Subtotal</p>
                  <p>88.97 US$</p>
                </div>
                <div className="w-full flex justify-between">
                  <p>Shiping Fee</p>
                  <p>Standard - Fee</p>
                </div>
              </div>

              <div className="w-full flex justify-between text-primary-foreground">
                <p>Estimated Total</p>
                <p>22.97 US$ + Tax</p>
              </div>
            </div>

          </div>

          <HeaderSection title="Master Card" />
          <div className="w-full">
            <Carousel />
          </div>

          <HeaderSection title="Choose a courier" className={"mt-0"} />
          <div className="px-7">
            <div className="rounded-3xl flex justify-center gap-x-2.5 items-center pt-6 pb-3 bg-pink-300">

              <div className="flex-col gap-y-1.5 w-fit flex-ji-center">
                <div className="size-12 cursor-pointer flex-ji-center shadow shadow-black/10 bg-black text-white rounded-full">
                  <TbArrowRight size={22} />
                </div>
                <p className="text-xs font-medium text-center">Courier</p>
              </div>

              <div className="flex-col gap-y-1.5 w-fit flex-ji-center">
                <div className="size-12 cursor-pointer flex-ji-center shadow shadow-black/10 bg-gradient-to-br from-slate-800 to-slate-400 border-[3px] border-white text-white rounded-full">
                </div>
                <p className="text-xs font-medium text-center">Mir</p>
              </div>

              <div className="flex-col gap-y-1.5 w-fit flex-ji-center">
                <div className="size-12 cursor-pointer flex-ji-center shadow shadow-black/10 bg-gradient-to-br from-blue-800 to-blue-200 border-[3px] border-white text-white rounded-full">
                </div>
                <p className="text-xs font-medium text-center">Ryan</p>
              </div>

              <div className="flex-col gap-y-1.5 w-fit flex-ji-center">
                <div className="size-12 cursor-pointer flex-ji-center shadow shadow-black/10 bg-gradient-to-br from-yellow-700 to-yellow-300 border-[3px] border-white text-white rounded-full">
                </div>
                <p className="text-xs font-medium text-center">Gosling</p>
              </div>

              <div className="flex-col gap-y-1.5 w-fit flex-ji-center">
                <div className="size-12 cursor-pointer flex-ji-center shadow shadow-black/10 bg-gradient-to-br from-red-700 to-red-400 border-[3px] border-white text-white rounded-full">
                </div>
                <p className="text-xs font-medium text-center">Kratos</p>
              </div>

            </div>
          </div>

          <div className="mt-5 mb-3 px-7">
            <div className="relative flex justify-between items-center w-full rounded-full card-dark p-1">
              <div ref={parentRef} className="absolute w-full left-0 top-0"></div>
              <div className="relative flex space-x-3 justify-start items-center">
                <Draggable
                  axis="x"
                  handle=".handle"
                  position={position}
                  bounds={bounds}
                  onStop={handleStop}
                >
                  <button className={"handle z-20 px-7 py-3 rounded-full bg-yellow-50 text-sm font-sriracha font-semibold"}>
                    <IoBagOutline size={20} />
                  </button>
                </Draggable>

                <div className="flex -space-x-1">
                  <MdArrowForwardIos className="text-white animate-pulse" size={12} />
                  <MdArrowForwardIos className="text-white delay-500 animate-pulse" size={12} />
                  <MdArrowForwardIos className="text-white delay-700 animate-pulse" size={12} />
                </div>

                <h3 className="font-sriracha text-white text-sm">
                  Checkout Now
                </h3>
              </div>
              {/* <p className="text-muted text-xs translate-x-5">Apply Cupon Code</p> */}
            </div>
          </div>
        </div>
      </main>

      <aside className="h-full w-[22rem] rounded-3xl bg-white border-[14px] border-white">

        <div className="h-[28.5rem] rounded-t-2xl rounded-b-[2rem] bg-muted-foreground w-full">

        </div>

        <div className="mt-3.5 grid grid-cols-2 gap-x-4 px-3 py-4 w-full h-56 rounded-[2rem] bg-black">

          <div className="card-dark overflow-hidden -translate-x-6 -rotate-12 backdrop-blur-sm rounded-[2rem]">
            <div className="flex flex-col gap-y-2 bg-white w-full h-32 rounded-b-[2rem] py-4 px-4">
              <div className="flex justify-between items-center">
                <div className="size-11 rounded-full bg-gradient-to-br from-slate-800 to-slate-400"></div>
                <h3 className="font-sans">Courier</h3>
              </div>

              <div>
                <p className="text-[0.70rem] text-muted-foreground">ID: 56565-55874</p>
                <h2 className="font-sans font-semibold">Dana WIlliam</h2>
              </div>
            </div>

            <div className="mt-2 w-full px-2">
              <div className="relative flex items-center gap-x-1 bg-slate-100/10 p-2 rounded-full">
                <div ref={parentRef2} className="absolute left-0 top-0 w-full"></div>
                <Draggable
                  axis="x"
                  handle=".handle"
                  position={position}
                  bounds={bounds}
                  onStop={handleStop}
                >
                  <button className="handle outline-none z-20 p-2 rounded-full bg-white">
                    <BsFillTelephoneFill size={15} className="text-gray-500" />
                  </button>
                </Draggable>

                <div className="flex -space-x-1">
                  <MdArrowForwardIos className="text-white animate-pulse" size={12} />
                  <MdArrowForwardIos className="text-white delay-500 animate-pulse" size={12} />
                  <MdArrowForwardIos className="text-white delay-700 animate-pulse" size={12} />
                </div>

                <p className="font-sriracha text-white text-sm">Call</p>
              </div>
            </div>
          </div>

          <div className="card-dark rounded-[2rem] text-white py-4 pl-4 font-sans">
            <h2 className="">
              Address
            </h2>
            <div className="mt-3 flex gap-x-2">
              <PiMapPinLineFill className="text-xl" />
              <p className="text-sm text-balance w-24">Houesign Estate, Lan 9, 25/3</p>
            </div>

            <h2 className="mt-3 font-medium text-[1.1rem]">Estimate Time</h2>
            <div className="flex justify-start items-center gap-x-2">
              <AiFillClockCircle />
              <p className="text-sm">30 minutes</p>
            </div>
          </div>

        </div>
      </aside>
    </section>
  );
}
