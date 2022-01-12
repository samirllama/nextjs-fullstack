export default function CloudContainer() {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div
            className={classNames(
                // "bg-yellow-500 bg-cover",
                'bg-[rgb(161,219,255)]',
                'w-full h-screen col-span-4',
                'mx-10 py-80 px-10',
                'relative overflow-hidden'
            )}
        >
            <svg
                className={classNames(
                    'w-64 absolute h-80',
                    'top-1',
                    'z-2',
                    'animate-[move_20s_linear_infinite]'
                )}
                x="0"
                y="0"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="#fff"
                enable-background="new 0 0 512 512"
            >
                <path
                    id="cloud-icon"
                    d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"
                />
            </svg>
            <svg
                className={classNames(
                    ' absolute top-40',
                    'w-64 absolute h-80',
                    'z-2',
                    'animate-[move_40s_linear_infinite_backwards]'
                )}
                x="0"
                y="0"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="#fff"
                enable-background="new 0 0 512 512"
            >
                <path
                    id="cloud-icon"
                    d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"
                />
            </svg>
            <svg
                id="svgCloud"
                className={classNames(
                    ' absolute top-32',
                    'w-80 absolute h-96',
                    'z-2',
                    'animate-[move_10s_linear_infinite_backwards]'
                )}
                data-name="clouder"
                x="0"
                y="0"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="#fff"
                enable-background="new 0 0 512 512"
            >
                <defs></defs>
                <title>Untitled-5</title>
                <path
                    className="cloud1Fill"
                    d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"
                />
            </svg>

            <a
                className={classNames(
                    'transition-all ease-out duration-700  rounded-full',
                    ' absolute top-32',
                    'h-20 w-20',
                    'z-20',
                    'animate-[move_10s_linear_infinite_backwards]'
                )}
            >
                <img
                    className="rounded-full object-scale-down scale-90 animate-bounce"
                    src="/crazy-yeti.png"
                />
            </a>
        </div>
    );
}
