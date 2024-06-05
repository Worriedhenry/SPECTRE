import React from "react";
import Header from "../Components/Header";
import About from "../Components/ServiceDescription/About";
import ModedUserDetails from "../Components/Profile/ModifiableUserDetails";
import Footer from "../Components/Footer";
import ModedServiceDetails from "../Components/ModifyService/ModService";
const ModifyServicePage = ({socket}) => {
    return (
        <div className="bg-gray-100 divide-y ">
            <Header socket={socket} />
            <div className="flex justify-center p-2 space-x-2">
                <ModedServiceDetails />
            </div>
            <Footer/>
        </div>
    )
}

export default ModifyServicePage;