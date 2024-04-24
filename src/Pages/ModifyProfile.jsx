import React from "react";
import Header from "../Components/Header";
import About from "../Components/ServiceDescription/About";
import ModedUserDetails from "../Components/Profile/ModifiableUserDetails";
import Footer from "../Components/Footer";
import RightProfile from "../Components/Profile/RighProfile";
import UserDetails from "../Components/Profile/UserDetails";
const ModifyProfilePage = () => {
    return (
        <div className="divide-y bg-slate-100">
            <Header />
            <div className="flex justify-center p-2 space-x-2">
                <ModedUserDetails />
            </div>
            <Footer/>
        </div>
    )
}

export default ModifyProfilePage;