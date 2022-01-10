export default function Header({ handleClick }) {
    return (
        <header
            id="header"
            className="border block border-solid border-stone-200 w-full  h-16 z-10 fixed left-0 top-0 col-span-full justify-self-stretch bg-white"
        >
            <h1 className="block border border-solid border-stone-200 absolute inset-x-1/2 -top-1 opacity-100 w-32 h-32 -ml-14 rounded-full bg-white hover:cursor-pointerm ">
                <a className="relative top-4 left-4 rounded-full " onClick={handleClick}>
                    <img
                        className="w-9/12 rounded-full  block object-center"
                        src="/crazy-yeti.png"
                    />
                </a>
            </h1>
        </header>
    );
}

//// w-24 h-24 -ml-10
