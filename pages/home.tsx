import NextImage from 'next/image';
import { useRouter } from 'next/router';
import Dropdown from '../components/dropdown';
import { useState, useLayoutEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import BaseWrapper from '../components/baseWrapper';
import MainWrapper from '../components/mainWrapper';

const Home = () => {
    const router = useRouter();
    const MenuText = 'Checkout our menu';
    const [isOpen, setIsOpen] = useState(false);
    const ADDRESS = `Boudhanath Sadak, \nKatkhmandu, Nepal`

    const mainRef = useRef(null);

    useLayoutEffect(() => {
         
        const onScroll = () => {
            console.log('innerHeight',window.innerHeight)
            console.log('scrollY', window.scrollY)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
      <BaseWrapper>
       <Header handleClick={() => console.log('header clicked')} />

                <Navbar toggle={() => setIsOpen(!isOpen)} />
                <Dropdown toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />

<MainWrapper>
        <div className="h-full grid grid-cols-1 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-full place-items-center ">
        
            {/* <div id="nav_btn" className="border border-solid border-l-pink-700 z-30 col-span-full justify-self-stretch">
                <Navbar toggle={() => setIsOpen(!isOpen)} />
            </div> */}

            <div
                id="landing-image-sec"
                className=" relative overflow-hidden col-span-4  px-14 h-5/6"
            >
                <img
                    className="object-cover w-full object-bottom"
                    src="/foodTable.png"
                    alt="Feast on table"
                />
                <div className="grid absolute inset-y-32 left-30 w-1/4 h-1/6 place-content-center text-4xl font-medium tracking-tight text-white">
                    <h4 className="font-sans text-5xl font-medium tracking-tight text-white ">
                        Crazy Yeti
                    </h4>
                </div>
                <div className="absolute inset-y-0 bg-gradient-to-r from-neutral-700/30 w-full "></div>
            </div>

            <div
                id="menu-sec"
                className="border border-solid border-orange-500  relative overflow-hidden col-span-4 rounded-lg shadow-lg cursor-pointer "
            >
                <img className="w-full h-64" src="/menuIdea.png" alt="Tea menu in cafe" />
                <div
                    className=" px-6 py-3 hover:bg-violet-200 hover:cursor-pointer"
                    onClick={() => router.push('/menu')}
                >
                    <div className="font-bold text-xl ">Menu ❤️</div>
                    <p className="text-grey-darker text-base">{MenuText}</p>
                </div>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    ></path>
                </svg>
            </div>
            

            <div
                id="map-sec"
                className="grid grid-cols-2 gap-x-3 w-5/6 relative overflow-hidden col-span-4  px-14 h-96 justify-items-end 
                border border-solid "
            >
                <div id="map-sec-address" className="h-full col-span-1 w-full mt-28 mr-10">
                    <div className="flex flex-row items-baseline divide-x divide-solid divide-zinc-400">
                        <div id='address' className="flex flex-col w-full  items-center text-base">
                          <strong className="inline-flex items-baseline font-semibold font-mono text-base text-neutral-500 pb-4">Address</strong>
                          <p className="whitespace-pre-wrap text-sm font-mono  font-sm text-zinc-500">{ADDRESS}</p>
                        </div>
                        <div id='hours' className=" flex flex-col w-full  items-center text-base">
                          <strong className="inline-flex items-baseline font-semibold font-mono text-base text-neutral-500 pb-4">Opening Times</strong>
                          <div className="text-sm font-mono   font-sm text-zinc-500">Monday-Friday 10:00-05:00</div>
                          <div className="text-sm font-mono font-sm text-zinc-500">Saturday 10:00-08:00</div>    
                          <div className="text-sm font-mono font-sm text-zinc-500">Sun: closed</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 w-full bg-orange-500  justify-items-center"><div className="">Map</div></div>
            </div>

            <div
                id="insta-sec"
                className="grid grid-rows-2 justify-items-center  w-5/6 relative overflow-hidden col-span-4  px-14 h-96 mb-4 bg-slate-50"
            >
                <div className="col-span-1 w-full border border-solid border-orange-500">
                    Insta Link
                </div>
                <div className="col-span-1 w-full border border-solid border-orange-500">
                    Pictures from social{' '}
                </div>
            </div>
        </div>
        </MainWrapper>
        </BaseWrapper>
    );
};

export default Home;
