import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const ServiceReview = ({ serviceId }) => {
    const [menu, setMenu] = useState(true);
    const [menu1, setMenu1] = useState(false);
    const [data,setData]=useState([])
    const reviewRef = useRef()
    // const data = [{
    //     reviewTitle: "Beautiful addition to the theme",
    //     review: "I am extremely satisfied with the work. The design is beautiful and the functionality is very smooth. I would definitely recommend it to others.",
    //     name: "Anna Kendrick",
    //     date: "03/06/2022"
    // }]
    const { username, profilePic } = useSelector(state => state.auth)

    useEffect(() => {
        // New interation observer api
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    getReview()
                    // console.log("visible")
                    // reviewRef.current = null
                    observer.unobserve(reviewRef.current)
                } else {
                    setMenu(false)
                }
            })
        }, { threshold: 0.1 })
        observer.observe(reviewRef.current)
    }, [])

    const getReview = async () => {
        const res = await axios.get(`http://localhost:3001/reviews/${serviceId}/1`)
        if (res.status === 200) {
            setData(res.data)
        }
    }

    return (
        <div ref={reviewRef} className="flex flex-col items-center justify-center mx-6 my-10 space-x-10 space-y-8 bg-white md:mx-10 md:flex-row border-red">
            <div className="flex flex-col items-start justify-start w-full space-y-8">
                <div className="flex items-start justify-start">
                    <p className="text-xl font-semibold leading-7 md:text-3xl lg:text-4xl lg:leading-9 ">Reviews</p>
                </div>
                {/* <form className="w-full">
                    <div className="w-full">
                        <div className="w-full space-y-2">
                            <label for="password" class="block pb-0 text-sm md:text-xl font-medium text-gray-900 mb-0">Share Your Experience with Micheal Jackson</label>
                            <label for="password" class="block pb-0 text-sm md:text-base font-medium text-gray-900 mb-0">Title</label>
                            <input required type="text" name="about" id="password" placeholder="I would like to ...." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "></input>
                            <label for="password" class="block pb-0 text-sm md:text-base font-medium text-gray-900 mb-0">Description </label>
                            <textarea required type="text" rows={5} name="about" id="password" placeholder="I would like to ...." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "  />
                        </div>
                        <button type="button" onClick={() => navigate("/login")} class="text-[#0076CE] bg-white hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-1 md:text-base text-xs md:px-3 md:py-1.5  md:mr-2 my-2 hover:bg-[#0076CE] border-[#0076CE] border-2">Add</button>
                    </div>
                </form> */}
                {data && data.map(review => <div className="w-full">
                    
                    <div className="flex flex-col items-start justify-start w-full p-2 bg-gray-50 md:p-8">
                        <div className="flex flex-col justify-between w-full md:flex-row">
                            <div className="flex flex-row items-start justify-between">
                                <p className="text-sm font-medium leading-normal text-gray-800 md:text-base">{review.reviewTitle}</p>
                                
                            </div>
                            <div className="mt-2 cursor-pointer md:mt-0">

                            </div>
                        </div>
                        <div >
                            <p className="w-full mt-1 text-xs leading-normal text-gray-600 md:mt-3 md:text-sm md:w-9/12 xl:w-5/6">{review.reviewDescription}</p>
                            {/*  */}
                            <div className="mt-4 md:mt-6 flex justify-start items-center flex-row space-x-2.5">
                                <div>
                                    <img src={review?.userId?.profilePic} className="w-14 rounded-full" alt="girl-avatar" />
                                </div>
                                <div className="flex flex-col items-start justify-start space-y-2">
                                    <p className="text-xs font-medium leading-none text-gray-800 md:text-base">{review?.userId?.username}</p>
                                    <p className="text-xs leading-none text-gray-600 md:text-sm">{review?.createdAt?.substr(0, 10)}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>)}
                {!data.length && <div className="flex flex-col items-start justify-start w-full p-2 bg-gray-50 md:p-8">
                    No review available
                </div>}
            </div>
        </div>
    );
};

export default ServiceReview;
