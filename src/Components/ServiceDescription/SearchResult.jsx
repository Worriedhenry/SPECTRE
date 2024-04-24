import React,{useEffect,useState} from "react";
import PersonalDetails from "./PersonalDetails";
import About from "./About";
import ExpandedWorkBrief from "./ExpandedWorkBrief";
import RequestedPropsalPage from "./RequestPropsalForm";
export default function SearchResult({ data }) {

    const [tabs,setActiveTab]=useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
        setActiveTab(1)
    }, [data])
    return (<>
       
        <div className="flex md:h-1/4  flex-col px-2 pt-2 space-x-4 md:px-2 md:flex-row bg-slate-50">

            <PersonalDetails data={data} setActiveTab={setActiveTab} />
            {/* <RequestedPropsalPage /> */}
            {tabs===1 &&<About data={data.serviceProvider} />}
            {tabs===2 && <RequestedPropsalPage />}
            {tabs===3 && <ExpandedWorkBrief workBrief={data.serviceBrief} setActiveTabs={setActiveTab}/>}

        </div>
    </>
    )
}