import React from 'react'

export default function ExpandedWorkBrief({ workBrief,setActiveTabs }) {
    return (
        <div className=' mb-5 space-y-3  px-6 py-4 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-xl'>
            <p dangerouslySetInnerHTML={{ __html: workBrief }} className='text-sm font-normal md:text-base'></p>
            <button onClick={() => setActiveTabs(1)}>Read Less...</button>
        </div>
    )
} 