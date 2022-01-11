export default function RightSection() {
    return (
        <div id="right-side" className="fixed right-0 z-10 w-20 h-full">
            <ul className="h-28 w-full list-none absolute inset-y-1/3 flex flex-col group">
                <li className="m-auto group-hover: cursor-pointer ">
                    <img
                        src="/insta.svg"
                        alt="Instagram"
                        className="transition-property: all duration-700 scale-75 group-hover:scale-125"
                    />
                </li>
                <li
                    className="m-auto hover: cursor-pointer"
                    onClick={() =>
                        window.location.assign(
                            'https://www.facebook.com/Crazy-Yeti-Ktm-100101115858763/'
                        )
                    }
                >
                    <img
                        src="/facebook.svg"
                        alt="facebook"
                        className="transition-property: all duration-700 scale-75 group-hover:scale-125"
                    />
                </li>
            </ul>
        </div>
    );
}
