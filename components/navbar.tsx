import React from 'react';

export default function Navbar({ toggle }) {
    return (
        <div id="nav_btn" className="drop-shadow-xl z-30 fixed top-4 w-100 h-100">
            <div className="flex flex-row justify-center h-10">
                <div
                    className="w-20 px-4 pt-4 cursor-pointer fixed left-0 right-0"
                    onClick={toggle}
                >
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
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
