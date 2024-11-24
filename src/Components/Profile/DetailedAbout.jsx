import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { TbAlarmAverage } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa6";
import {useSelector} from 'react-redux'
import { FaMedal } from "react-icons/fa";
import Loading from '../Loading';
const DetailedAbout = ({data}) => {

  if(!data){
    return (
      <Loading/>
    )
  }

  return (
    <div>
      <div>
        <table class='min-w-full text-center text-sm font-light'>
          <thead class='font-medium'>
            <tr className='space-x-2'>
              <th
                scope='col'
                class=' md:py-3 max-w-[33%]  space-x-3 py-1 text-left w-[1/3]   font-bold text-xs md:text-sm'
              >
                <div className='flex space-x-3'><span className='inline '>FROM</span> <span className='hidden md:inline'><FaLocationDot /></span> </div>
              </th>
              <th
                scope='col' 
                class=' space-x-3 py-1 text-left md:py-4  font-bold text-xs md:text-sm'
              >
                <div className='flex space-x-3'><span className='inline '>PARTNER SINCE</span> <span className='hidden md:inline'><FaPeopleArrows /></span> 
       </div>           
              </th>
              <th
                scope='col'
                class=' space-x-3 text-left py-1 md:pb-4   font-bold text-xs md:text-sm'
              >
                <div className='flex space-x-3'><span className='inline'>AVERAGE RESPONSE TIME</span> <span className='hidden md:inline'><TbAlarmAverage /></span> </div> 
                 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='space-x-2'>
              <td class=' max-w-[90%]  line-clamp-3 text-sm md:text-base text-slate-700 text-left py-4 font-medium flex '>
              {data?.user?.location[1]},{data?.user?.location[2]},{data?.user?.location[3]}
              </td>
              <td class='whitespace-nowrap w-1/3 text-sm text-slate-700 md:text-base py-4 text-left font-medium'>
                {data.createdAtMonth}/{data.createdAtYear}
              </td>
              <td class='whitespace-nowrap text-sm md:text-base text-slate-700  py-4 text-left font-medium'>
                {data?.user?.avgResponseTime}
              </td>
            </tr>
          </tbody>
        </table>
        <form>
          </form>  
      </div>
      <div className='my-5 space-y-3'>
        <p className='text-xs font-bold md:text-sm'>ABOUT</p>
        <p className='text-sm md:text-base text-slate-700'>
          {data.user.about}
        </p>
      </div>
      <div className='space-y-2'>
        <p className='text-lg font-medium'>Education</p>
        {data.user.education?.length>0 && data.user.education.map((edu)=>(
          <div className='flex justify-between px-6 py-2 border-2 border-slate-200'>
          <div>
            <p className='font-semibold'>{edu.degree}</p>
            <p className='text-sm font-medium text-slate-600'>
              {edu.university}
            </p>
            <p className='text-sm font-medium text-slate-600'>{ edu.instiituteLocation
 }</p>
          </div>
          <div>
            <p className='font-medium'>{edu.startYear}-{edu.endYear}</p>
            <p className='text-sm font-medium text-slate-600'>{edu.grades}</p>
          </div>
        </div>
          
        ))  }
        {!data.user.education?.length && <p className='text-sm font-medium text-slate-600'>No Education Added</p>}
        </div>
        <div className='space-y-2'>
          <p className='text-lg font-medium'>Achievments</p>
          {data.user.achievements?.length>0 && data.user.achievements.map((achievment)=>(
            <div className='flex items-center justify-between px-6 py-2 border-2 border-slate-200'>
            <div className='w-4/5'>
                <p className='flex items-center font-semibold'><FaMedal/>{achievment.achievmentTitle} </p>
                <p className='text-sm font-medium text-slate-600'>
                    {achievment.achievmentDesc
}
                </p>
            </div>
            <div>
                <p className='font-medium'>{achievment.achievmentStartYear}-{achievment.achievmentEndYear}</p>
                
            </div>
 
        </div>
          ))}
          
          {!data.user.achievements?.length && <p className='text-sm font-medium text-slate-600'>No Achievments Added</p>}
          
        </div>
      {/* <div className="flex space-x-3">
                <div className="w-[50%] s  md:space-y-3">
                    <p className="text-[#999999] font-bold text-xs md:text-sm">SERVICES I OFFER</p>
                    <ul className="text-sm list-disc md:px-10 md:text-base">
                        {services?.map((e) =>
                            <li>
                                {e}
                            </li>
                        )}

                    </ul>
                </div>
  
                <div className="space-y-3">
                    <p className="text-[#999999]  font-bold text-xs md:text-sm">Connect With me</p>
                    <ul className="text-sm list-disc md:px-10 md:text-base">
                        <li><a href="https://www.w3schools.com" target="_blank">Instagram</a></li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div> */}
    </div>
  )
}

export default DetailedAbout
