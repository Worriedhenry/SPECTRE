import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateProfilePic } from "../../../Reducers/authSlice";
import {useNavigate} from "react-router-dom"
export default function ProfilePicModifications() {
    const { userId, profilePic } = useSelector((state) => state.auth);

    const [uploading, setUploading] = useState(false)
    const [imageCloudinfo, setImageCloudinfo] = useState(profilePic || null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [alertMessageCode, setAlertMessageCode] = useState(100)

    const navigate=useNavigate()
    const dispatch = useDispatch();

    const messages = { 200: "Image Uploaded Successfully", 500: "Image Upload Failed", 100: "Upload your Profile Image", 300: "Uploading Image ...", 303: "Deleting Image ...", 201: "Image Deleted Successfully", 502: "Image Deletion Failed" }



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setSelectedImage(URL.createObjectURL(file));
            setSelectedImageFile(file)
            setImageCloudinfo(null)
        }
    };

    const handleImageUpload = async () => {
        if (selectedImageFile) {
            // Uploading using form data
            setUploading(true)
            setAlertMessageCode(300)
            const formData = new FormData();
            formData.append("image", selectedImageFile);
            const res = await axios.put(
                import .meta.env.VITE_BACKEND+"/updateimage/" + userId, formData)

            if (res.status === 200) {
                setAlertMessageCode(200)
                setImageCloudinfo(res.data)
                resetAlert()
                setUploading(false)
                dispatch(updateProfilePic(res.data))
            }
            else {
                setAlertMessageCode(500)
                resetAlert()
            }
        }
        else {
            alert("Please Select Image")
        }
    }

    const handleImageDelete = async () => {
        // setSelectedImage(null);
        console.log("Hello")
        setUploading(true);
        setAlertMessageCode(303)
        const res = await axios.put(import .meta.env.VITE_BACKEND+"/deleteimagefromurl/", { publicUrl: imageCloudinfo, userId: userId })

        console.log(res.status)
        if (res.status === 200) {
            setUploading(false);
            setAlertMessageCode(201)
            setSelectedImage(null);
            setSelectedImageFile(null);
            setImageCloudinfo(null);
            resetAlert()
            dispatch(updateProfilePic(null))
        }
        else {
            setAlertMessageCode(502)
            resetAlert()
        }
    }

    function resetAlert() {
        setTimeout(() => {
            setAlertMessageCode(100)
        }, 3000);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setActiveTabs(4)
    }

    return (
        <form class="space-y-4 md:space-y-6" onSubmit={(e) => handleFormSubmit(e)} action="#">
            <div class="flex items-center justify-center w-full flex-col">
                <label className={` ${alertMessageCode === 200 || alertMessageCode === 201 ? "text-green-500" : ""}  block mb-2 text-sm font-medium text-gray-900 ${alertMessageCode === 500 || alertMessageCode === 502 ? "text-red-500" : ""} ${alertMessageCode === 300 || alertMessageCode === 303 ? "text-yellow-500 animate-pulse" : ""} `}>{messages[alertMessageCode]}</label>
                <label className="flex flex-col items-center justify-center w-full max:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className={`${uploading ? "animate-pulse" : ""} w-8 h-8 mb-4 text-gray-500 dark:text-gray-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className={`mb-2 text-sm text-gray-500 ${(selectedImage || imageCloudinfo) ? 'hidden' : 'block'}`}><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className={`${(selectedImage || imageCloudinfo) ? 'hidden' : 'block'} text-xs text-gray-500`}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        {(selectedImage || imageCloudinfo) && <img className=" rounded-full aspect-square mt-2" src={imageCloudinfo || selectedImage} alt="Selected" style={{ width: '80%', height: '80%', maxHeight: '300px' }} />}
                    </div>
                    {<input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />}
                </label>
            </div>

            <div className="flex justify-between md:w-1/3">
                <button type="button" disabled={!(selectedImageFile || imageCloudinfo)} className={` ${(selectedImageFile || imageCloudinfo) ? "cursor-pointer" : "cursor-not-allowed"}  bg-primary-600 ${imageCloudinfo ? 'bg-white border-red-500  text-red-500 hover:text-white hover:bg-red-500  ' : ' bg-white border-green-500 text-green-500 hover:text-white hover:bg-green-500 '} hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)}   md:text-base text-xs md:px-3 px-2 py-1 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2 rounded-lg`} onClick={imageCloudinfo ? () => handleImageDelete() : () => handleImageUpload()}>{imageCloudinfo ? "Delete" : "Upload"}</button>
                <button type="reset" onClick={() => navigate("/profile/" + userId)} className="text-[#0076CE] bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:text-base text-xs md:px-3 px-2 py-1 md:py-1 md:mr-2 mb-2 border-[#0076CE] border-2">Back</button>
            </div>

        </form>
    )
}