import * as React from 'react';
import { useRouter } from 'next/router';
import Dropdown from '../components/dropdown';
import Navbar from '../components/navbar';
import Header from '../components/header';
import BaseWrapper from '../components/baseWrapper';
import MainWrapper from '../components/mainWrapper';
import MenuSection from '../components/homeMenuSec';
import RightSection from '../components/sidePanel';

const MenuText = 'Checkout our menu';
const ADDRESS = `Boudhanath Sadak, \nKatkhmandu, Nepal`;

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

let state = 'busy';

console.log(
    classNames(
        'border border-4 border-dashed absolute inset-4 rounded-lg',
        'transition-all duration-300 ease-in-out',
        state === 'busy' && 'border-gray-300'
    )
);

const Home = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [miniLogo, setMiniLogo] = React.useState(false);
    const [show, doShow] = React.useState({
        secOne: false,
        secTwo: false,
        secThree: false
    });
    const secOneRef = React.useRef(null);
    const imageRef = React.useRef(null);
    const URLTest = '/applePie.png'

    React.useEffect(() => {
        const heroPosititon = imageRef.current.getBoundingClientRect().top;
        const heroPosititonBtm = imageRef.current.getBoundingClientRect().bottom;

        const onScroll = () => {
            if (window.scrollY > 70) {
                setMiniLogo(true);
            } else setMiniLogo(false);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <BaseWrapper>
            <RightSection />
            <Header miniLogo={miniLogo} handleClick={() => console.log('header clicked')} />

            <Navbar toggle={() => setIsOpen(!isOpen)} />
            <Dropdown toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />

            <MainWrapper>
                <div
                    className={classNames(
                        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
                        'w-full place-items-center gap-y-48'
                    )}
                    ref={secOneRef}
                >
                    <div
                        id="landing-image-sec"
                        className="relative overflow-hidden col-span-4 w-5/6  mt-10 backdrop-opacity-60 "
                        ref={imageRef}
                    >
                        <img
                            className="w-full h-full"
                            src="/yetiIndoorCrop.png"
                            alt="Feast on table"
                        />

                        <div className="absolute inset-0 w-full h-full bg-gray-800  bg-opacity-25"></div>
                    </div>

                    <MenuSection />

                    <div
                        id="map-sec"
                        className="grid grid-cols-2 gap-x-3 w-3/4 relative overflow-hidden col-span-4  px-14 h-96 justify-items-end"
                    >
                        <div id="map-sec-address" className="h-1/3 col-span-1 w-full mt-24 mr-10 ">
                            <div className="flex flex-row items-baseline divide-x divide-solid  divide-zinc-400 ">
                                <div
                                    id="address"
                                    className="flex flex-col w-full  items-center text-base"
                                >
                                    <strong className="inline-flex items-baseline font-semibold font-mono text-base text-neutral-500 pb-1">
                                        Address
                                    </strong>
                                    <p className="whitespace-pre-wrap text-sm font-mono  text-zinc-500">
                                        {ADDRESS}
                                    </p>
                                </div>
                                <div
                                    id="hours"
                                    className=" flex flex-col w-full  items-center text-base"
                                >
                                    <strong className="inline-flex items-baseline font-semibold font-mono text-base text-neutral-500 pb-1">
                                        Opening Times
                                    </strong>
                                    <div className="text-sm font-mono   font-sm text-zinc-500">
                                        Monday-Friday 10:00-05:00
                                    </div>
                                    <div className="text-sm font-mono font-sm text-zinc-500">
                                        Saturday 10:00-08:00
                                    </div>
                                    <div className="text-sm font-mono font-sm text-zinc-500">
                                        Sun: closed
                                    </div>
                                </div>
                            </div>
                            <div className="relative col-span-full w-full items-baseline text-sm font-medium font-mono text-neutral-500  pt-3 inset-x-1/3">
                                <strong className="inline-flex  whitespace-pre-wrap items-baseline text-sm font-bold font-mono">
                                    {' '}
                                    Phone:{' '}
                                </strong>
                                <p className="inline-flex whitespace-pre-wrap text-sm font-mono text-zinc-500">
                                    {' '}
                                    9741803947
                                </p>
                            </div>
                        </div>

                        <div className="col-span-1 w-full bg-orange-500  justify-items-center">
                            <div className="">Map</div>
                        </div>
                    </div>

                    <div className={classNames(
                        'col-span-4  w-3/6',
                        'justify-items-center  relative overflow-hidden',
                        'background bg-cover bg-center'
                    )}
                     style={{ backgroundImage:`url(${URLTest})` }} >
    <h1 className="mix-blend-lighten font-bold text-black bg-white text-9xl">BOTANY</h1>
  </div>

                    <div
                        id="insta-sec"
                        className="grid grid-rows-2 justify-items-center  w-5/6 relative overflow-hidden col-span-4  px-14 h-96 mb-4 bg-slate-50"
                    >
                        <div className="col-span-1 w-full border border-solid border-orange-500">
                            Insta Link
                        </div>
                        <div className="col-span-1 w-full border border-solid border-orange-500"></div>
                    </div>
                </div>
            </MainWrapper>
        </BaseWrapper>
    );
};

export default Home;
