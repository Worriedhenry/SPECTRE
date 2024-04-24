import React, { useState } from "react";
import Header from "../Header";
const RegisterTwo = ({ setActiveTabs , selectCountry, setSelectCity, setSelectState, setSelectCountry, streetAddress, setStreetAddress, postalCode, setPostalCode, selectState, selectCity }) => {

    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setActiveTabs(3)
    }

    return (
        <div>
            <section class="bg-gray-50">
                <div class="flex flex-col   items-center justify-center px-6 py-4 mx-auto md:h-fit ">
                    <div class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="w-full bg-white m-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div class="p-6 space-y-2 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Create and account
                                </h1>
                                <form class="space-y-2 md:space-y-4" onSubmit={handleSubmit} action="#">
                                    
                                    <div class="sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                        <div class="mt-2">
                                            <select id="country" name="country" value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)} autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option value={"United States"}>United States</option>
                                                <option value={"India"} selected>India</option>
                                                <option value="Bhutan" >Bhutan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                        <div class="mt-2">
                                            <input required type="text" name="street-address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2 sm:col-start-1">
                                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                        <div class="mt-2">
                                            <input type="text" required name="city" id="city" value={selectCity} onChange={(e) => setSelectCity(e.target.value)} autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-2/5" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                        <div class="mt-2">
                                            <input type="text" required name="region" id="region" value={selectState} onChange={(e) => setSelectState(e.target.value)} autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                        <div class="mt-2">
                                            <input type="text" required name="postal-code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " />
                                        </div>
                                    </div>


                                   
                                    <div className="flex justify-between">
                                        <button type="submit" onClick={() => setActiveTabs(1)} class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Back</button>
                                        <button type="submit"  class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next</button>
                                    </div>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">

                                        Don’t have an account yet? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterTwo;