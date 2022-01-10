import * as React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import { useRouter } from 'next/router';
import BaseWrapper from '../../components/baseWrapper';

const InitialMenuData = [
    {
        id: 1,
        category: 'Drinks',
        title: 'Espresso',
        description: 'Freshly brewed espresso',
        price: 'Rs 120',
        available: true,
        image: '/espresso.png'
    },
    {
        id: 2,
        category: 'Drinks',
        title: 'Doppio',
        description: 'Double shot of espresso',
        price: 'Rs 180',
        available: true,
        image: '/dbl-espresso.png'
    },
    {
        id: 3,
        category: 'Drinks',
        title: 'Espresso Affogato',
        description: 'Cool velvety vanilla bean ice cream drowned in freshly brewed espresso',
        price: 'Rs 190',
        available: true,
        image: '/affogato.png'
    },
    {
        id: 4,
        category: 'Drinks',
        title: 'Espresso Machiato',
        description:
            'This drink is prepared by first pulling a shot of espresso, as normal. Then just a dash of steamed milk and a bit of foam are poured on top.',
        price: 'Rs 150',
        available: true,
        image: '/macchiato.png'
    },
    {
        id: 5,
        category: 'Drinks',
        title: 'Americano',
        description:
            'The Americano tends to stand out amongst its espresso cousins because it doesn’t have milk in it. While some people do add milk, you will likely never receive an Americano with any form of dairy or dairy-alternative in it unless you specifically ask the barista to add it.',
        price: 'Rs 160',
        available: true,
        image: '/americano.png'
    },
    {
        id: 6,
        category: 'Drinks',
        title: 'Cappuccino',
        description:
            'The cappuccino is about 6 oz in volume and is made with one shot of espresso, steamed milk, and milk foam. So proportionally, it has a ratio of  1/3 espresso, 1/3 steamed milk, and 1/3 milk foam, and it’s smaller than a caffe latte.',
        price: 'Rs 190',
        available: true,
        image: '/latte.png'
    },
    {
        id: 7,
        category: 'Drinks',
        title: 'Café Latte',
        description:
            'A latte is a classic coffee that’s constructed with the two pillar ingredients: espresso and steamed milk. The word “latte” comes from the Italian word “caffè e latte” (other variants are “caffeelatte” and “caffellatte”), which simply means “coffee & milk.',
        price: 'Rs 200',
        available: true,
        image: '/latte.png'
    },
    {
        id: 8,
        category: 'Drinks',
        title: 'Café Mocha',
        description:
            'Simply put: the mocha is short for a “mocha latte” or a “caffe mocha,” which is just a regular latte with chocolate syrup added to it. One of the great reasons why many coffee fanatics love the latte is because they are customizable, and the mocha is a prime example of that. ',
        price: 'Rs 260',
        available: true,
        image: '/cafeMocha.png'
    },
    {
        id: 9,
        category: 'Drinks',
        title: 'Vanilla Latte',
        description: 'Latte with Vanilla',
        price: 'Rs 270',
        available: true,
        image: '/latte.png'
    },
    {
        id: 10,
        category: 'Drinks',
        title: 'Caramel Latte',
        description: 'Latte with Caramel',
        price: 'Rs 270',
        available: true,
        image: '/caramelLatte.png'
    },
    {
        id: 11,
        category: 'Drinks',
        title: 'Honey Latte',
        description: 'Latte with Honey flavor',
        price: 'Rs 250',
        available: true,
        image: '/honeyLatte.png'
    },
    {
        id: 12,
        category: 'Drinks',
        title: 'Cinnamon Latte',
        description: 'Cinnamon powder sprinkled',
        price: 'Rs 250',
        available: true,
        image: '/cinnamonLatte.png'
    },
    {
        id: 13,
        category: 'Drinks',
        title: 'Hot Chocolate',
        description: 'Hot Chocolate',
        price: 'Rs 250',
        available: true,
        image: '/hotChoco.png'
    },
    {
        id: 14,
        category: 'Drinks',
        title: 'Iced Americano',
        description: '',
        price: 'Rs 200',
        available: true,
        image: '/americano.png'
    },
    {
        id: 15,
        category: 'Drinks',
        title: 'Iced Latte',
        description: 'Iced Latte',
        price: 'Rs 250',
        available: true,
        image: '/icedLatte.png'
    },
    {
        id: 16,
        category: 'Drinks',
        title: 'Iced Cappuccino',
        description: 'Iced Cappuccino',
        price: 'Rs 250',
        available: true,
        image: '/icedFrappe.png'
    },
    {
        id: 17,
        category: 'Drinks',
        title: 'Iced Mocha',
        description: 'Iced Mocha',
        price: 'Rs 310',
        available: true,
        image: '/icedFrappe.png'
    },
    {
        id: 18,
        category: 'Drinks',
        title: 'Iced Chocolate',
        description: 'Iced Chocolate',
        price: 'Rs 290',
        available: true,
        image: '/icedLatte.png'
    },
    {
        id: 19,
        category: 'Drinks',
        title: 'Coffee Frappe',
        description: 'Frappe',
        price: 'Rs 280',
        available: true,
        image: '/icedFrappe.png'
    },
    {
        id: 20,
        category: 'Drinks',
        title: 'Vanilla Frappe',
        description: 'Vanilla Frappe',
        price: 'Rs 325',
        available: true,
        image: '/frappe.png'
    },
    {
        id: 21,
        category: 'Drinks',
        title: 'Caramel Frappe',
        description: 'Caramel Frappe',
        price: 'Rs 325',
        available: true,
        image: '/frappe.png'
    },
    {
        id: 22,
        category: 'Drinks',
        title: 'Mocha Frappe',
        description: 'Mocha Frappe',
        price: 'Rs 335',
        available: true,
        image: '/frappe.png'
    },
    {
        id: 23,
        category: 'Drinks',
        title: 'Iced Tea',
        description: 'Iced Tea',
        price: 'Rs 150',
        available: true,
        image: '/icedTea.png'
    },
    {
        id: 24,
        category: 'Drinks',
        title: 'Milk Iced Tea',
        description: 'Refreshing Iced Tea',
        price: 'Rs 195',
        available: true,
        image: '/milkIcedTea.png'
    },
    {
        id: 25,
        category: 'Drinks',
        title: 'Peach Iced Tea',
        description: 'Refreshing Iced Tea',
        price: 'Rs 195',
        available: true,
        image: '/peachTea.png'
    },
    {
        id: 26,
        category: 'Drinks',
        title: 'Lemon Iced Tea',
        description: 'Refreshing Iced Tea',
        price: 'Rs 195',
        available: true,
        image: '/icedTea.png'
    },
    {
        id: 27,
        category: 'Drinks',
        subCatergory: 'smoothie',
        title: 'Banana Smoothie',
        description: 'Fresh made Banana smoothie.',
        price: 'Rs 300',
        available: true,
        image: '/smoothie.png'
    },
    {
        id: 28,
        subCatergory: 'smoothie',
        title: 'Carrot Smoothie',
        description: 'Fresh made Carrot smoothie.',
        price: 'Rs 300',
        available: true,
        image: '/carrotSmoothie.png'
    },
    {
        id: 29,
        category: 'Drinks',
        subCatergory: 'milkshakes',
        title: 'Chocolate Milkshake',
        description: 'Chocolate flavored milkshake',
        price: 'Rs 290',
        available: true,
        image: '/chocolateShake.png'
    },
    {
        id: 30,
        category: 'Drinks',
        subCatergory: 'milkshakes',
        title: 'Strawberry Milkshake',
        description: 'Strawberry flavored milkshake',
        price: 'Rs 290',
        available: true,
        image: '/strawberryShake.png'
    },
    {
        id: 31,
        category: 'Drinks',
        subCatergory: 'milkshakes',
        title: 'Vanilla Milkshake',
        description: 'Vanilla flavor',
        price: 'Rs 290',
        available: true,
        image: '/strawberryShake.png'
    },
    {
        id: 32,
        category: 'Drinks',
        subCatergory: 'milkshakes',
        title: 'Oreo Milkshake',
        description: 'Topped with oreo.',
        price: 'Rs 290',
        available: true,
        image: '/oreoShake.png'
    },
    {
        id: 33,
        category: 'Drinks',
        title: 'Lemonade',
        description: 'Freshly squeezed lemon juice.',
        price: 'Rs 150',
        available: true,
        image: '/lemonade.png'
    },
    {
        id: 34,
        category: 'Drinks',
        title: 'Mint Lemonade',
        description: 'Freshly squeezed lemon juice with mint leaves.',
        price: 'Rs 160',
        available: true,
        image: '/lemonade.png'
    },
    {
        id: 35,
        category: 'Drinks',
        title: 'Fresh Seasonal Juice',
        description: 'Freshly squeezed fruit juice',
        price: 'Rs 260',
        available: true,
        image: '/freshJuice.png'
    },
    {
        id: 36,
        category: 'Drinks',
        subCategory: 'soft drinks',
        title: 'Coke',
        description: '',
        price: 'Rs 100',
        available: true,
        image: '/coke.png'
    },
    {
        id: 37,
        category: 'Drinks',
        subCategory: 'soft drinks',
        title: 'Fanta',
        description: '',
        price: 'Rs 100',
        available: true,
        image: '/coke.png'
    },
    {
        id: 38,
        category: 'Drinks',
        subCategory: 'soft drinks',
        title: 'Sprite',
        description: '',
        price: 'Rs 100',
        available: true,
        image: '/coke.png'
    },
    {
        id: 39,
        category: 'Drinks',
        subCategory: 'soft drinks',
        title: 'Mineral Water',
        description: 'Aqua Hundred',
        price: 'Rs 70',
        available: true,
        image: '/mineralWater.png'
    },
    {
        id: 40,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Masala Chia',
        description: '',
        price: 'Rs 130',
        available: true,
        image: '/chai.png'
    },
    {
        id: 41,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Black Tea',
        description: '',
        price: 'Rs 90',
        available: true,
        image: '/tea.png'
    },
    {
        id: 42,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Milk Tea',
        description: '',
        price: 'Rs 120',
        available: true,
        image: '/milkTea.png'
    },
    {
        id: 42,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Lemon Tea',
        description: '',
        price: 'Rs 130',
        available: true,
        image: '/tea.png'
    },
    {
        id: 43,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Green Tea',
        description: 'Small Pot',
        price: 'Rs 200',
        available: true,
        image: '/greenTea.png'
    },
    {
        id: 44,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Green Tea',
        description: 'Large Pot',
        price: 'Rs 250',
        available: true,
        image: '/greenTea.png'
    },
    {
        id: 45,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Jasmine Tea',
        description: 'Cup',
        price: 'Rs 110',
        available: true,
        image: '/jasmineTea.png'
    },
    {
        id: 46,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Jasmine Tea',
        description: 'Small Pot',
        price: 'Rs 200',
        available: true,
        image: '/jasmineTea.png'
    },
    {
        id: 47,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Jasmine Tea',
        description: 'Large Pot',
        price: 'Rs 250',
        available: true,
        image: '/teaPot.png'
    },
    {
        id: 48,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Chamomile Tea',
        description: '',
        price: 'Rs 110',
        available: true,
        image: '/tea.png'
    },
    {
        id: 49,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Chamomile Tea',
        description: 'Small Pot',
        price: 'Rs 200',
        available: true,
        image: '/tea.png'
    },
    {
        id: 50,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Chamomile Tea',
        description: 'Large Pot',
        price: 'Rs 250',
        available: true,
        image: '/teaPot.png'
    },
    {
        id: 51,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Hot Lemon',
        description: '',
        price: 'Rs 120',
        available: true,
        image: '/tea.png'
    },
    {
        id: 52,
        category: 'Drinks',
        subCategory: 'tea',
        title: 'Hot Lemon with Honey',
        description: '',
        price: 'Rs 160',
        available: true,
        image: '/tea.png'
    },
    {
        id: 53,
        category: 'FROM THE KITCHEN',
        subCategory: '',
        title: 'Hariyali Kabab Roomali Roll',
        description: '',
        price: 'Rs 275',
        image: '/roomaliRoti.png'
    },
    {
        id: 54,
        category: 'FROM THE KITCHEN',
        subCategory: '',
        title: 'Chicken Tikka Roomali Roll',
        description: '',
        price: 'Rs 300',
        image: '/roomaliRoti.png'
    },
    {
        id: 55,
        category: 'FROM THE KITCHEN',
        subCategory: '',
        title: 'Chicken Momo',
        description: '',
        price: 'Rs 275',
        image: '/momo.png'
    },
    {
        id: 56,
        category: 'FROM THE KITCHEN',
        subCategory: '',
        title: 'Veg Momo',
        description: '',
        price: 'Rs 225',
        image: '/momo.png'
    },
    {
        id: 57,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Lemon Pound Cake',
        description: '',
        price: 'Rs 125 per piece',
        image: '/lemonCake.png'
    },
    {
        id: 58,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Coffee Pound Cake',
        description: '',
        price: 'Rs 125 per piece',
        image: '/chocCake.png'
    },
    {
        id: 59,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Cheese Cake',
        description: '',
        price: 'Rs 450 per piece',
        image: '/cheeseCake.png'
    },
    {
        id: 60,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Apple Pie',
        description: '',
        price: 'Rs 250 per piece',
        image: '/applePie.png'
    },
    {
        id: 61,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Carrot Cake with walnut',
        description: '',
        price: 'Rs 200 per piece',
        image: '/carrotCake.png'
    },
    {
        id: 62,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Brownie',
        description: '',
        price: 'Rs 150 per piece',
        image: '/chocBrownie.png'
    },
    {
        id: 63,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Vanilla Muffin',
        description: '',
        price: '125',
        image: '/vanillapCupCake.png'
    },
    {
        id: 64,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Chocolate Chip Muffin',
        description: '',
        price: '125',
        image: '/chocolateChipCupCake.png'
    },
    {
        id: 65,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Banana Walnut Muffin',
        description: '',
        price: '135',
        image: '/vanillapCupCake.png'
    },
    {
        id: 66,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Plain Puff',
        description: '',
        price: 'Rs 70',
        image: '/veggiePuffs.png'
    },
    {
        id: 67,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Veg Puff',
        description: '',
        price: 'Rs 125',
        image: '/veggiePuffs.png'
    },
    {
        id: 68,
        category: 'FROM THE BAKERY',
        subCategory: '',
        title: 'Chicken Puff',
        description: '',
        price: 'Rs 150',
        image: '/chickenPuff.png'
    }
];

