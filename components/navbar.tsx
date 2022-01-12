import React from 'react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar({ toggle }) {
    return (
        <div
            id="nav_btn"
            className={classNames(
                'drop-shadow-xl',
                'z-200 ',
                'w-16 h-16 ',
                'fixed top-4 left-2 justify-center'
            )}
        >
            <div className={classNames('flex flex-row', 'items-center justify-center', 'h-full')}>
                <div className={classNames('cursor-pointer')} onClick={toggle}>
                    <svg
                        className="w-6 h-6"
                        fill="grey"
                        stroke="black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.75}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
