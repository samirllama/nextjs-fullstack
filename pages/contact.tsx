import styles from '../styles/Home.module.css';

const Contact = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="mt-10 mx-20  md:col-span-2">
                <div className="mx-20">Get in touch</div>
                <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-500"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        className=" bg-gray-100 h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <label
                                        htmlFor="email-address"
                                        className="block text-sm font-medium text-gray-500"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        className="bg-gray-100 h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-medium text-gray-500"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        className=" bg-gray-100  h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-500"
                                    >
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="bg-gray-100  mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>United States</option>
                                        <option>Nepal</option>
                                        <option>India</option>
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label
                                        htmlFor="street-address"
                                        className="block text-sm font-medium text-gray-500"
                                    >
                                        Street address
                                    </label>
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        className="h-9 mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
