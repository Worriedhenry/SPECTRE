import React, { useState } from "react";

const TagsModify = () => {

    const [tags, setTags] = useState(new Set(["Fresher"]))

    const addTags = (e) => {
        if (tags.has(e.target.value)) {
            console.log("Tag already exist")
        }
        else {
            const newTags = new Set([...tags, e.target.value])
            setTags(newTags)
        }
    }

    const removeTags = (e) => {
        const newTags = new Set([...tags])
        newTags.delete(e)
        setTags(newTags)
    }

    return (
        <div className="space-y-6">
        <div>
            <label for="countries" class="block mb-2 text-sm md:text-base font-medium text-gray-900 ">Profile Tags</label>
            <select id="countries" onChange={(e) => addTags(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected value="Web Development">Web Development</option>
                <option value="Fresher">Fresher</option>
                <option value="Flexible">Flexible</option>
                <option value="Strict Routine" >Strict Routine</option>
                <option value="Newbie" >Newbie</option>
            </select>
            <div className=" max-h-32 w-full align-top bg-slate-100 flex flex-wrap">
                {tags && Array.from(tags).map((tag) => <div className="h-fit">
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] rounded  text-white m-1">
                        {tag}
                        <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" onClick={() => removeTags(tag)} aria-label="Remove" >
                            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </span>
                </div>
                )}
            </div>

        </div>
        <div>
        <button type="button" onClick={() => navigate("/register")} class="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 md:text-xs ">Save</button>
        <button type="button" onClick={() => navigate("/register")} class="text-white  hover:bg-[linear-gradient(95.74deg,_#9400D3_-7.82%,_#0076CE_143.96%)] focus:outline-none bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)]  font-medium rounded-lg text-xs md:px-5 md:py-2.5 px-2 py-1 md:mr-2 md:text-xs ">Cancel</button>
        </div>
        </div>
    )
}

export default TagsModify; 