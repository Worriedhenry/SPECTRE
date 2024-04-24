import React, { useState } from "react";
import TaskDetails from "../Components/Tasks/TaskDetails";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Tasks() {

    return (
        <div className="bg-slate-100   justify-center flex-col items-center
        ">
            <Header />
            <div className="mx-10 p-5 rounded-xl my-2    flex justify-center bg-white ">
                <TaskDetails />
            </div>
            <Footer />
        </div>
    );
}