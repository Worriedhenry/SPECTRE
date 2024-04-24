// create basix react component
import React from "react"
const Loading = () => {
    return (
        <div class="flex items-center  justify-center h-full">
    <div class="relative">
        <div class="h-16 w-16 rounded-full border-t-8 border-b-8 border-[#9400D3]"></div>
        <div class="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
    )
}

export default Loading;