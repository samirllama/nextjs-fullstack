import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Dropdown = ({ isOpen, toggle }) => {
    const router = useRouter();

    return (
        <div
            className={classNames(
                'fixed top-0 left-0 list-none',
                'w-1/2 h-full',
                'text-center',
                'grid grid-rows-4',
                'z-100',
                isOpen && 'bg-white ',
                !isOpen && 'hidden'
            )}
            id="nav_sidebar"
        >
            <div className="absolute z-2 top-0 h-full bg-white w-full left-0 ">
                <a
                    className={classNames(
                        'w-20 h-20 rounded-full',
                        'absolute top-20 left-28',
                        'transition-all ease-out duration-1000',
                        'ring-2 ring-blue-600 ring-offset-4 ring-offset-purple-100 animate-bounce',
                        isOpen && 'animate-none'
                    )}
                >
                    <img
                        className="rounded-full object-scale-down scale-90 animate-none top-20 left-28 "
                        src="/crazy-yeti.png"
                    />
                </a>

                <div className="absolute inset-y-1/3 left-20 bg-white h-40 mb-10">
                    <li
                        className={classNames(
                            'p-2 ml-0',
                            'font-futura font-bold text-left',
                            'text-2xl tracking-wide',
                            // 'before:scale-x-0',
                            'hover:underline-offset-4 hover:underline'
                        )}
                    >
                        <Link className={classNames()} href="/">
                            HOME
                        </Link>
                    </li>
                    <li
                        className={classNames(
                            'p-2 ml-0',
                            'font-mono font-bold text-left',
                            'text-2xl tracking-wide',
                            'hover:underline-offset-4 hover:underline'
                        )}
                    >
                        <Link href="/menu">MENU LIST</Link>
                    </li>
                    <li
                        className={classNames(
                            'p-2 ml-0',
                            'font-mono font-bold text-left',
                            'text-2xl tracking-wide',
                            'hover:underline-offset-4 hover:underline hover:ease-in',
                            'transition duration-1000 ease-out'
                        )}
                    >
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </div>
            </div>

            <div
                id="bg-sidebar"
                className="block fixed top-0 left-0 w-full h-full z-1 bg-custom-transparent"
            />
        </div>
    );
};

export default Dropdown;