export function Menu() {
    const router = useRouter();
    const [items, setItems] = React.useState(InitialMenuData);
    const [isOpen, setIsOpen] = React.useState(false);

    // React.useEffect(() => {
    //   fetch('http://localhost:4500/menu')
    //   .then((res: any) => res.json())
    //   .then((data) => console.log(data))
    // })

    return (
        <BaseWrapper>
    
            <header
                id="header"
                className="w-full h-16 z-10 fixed left-0 top-0 col-span-full justify-self-stretch bg-gray-white"
            >
                <h1 className="group bg-white blur-0 hover:drop-shadow-2xl hover:bg-slate-50  absolute inset-x-1/2 top-1 opacity-100 w-28 h-28 rounded-full  -ml-20 hover:cursor-pointer">
                    <a
                        className=" block absolute top-2 w-full"
                        onClick={() => router.push('/home')}
                    >
                        <img className="hover:cursor-pointer block w-full" src="/yetiLogo.svg" />
                    </a>
                </h1>
            </header>


                <Navbar toggle={() => setIsOpen(!isOpen)} />

            <div id="main" className="mx-0 mt-20 block pt-16 ">
                <div
                    id="menu-category-sec"
                    className="px-16 mt-0 mb-20 mx-auto opacity-100 max-w-screen-xl border-0 border-t border-solid "
                >
                    <div id="menu-drinks" className="font-bold text-xl  py-14">
                        DRINKS
                    </div>
                    <ul id="drinks-list" className="group relative flex flex-row list-none">
                        <li className=" relative w-auto lg:w-64 mr-20" key={InitialMenuData[1].id}>
                            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-32 md:h-40 md: lg:h-40 lg:aspect-none max-h-52 ">
                                <img
                                    src={InitialMenuData[1].image}
                                    alt={InitialMenuData[1].description}
                                    className="w-full h-auto object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between hover:underline">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            {InitialMenuData[1].title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 ">
                                        {InitialMenuData[1].price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {InitialMenuData[1].description}
                                </p>
                            </div>
                        </li>
                        <li className=" relative w-auto lg:w-64 mr-20" key={InitialMenuData[2].id}>
                            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-32 md:h-40 md: lg:h-40 lg:aspect-none max-h-52 ">
                                <img
                                    src={InitialMenuData[2].image}
                                    alt={InitialMenuData[2].description}
                                    className="w-full h-auto object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between hover:underline">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            {InitialMenuData[2].title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 ">
                                        {InitialMenuData[2].price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {InitialMenuData[2].description}
                                </p>
                            </div>
                        </li>
                        <li className=" relative w-auto lg:w-64" key={InitialMenuData[5].id}>
                            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-32 md:h-40 md: lg:h-40 lg:aspect-none max-h-52 ">
                                <img
                                    src={InitialMenuData[5].image}
                                    alt={InitialMenuData[5].description}
                                    className="w-full h-auto object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between hover:underline">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            {InitialMenuData[5].title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 ">
                                        {InitialMenuData[5].price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {InitialMenuData[5].description}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    id="menu-category-sec kitchen"
                    className="px-16 mt-0 mb-20 mx-auto opacity-100 max-w-screen-xl border-0 border-t border-solid "
                >
                    <div id="menu-kitchen" className="font-bold text-xl  py-14">
                        From The Kitchen
                    </div>
                    <ul id="drinks-list" className="group relative flex flex-row list-none">
                        <li
                            className="group relative w-auto lg:w-96 mr-20"
                            key={InitialMenuData[67].id}
                        >
                            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1overflow-hidden group-hover:opacity-75 h-32 md:h-40 md: lg:h-40 lg:aspect-none max-h-52 ">
                                <img
                                    src={InitialMenuData[67].image}
                                    alt={InitialMenuData[67].description}
                                    className="w-full h-auto object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between hover:underline">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            {InitialMenuData[67].title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 ">
                                        {InitialMenuData[67].price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {InitialMenuData[67].description}
                                </p>
                            </div>
                        </li>
                        <li className="group relative w-96 mr-20 " key={InitialMenuData[64].id}>
                            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 h-32 md:h-40 md: lg:h-40 lg:aspect-none max-h-52 ">
                                <img
                                    src={InitialMenuData[64].image}
                                    alt={InitialMenuData[64].description}
                                    className="w-full h-auto object- object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between hover:underline">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            {InitialMenuData[64].title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 ">
                                        {InitialMenuData[64].price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {InitialMenuData[64].description}
                                </p>
                            </div>
                        </li>
                        <li className="group relative w-auto lg:w-96" key={InitialMenuData[68].id}>
                            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 h-32 md:h-40 md: lg:h-40 lg:aspect-none max-h-52 ">
                                <img
                                    src={InitialMenuData[68].image}
                                    alt={InitialMenuData[68].description}
                                    className="w-full h-auto object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between hover:underline">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            {InitialMenuData[68].title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 ">
                                        {InitialMenuData[68].price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {InitialMenuData[68].description}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </MainWrapper>
    );
}
export default Menu;

{
    /* <div className="group relative w-1/4" key={InitialMenuData[3].id}>
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={InitialMenuData[3].image}
                                alt={InitialMenuData[3].description}
                                className="w-full h-full object-left object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex flex-col justify-between hover:underline">
                            <div className="flex justify-between">
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        ></span>
                                        {InitialMenuData[3].title}
                                    </a>
                                </h3>
                                <p className="text-sm font-medium text-gray-900 ">
                                    {InitialMenuData[3].price}
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                                {InitialMenuData[3].description}
                            </p>
                        </div>
                    </div> */
}

{
    /* {items.map((item: any) => (
                    <div className="group relative w-3/4" key={item.id}>
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={item.image}
                                alt={item.description}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex flex-col justify-between hover:underline">
                            <div className="flex justify-between">
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {item.title}
                                    </a>
                                </h3>
                                <p className="text-sm font-medium text-gray-900 ">{item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))} */
}

{
    /* 
//.menu {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   } */
}
