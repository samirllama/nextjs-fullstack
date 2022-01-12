import * as React from 'react';
import { useRouter } from 'next/router';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Dropdown from '../components/dropdown';
import Navbar from '../components/navbar';
import Header from '../components/header';
import BaseWrapper from '../components/baseWrapper';
import MainWrapper from '../components/mainWrapper';
import MenuSection from '../components/homeMenuSec';
import RightSection from '../components/sidePanel';import {Badge} from "../components/badge";
// import Map from '../components/map/map';
// import Marker from '../components/map/marker';

const ADDRESS = `Boudhanath Sadak, \nKatkhmandu, Nepal`;
const URLTest = '/applePie.png';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const render = (status: Status) => {
    return <h1>{status}</h1>;
};

const Home = () => {
    const secOneRef = React.useRef(null);
    const imageRef = React.useRef(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const [miniLogo, setMiniLogo] = React.useState(false);
    const [show, doShow] = React.useState({
        secOne: false,
        secTwo: false,
        secThree: false
    });
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0
    });

    const onMapClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
    };

    const onIdle = (m: google.maps.Map) => {
        console.log('onIdle');
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

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

    console.log('from home', process.env.NEXT_PUBLIC_API_KEY);

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

                        <div className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-25"></div>
                    </div>

                    <MenuSection />

                        <div className={classNames(
                            // "bg-yellow-500 bg-cover",
                            "bg-[rgb(161,219,255)]",
                            "w-full h-screen col-span-4",
                            'mx-10 py-80 px-10',
                            'relative overflow-hidden',
                        )}
                        >
                            <svg
                                className={classNames(
                                    "w-64 absolute h-80",
                                    'top-1',
                                    'z-2',
                                    'animate-[move_20s_linear_infinite]'
                                    )}
                              x="0" y="0" width="512" height="512" viewBox="0 0 512 512" fill='#fff' enable-background="new 0 0 512 512"
                            >
                                <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
                            </svg>
                            <svg
                                className={classNames(
                                    ' absolute top-40',
                                    "w-64 absolute h-80",
                                    'z-2',
                                    'animate-[move_40s_linear_infinite_backwards]'
                                    )}
                              x="0" y="0" width="512" height="512" viewBox="0 0 512 512" fill='#fff' enable-background="new 0 0 512 512"
                            >
                                <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
                            </svg>
                            <svg id="svgCloud"        
                             className={classNames(
                                    ' absolute top-32',
                                    "w-80 absolute h-96",
                                    'z-2',
                                    'animate-[move_10s_linear_infinite_backwards]'
                                    )} data-name="clouder"   x="0" y="0" width="512" height="512" viewBox="0 0 512 512" fill='#fff' enable-background="new 0 0 512 512"><defs></defs><title>Untitled-5</title><path className="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/>
                            </svg>
                            
                            <a
                    className={classNames(
                        'transition-all ease-out duration-700  rounded-full',
                        ' absolute top-32',
                        "h-20 w-20",
                        'z-20',
                        'animate-[move_10s_linear_infinite_backwards]'
                        )}>
                    <img
                        className="rounded-full object-scale-down scale-90 animate-bounce"
                        src="/crazy-yeti.png"
                    />
                </a>

                        </div>
                    
                    
                    
                    
                    <div
                        id="insta-sec"
                        className="grid grid-rows-2 justify-items-center  w-5/6 relative overflow-hidden col-span-4  px-14 h-96 mb-4 bg-slate-50"
                    >
                        <div className="col-span-1 w-full "></div>
                        <div className="col-span-1 w-full border border-solid border-orange-500">
                            {' '}
                            <div
                                className={classNames(
                                    'w-full',
                                    'justify-items-center  relative overflow-hidden',
                                    'background bg-cover bg-center'
                                )}
                                style={{ backgroundImage: `url(${URLTest})` }}
                            >
                                <h1 className="mix-blend-lighten font-bold text-black bg-white text-9xl">
                                    INSTAGRAM
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div
                        id="map-sec"
                        className={classNames(
                            'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2',
                            'col-span-4 mb-36',
                            'gap-x-3  px-20 sm:h-auto md:h-auto lg:h-96 w-full',
                            'justify-items-end  relative overflow-hidden'
                        )}
                    >
                        <div
                            id="hours_address"
                            className={classNames('h-1/3 w-full col-span-1', 'mt-24 mr-10')}
                        >
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

                        <div
                            id="google_maps"
                            className={classNames(
                                'justify-items-center',
                                ' col-span-1 h-full w-full'
                            )}
                        >
                            <img src="/yeti-map-image.png" alt="" />
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </BaseWrapper>
    );
};

export default Home;
