import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import {Badge} from "../components/badge";

const SPEACH_URL = '/Speach1.svg'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function MenuSection() {
    let [inView, setInViewState] = useState('pending');
    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
    });
    const menuSectionRef = useRef(null);

    const MenuText = 'MENU LIST';
    const router = useRouter();

    useEffect(() => {
        const bottomPos = (element) => element.getBoundingClientRect().bottom;
        const div1Pos = bottomPos(menuSectionRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (div1Pos < scrollPos) {
                doShow((state) => ({ ...state, itemOne: true }));
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            id="menu-sec"
            className="relative overflow-hidden col-span-4 rounded-lg cursor-pointer w-5/6 h-96"
            ref={menuSectionRef}
        >
            <div id="menu-right" className={classNames('float-right', 'w-2/3', 'pt-10')}>
                <ul className="list-none">
                    <li
                        className={classNames(
                            'relative float-left rounded-full',
                            'my-1 ml-40 w-32 h-32 ',
                            'opacity-100',
                            'float-left',
                        )}
                    >
                      <Badge variant={Badge.variant.BABYBLUE} children={<>New!</>}/>
                        <img
                            className="rounded-full object-fill object-top w-32 h-32 shadow-lg"
                            src="/yetiFoodFb.png"
                            alt="Tea menu in cafe"
                        />
                    </li>
                    <li
                        className={classNames(
                            'relative float-left rounded-full',
                            'my-2 ml-14 w-32 h-32 ',
                            'opacity-100',
                            'float-left',
                            // 'overflow-hidden',
                        )}
                    >
                        
                         <Badge variant={Badge.variant.BABYBLUE} children={<>New!</>}/>
                        <img
                            className="rounded-full object-cover object-right-top w-32 h-32"
                            src="/brownie.png"
                            alt="brownie and coffee"
                        />
                          
                    </li>
                    <li
                        className={classNames(
                            'relative float-left',
                            'my-2 ml-14 w-32 h-32',
                            'opacity-100 overflow-hidden'
                        )}
                    >
                        <img
                            className="rounded-full object-contain object-top w-32 h-32"
                            src="/coffeCakeWAmericano.png"
                            alt="A picture ofCoffee flavored Cake and coffee in a mug"
                        />
                    </li>
                    <li
                        className={classNames(
                            'relative float-left rounded-full',
                            'my-2 ml-14 w-32 h-32 ',
                            'opacity-100',
                            'float-left',
                        )}
                    >
                        <Badge variant={Badge.variant.BABYBLUE} children={<>New!</>}/>
                        <img
                            className={classNames(
                                "rounded-full  w-32 h-32",
                                )}
                            src="/yetiCakeNeyYorkStyle.png"
                            alt="Tea menu in cafe"
                        />
                    </li>
                    <li
                        className={classNames(
                            'relative float-left rounded-full',
                            'my-2 mt-3 ml-14 w-32 h-32',
                            'opacity-100',
                            'float-left',
                        )}
                    >
                                <Badge variant={Badge.variant.BABYBLUE} children={<>New!</>}/>
                        <img
                            className="rounded-full object-fill object-top w-32 h-32"
                            src="/brownieWVanilla.png"
                            alt="brownie and coffee"
                        />
                    </li>
                    <li
                        className={classNames(
                            'relative float-left rounded-full',
                            'my-2 ml-14  w-32 h-32',
                            'opacity-100 overflow-hidden'
                        )}
                    >
                        <img
                            className={classNames(
                                "rounded-full w-52 h-48",
                                "object-cover object-left",
                                )}
                            src="/lemonCakeFB.png"
                            alt="A picture of Lemon Cake and slice of lemon"
                        />
                    </li>
                </ul>
            </div>

            <div id="menu-left" className="relative flaot-left w-96 h-full">
                <div
                    id="front"
                    className={classNames(
                        'bg-yetiGreen',
                        'w-5/6 h-5/6',
                        'z-20',
                        'transition-all ease-out duration-1000',
                        // inView && 'absolute top-0 left-1',
                        show.itemOne && 'absolute top-0 left-1'
                    )}
                >
                    <h2
                        className={classNames(
                            'font-bold text-3xl text-white text-center tracking-wider',
                            'mt-24 mb-36'
                        )}
                    >
                        {MenuText}
                    </h2>
                    <div
                        className={classNames(
                            'block relative',
                            'mx-auto my-0 w-fit bottom-24',
                            'text-white '
                        )}
                        onClick={() => doShow((state) => ({ ...state, itemOne: !show.itemOne }))}
                    >
                        <svg
                            className="w-12 h-12  stroke-white animate-[bounce_1s_infinite]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div
                    id="back"
                    className={classNames(
                        'w-5/6 h-5/6',
                        'z-10',
                        'overflow-hidden',
                        'bg-white',
                        'transition-property: all ease-out duration-1000',
                        show.itemOne && 'absolute bottom-0 right-1'
                        // inView && 'absolute bottom-0 right-1' ,
                    )}
                >
                    <img
                        className={classNames(
                            'object-cover'
                            //  'w-full  h-full'
                        )}
                        src="/yak.png"
                        alt="Indoor seating with chairs and table"
                    />
                </div>
            </div>
        </div>
    );
}
