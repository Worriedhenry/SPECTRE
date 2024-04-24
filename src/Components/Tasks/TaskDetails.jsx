import React,{useState} from "react";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import RequestedProposal from "../Profile/RequestedPropsals";
const TaskDetails = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }
    
    return (
        <div>
            <ul className="flex border-b-2  border-[#0076CE]  ">
                <li
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer flex justify-center font-medium w-full hover:border-b-2 hover:border-[#9400D3] parent group py-2 px-4 ${activeTab === 1 ? 'border-b-2 border-blue-500 text-black ' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <IoPerson className="group-hover:animate-bounce" /> <span className={`  ${activeTab === 1 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} >Current Tasks</span>
                 </li>
                <li
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer font-medium flex justify-center w-full hover:border-b-2 hover:border-[#9400D3] parent group py-2 px-4 ${activeTab === 2 ? 'border-b-2 border-blue-500 text-black ' : ''}  p-4 rounded-t-lg  hover:bg-gray-50 flex  items-center space-x-3 `}
                >
                    <MdOutlineWatchLater className="group-hover:animate-spin" /> <span className={` ${activeTab === 2 ? 'text-transparent bg-clip-text bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] font-bold ' : ''}   `} >Past Tasks</span>
                 </li>


            </ul>
            <div>
            {activeTab === 1 && <div className="space-y-4">
                <RequestedProposal component="task"/>
                <RequestedProposal component="task"/>
                <RequestedProposal component="task"/>
            </div>}
            {activeTab === 2 && "Content for Tab 2"}
            </div>
        </div>
    )
}

export default TaskDetails;