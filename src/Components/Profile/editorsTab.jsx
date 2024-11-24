import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import UserSummary from "../Search/SearchCard";

export default function EditorsTab({id}) {
    const [editors, setEditors] = React.useState([]);
    const navigate = useNavigate()
    const { userId, role } = useSelector((state) => state.auth);
    const [searchTerm, setSearchTerm] = useState('');
    const [change, setChanges] = React.useState(false)
    console.log(id)
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_GATEWAY + "/user" + "/user/geteditors").then(res => setEditors(res.data))
    }, [])

    const handleInputChange = (value) => {
        // setNoSuggestion(true)

        setSearchTerm(value);
        
    }

    const removeEditor = async (editorId, ind) => {
        try {
            const confirm = window.confirm("Are you sure you want to remove this editor?");
            if (!confirm) {
                return;
            }
            const res = await axios.put(import.meta.env.VITE_BACKEND_GATEWAY + "/user" + "/user/removeeditor/" + editorId)
            if (res.status === 204) {
                setEditors(prevEditors => prevEditors.filter((_, index) => index !== ind));
                window.alert("Editor removed successfully");

            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const addEditor = async (username) => {

        try {
            var confirm=window.confirm("Are you sure you want to add this editor?. Editor can ban users, unlist and relist services.");
            if(!confirm){
                return ;
            }
            const res = await axios.put(import.meta.env.VITE_BACKEND_GATEWAY + "/user" + "/user/addeditor/" + username)
            if (res.status === 204) {
                window.alert("Editor added successfully. Changes will be reflected after reload.");
            }
            else if(res.status==200){
                window.alert("Username "+username+" don't exist or already added as editor ")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="space-y-6">
            {role=="admin" && <div className="flex space-x-2 md:flex-row flex-col ">
                <input type="text" value={searchTerm} onChange={(e) => handleInputChange(e.target.value)} class="w-full rounded-md px-6 font-bold text-sm md:text-base rounded-r-none border-2 border-[#BFBFBF]" placeholder="Type username of user to add them as editor" />
                {searchTerm &&  <button onClick={() => addEditor(searchTerm)} className="text-xs font-medium bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] text-white py-1 px-2 rounded-md">
                    Add as editor
                    </button>}
            </div>}

            <ul>

                {
                    editors.map((editor, ind) => {
                        return (
                            <div className="flex w-full p-2 space-x-3 border-2 snap-start md:px-2 border-zinc-100 md:h-32 md:py-3 ">
                                <div className="justify-center hidden w-1/5 h-full md:flex md:max-w-xs ">
                                    <img className="h-full rounded-full aspect-square " src={editor.profilePic ? editor.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                                </div>
                                <div className="md:w-2/3">
                                    <p>
                                        <span onClick={() => navigate(`/profile/${editor._id}`)} className=" cursor-pointer text-sm font-medium md:text-lg bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] bg-clip-text text-transparent">{editor.username}  </span>
                                        {id==editor._id && <span>(You)</span> }

                                    </p>
                                    <span className="text-sm text-slate-500 md:text-base">@{editor.role} </span>
                                </div>
                                <div className="flex flex-col justify-between text-right">

                                    <button type="button" onClick={() => navigate("/profile/" + editor._id)} class="text-white bg-[#0076CE]   font-medium rounded-lg text-xs md:px-3 md:py-1.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">View</button>
                                    {role == "admin" && <button type="button" onClick={() => removeEditor(editor._id, ind)} class="text-white bg-red-600   font-medium w-full rounded-lg text-xs md:px-3 md:py-1.5 px-2 py-1 md:mr-2 mb-2 md:text-base ">Remove editor</button>}
                                </div>

                            </div>
                        )
                    })

                }
            </ul>
            {editors.length === 0 && <p className="text-center text-gray-500 font-medium italic ">No Editors</p>}
        </div>
    )
}