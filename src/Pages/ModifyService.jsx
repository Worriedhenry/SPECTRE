import React from "react";
import Header from "../Components/Header";
import About from "../Components/ServiceDescription/About";
import ModedUserDetails from "../Components/Profile/ModifiableUserDetails";
import Footer from "../Components/Footer";
import ModedServiceDetails from "../Components/ModifyService/ModService";
const ModifyServicePage = () => {
    return (
        <div className="divide-y  bg-gray-100 ">
            <Header />
            <div className="flex p-2 justify-center space-x-2">
                <ModedServiceDetails />
            </div>
            <Footer/>
        </div>
    )
}

export default ModifyServicePage;