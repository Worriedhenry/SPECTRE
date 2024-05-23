import React from "react";
import Loading from "../Loading";
const RightProfile = ({ data }) => {
        return (
        <div className="hidden w-1/4 p-2 bg-white divide-y-2 rounded-lg md:block">
            <div className="flex justify-center w-full max-h-full">
                <img alt="Profile Pic" className="max-w-full rounded-full m md:w-52 md:h-52" src={data?.user?.profilePic ? data?.user?.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
            </div>
            <div className="md:mt-2">
                <p className="text-lg font-medium md:mb-3">Tags </p>
                <div className="flex flex-wrap w-full align-top max-h-32 bg-slate-100">
                    {data?.user?.profileTags && data.user.profileTags.map((tag) =>

                        <span title="Experience 0-1 year " id="badge-dismiss-default" class="cursor-pointer hover:bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                            {tag}
                        </span>
                    )}
                    {data?.user?.profileTags.length==0 && <span className="font-medium text-gray-600">No Tags Added</span>}
                    {!data?.user?.profileTags && <Loading />}
                </div>
            </div>
            <div className="md:mt-2 ">
            <p className="text-lg font-medium md:mb-3">Skills    </p>
                <div className="flex flex-wrap w-full align-top max-h-32 bg-slate-100">
                    {data?.user?.skills && data.user.skills.map((skill) =>

                        <span title="Experience 0-1 year " id="badge-dismiss-default" class="cursor-pointer hover:bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                            {skill}
                        </span>
                    )}
                    {data?.user?.skills.length==0 && <span className="font-medium text-gray-600">No Skills Added</span>}
                    {!data?.user?.skills && <Loading />}
                </div>

            </div>
            <div className="md:mt-2 ">
                <p className="text-lg font-medium md:mb-3">Why me ?</p>
                <div>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        newBie
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        Experinced
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        Meets Deadline
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        Hindi
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        English
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        Responsive Designs
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        Attracttive Designs
                    </span>
                    <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium  bg-[linear-gradient(95.74deg,_#0076CECE_-7.82%,_#9400D3CB_143.96%)] rounded  text-white m-1">
                        UI/UX
                    </span>
                </div>

            </div>

        </div>
    )
}
export default RightProfile;