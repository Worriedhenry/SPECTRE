import React from "react";
import Header from "../Components/Header";
import JoinUs from "../Components/Home/JoinUS";
import SearchComponent from "../Components/Home/SearchBar";
import Features from "../Components/Home/Features";
import Footer from "../Components/Footer";
import Connection from "../Components/Home/Connection";
export default function Home({ socket }) {
    return (<>
        <div className="space-y-10">
            <div className=" bg-opacity-5 bg-[linear-gradient(74.71deg,_#FEDDEE36_0%,_#FCF6FC6a_31.77%,_#C5EAED36_64.58%,_#FDDDFE36_100%)]">
            {/* <Connection /> */}
                <Header socket={socket} />
                <SearchComponent />
            </div>
            <div className="bg-[url('images/Cloud_BackGradient.png')] flex ">
                {/* <img className="absolute" src="images/Cloud_BackGradient.png" /> */}
                <JoinUs />
            </div>
            <div>
                <Features />
            </div>
            <Footer />
        </div>
        </>
    )
}

// background: linear-gradient(74.71deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%);
