import { useRouter } from 'next/router';
import * as React from 'react';

const styles = {
    headerClass:
        'transition-property: all duration-1000 ease-out w-full col-span-full justify-self-stretch bg-white',
    logoClass:
        'transition-property: all duration-1000 ease-out absolute inset-x-1/2 opacity-100 -ml-14 rounded-full bg-white hover:cursor-pointer hover:drop-shadow-2xl hover:bg-sky-900'
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Header({ handleClick, miniLogo }) {
    //    const router = useRouter()
    // className={`${styles.headerClass} ${miniLogo ? 'h-11' : ' h-12 '}`
    return (
        <header
            id="header"
            className={classNames(
                ' z-10 fixed left-0 top-0',
                'w-full col-span-full justify-self-stretch',
                ' bg-white',
                'transition-all duration-1000 ease-out',
                (miniLogo && 'h-11') || 'h-12'
            )}
        >
            <div
                className={classNames(
                    'absolute inset-x-1/2',
                    'w-full col-span-full -ml-16',
                    ' rounded-full block opacity-100',
                    ' bg-white',
                    'hover:cursor-pointer hover:drop-shadow-2xl',
                    'transition-all duration-700 ease-out',
                    'border-t-2 border-b-2 border-black',
                    (miniLogo && 'w-20 h-20 -ml-8 top-2') || 'top-60 w-36 h-36'
                )}
            >
                <a
                    className={` ${
                        !miniLogo
                            ? 'transition-all ease-out duration-700 relative rounded-full top-3 left-2'
                            : 'transition-all ease-out duration-700 relative rounded-full'
                    }`}
                >
                    <img
                        className="rounded-full object-scale-down scale-90"
                        src="/crazy-yeti.png"
                    />
                </a>
            </div>
        </header>
    );
}
{
    /* <header
id="header"
className="w-full h-16 z-10 fixed left-0 top-0 col-span-full justify-self-stretch bg-gray-white"
>
<h1 className="group bg-white blur-0 hover:drop-shadow-2xl hover:bg-slate-50  absolute inset-x-1/2 top-1 opacity-100 w-28 h-28 rounded-full  -ml-20 hover:cursor-pointer">
    <a
        className=" block absolute top-2 w-full"
        onClick={() => .push('/home')}
    >
        <img className="hover:cursor-pointer block w-full" src="/yetiLogo.svg" />
    </a>
</h1>
</header> */
}

//// w-24 h-24 -ml-10
