import React, { useState } from "react";
import TaskDetails from "../Components/Tasks/TaskDetails";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ExpandedTask from "../Components/Tasks/ExpandedTask";
export default function FullTasks({socket}) {

    return (
        <div className="flex-col items-center justify-center bg-slate-100 ">
            <Header socket={socket} />
            <div className="flex justify-center p-5 mx-10 my-2 bg-white rounded-xl ">
                <ExpandedTask />
            </div>
            <Footer />
        </div>
    );
}

