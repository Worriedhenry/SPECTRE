export default function Footer() {

    return(
        <div className=" md:px-20 px-8 py-10 overflow-hidden md:mt-auto    bg-[linear-gradient(95.74deg,_#0076CE_-7.82%,_#9400D3_143.96%)] divide-y  ">
            <ul className="flex md:space-x-14 cursor-not-allowed space-x-3 mb-8">
                <li>
                    <ul className="space-y-5">
                        <li><img className=" max-w-full max-h-full w-32 " src="/images/SPECTRE_LOGO_WHITE.webp"  /></li>
                        <li className="text-white md:max-w-[75%] text-[0.5rem] md:text-base">India's first platform dedicated to simplifying service search</li>
                    </ul>
                </li>
                <li>
                    <ul className="space-y-5">
                        <li className="font-bold text-white md:text-base text-[0.50rem]">COMPANY</li>
                        <li className="text-white md:text-base text-[0.5rem]">About</li>
                        <li className="text-white md:text-base text-[0.5rem]">Pricing</li>
                        <li className="text-white md:text-base text-[0.5rem]">Careers</li>
                    </ul>
                </li>
                <li>
                    <ul className="space-y-5">
                        <li className="font-bold md:text-base text-white text-[0.50rem]">SOLUTIONS</li>
                        <li className="text-white md:text-base text-[0.5rem]">Search</li>
                        <li className="text-white md:text-base text-[0.5rem]">Connect</li>
                        {/* <li className="text-white md:text-base text-[0.5rem]">Research</li>
                        <li className="text-white md:text-base text-[0.5rem]">Academy</li> */}
                    </ul>
                </li>
                <li>
                    <ul className="space-y-5">
                        <li className="font-bold md:text-base text-white text-[0.50rem]">RESOURCES</li>
                        <li className="text-white md:text-base text-[0.5rem]">Blogs</li>
                        <li className="text-white md:text-base text-[0.5rem]">Forms</li>
                    </ul>
                </li>
                <li>
                    <ul className="space-y-5">
                        <li className="font-bold md:text-base text-white text-[0.50rem]">SUPPORT</li>
                        <li className="text-white md:text-base text-[0.50rem]">Help</li>
                        <li className="text-white md:text-base text-[0.50rem]">Contact Us</li>
                    </ul>
                </li>
                <li>
                    <ul  className="space-y-5">
                        <li className="font-bold md:text-base text-white text-[0.50rem]">LEGAL</li>
                        <li className="text-white md:text-base text-[0.5rem]">Privacy</li>
                        <li className="text-white md:text-base text-[0.5rem]">Terms</li>
                        <li className="text-white md:text-base text-[0.5rem]">Accessiblity</li>
                    </ul>
                </li>
            </ul>
            <div className="mt-8 pt-8 flex items-center justify-between">
                <p className=" text-white flex text-[0.5rem] md:text-base">
                Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra
                </p>
                <ul className="flex items-center space-x-4 ">
                    <li><img src="/images/facebook.webp" /></li>
                    <li><img src="/images/Insta.webp" /></li>
                    <li><img src="/images/linkedin_logo.webp" /></li>
                    <li><img src="/images/Whatsapp.png" /></li>
                </ul>
            </div>
        </div>
    )
}
