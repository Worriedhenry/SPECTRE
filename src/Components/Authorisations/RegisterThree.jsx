import React, { useState } from "react";
import Header from "../Header";
import axios from "axios";
const RegisterThree = ({ setActiveTabs,imageCloudinfo,setImageCloudinfo,selectedImage,setSelectedImage,selectedImageFile,setSelectedImageFile }) => {
    
    const [uploading,setUploading]=useState(false) 
    
    const [alertMessageCode,setAlertMessageCode]=useState(100)

    const messages={200:"Image Uploaded Successfully",500:"Image Upload Failed",100:"Upload your Profile Image",300:"Uploading Image ...",303:"Deleting Image ...",201:"Image Deleted Successfully",502:"Image Deletion Failed"}
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log("Inside")
        if (file && file.type.startsWith("image/")) {
            setSelectedImage(URL.createObjectURL(file));
            setSelectedImageFile(file)
        }
    };
    /**
     * A function that handles the upload of an image.
     *
     * @param {type} image - the image to be uploaded
     */
    const handleImageUpload=async ()=>{
        if (selectedImageFile) {
            // Uploading using form data
            setUploading(true)
            setAlertMessageCode(300)
            const formData = new FormData();
            formData.append("image", selectedImageFile);
            const res = await axios.post(
                "http://localhost:3001/uploadimage",formData)
            
            if (res.status===200) {
                setAlertMessageCode(200)
                setImageCloudinfo(res.data)
                resetAlert()
                setUploading(false)
            }
            else{
                setAlertMessageCode(500)
                resetAlert()
            }
        }
        else{
            alert("Please Select Image")
        }
    }
    /**
     * Function to handle the deletion of an image.
     */
    const handleImageDelete = async () => {
        // setSelectedImage(null);
        setUploading(true);
        setAlertMessageCode(303)
        const res=await axios.delete("http://localhost:3001/deleteimage/"+imageCloudinfo.publicId)
        
        console.log(res.status)
        if(res.status===200){
            setUploading(false);
            setAlertMessageCode(201)
            setSelectedImage(null);
            setSelectedImageFile(null);
            setImageCloudinfo(null);
            resetAlert()
        }
        else{
            setAlertMessageCode(502)
            resetAlert()
        }
    }

    /**
     * Resets the alert message code after a delay of 3 seconds.
     *
     * @return {void} This function does not return a value.
     */
    function resetAlert() {
        setTimeout(() => {
            setAlertMessageCode(100)
        }, 3000);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        setActiveTabs(4)
    }
    

    return (
        <div>
            <section class="bg-gray-50   ">
                <div class="flex flex-col   items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="w-full bg-white m-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90.05deg,_#0076CE_43.35%,_#9400D3_65.11%)] leading-tight tracking-tight  text-center  md:text-3xl ">
                                    Create and account
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={(e)=>handleFormSubmit(e)} action="#">
                                    <div class="flex items-center justify-center w-full flex-col">
                                        <label className={` ${alertMessageCode===200 || alertMessageCode===201 ? "text-green-500" : ""}  block mb-2 text-sm font-medium text-gray-900 ${alertMessageCode===500 || alertMessageCode===502 ? "text-red-500" : ""} ${alertMessageCode===300 || alertMessageCode===303 ? "text-yellow-500 animate-pulse" : ""} ` }>{messages[alertMessageCode]}</label>
                                        <label className="flex flex-col items-center justify-center w-full max:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className={`${uploading ? "animate-pulse" : ""} w-8 h-8 mb-4 text-gray-500 dark:text-gray-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className={`mb-2 text-sm text-gray-500 ${selectedImage ? 'hidden' : 'block'}`}><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className={`${selectedImage ? 'hidden' : 'block'} text-xs text-gray-500`}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                {selectedImage && <img className=" rounded-full aspect-square mt-2" src={selectedImage} alt="Selected" style={{ width: '80%', height: '80%',maxHeight:'300px' }} />}
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
                                        </label>
                                    </div>
                                                <button type="button" disabled={!selectedImageFile} className={`w-1/3 ${selectedImageFile ? "cursor-pointer" : "cursor-not-allowed"}  bg-primary-600 ${imageCloudinfo ? 'bg-white border-red-500  text-red-500 hover:text-white hover:bg-red-500  ' : ' bg-white border-green-500 text-green-500 hover:text-white hover:bg-green-500 '} hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)}  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium border-2 rounded-lg text-sm px-5 py-2.5 text-center`} onClick={imageCloudinfo?()=> handleImageDelete(): ()=>handleImageUpload()}>{imageCloudinfo ? "Delete": "Upload"}</button>
                                    <div className="flex justify-between">
                                        <button type="submit" onClick={() => setActiveTabs(2)} class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Back</button>
                                        <button type="submit" onClick={() => setActiveTabs(4)} class="w-1/3 bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] text-white bg-primary-600 hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{imageCloudinfo? "Next" : "Skip"}</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterThree;