import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Dropdown = ({ isOpen, toggle }) => {
    const router = useRouter();

    return (
        <div
            className={
                isOpen ? 'grid grid-rows-4 text-center items-center bg-fuchsia-100' : 'hidden'
            }
        >
            <li className="p-4">
                <Link href="/">Home</Link>
            </li>
            <li className="p-4">
                <Link href="/menu">Menu</Link>
            </li>
            <li className="p-4">
                <Link href="/about"> About Us...</Link>
            </li>
            <li className="p-4">
                <Link href="/contact">Contact Us..</Link>
            </li>
        </div>
    );
};

export default Dropdown;
