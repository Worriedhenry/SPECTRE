import React from "react";

const Contact = () => {
    return (
        <div>
            <section class="bg-gray-50   ">
                <div class="flex flex-col   items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="w-full bg-white m-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Contact us
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div className="flex w-full space-x-3">
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                                            <input type="text" name="FirstName" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 " placeholder="Ankit" required="" />
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                                            <input type="text" name="LastName" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Sharma" required="" />
                                        </div>
                                    </div>
                                    <div className="flex w-full space-x-3">
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 " placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                                            <input type="tel" name="phone" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="+91 xxxxx xxxxx" required="" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">About</label>
                                        <textarea type="text" name="about" id="password" placeholder="I would like to ...." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                    </div>
                                    
                                    <button onClick={() => navigate("/")} type="submit" class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]      focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;