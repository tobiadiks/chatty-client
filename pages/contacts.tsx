import MainLayout from "../components/layout/main"
import CommuinityMap from "../components/map/commuinity"
import DesktopMenu from "../components/navigation/desktop-menu"
import MobileMenu from "../components/navigation/mobile-menu"

const ContactPage=()=>{
    return(
        <MainLayout>
            <DesktopMenu/>
            <div className="flex w-full">
            <div className="h-full w-full lg:w-1/3">
                <div className="py-6 px-4 text-lg text-center bg-white font-bold fixed shadow   top-0 w-full lg:w-1/3">Your Contacts</div>
            <div>
            <div className=" divide-y h-screen py-20 divide-gray-200  overflow-y-auto">
                <div className="px-2 py-2 grid grid-cols-4 w-full"><div className="w-16 h-16 rounded-full bg-yellow-100"></div><div className="my-auto col-span-2">
                    <div className="font-bold">Adeleke Gbenga</div>
                    <div  className="text-xs">32 Fransisco Street,Bacor.</div></div>
                    
                    <div className="bg-gray-400  w-4 h-4 mx-auto my-auto rounded-full "></div>
                    
                    
                    </div>
                    <div className="px-2 py-2 grid grid-cols-4 w-full"><div className="w-16 h-16 rounded-full bg-yellow-100"></div><div className="my-auto col-span-2">
                    <div className="font-bold">Adeleke Gbenga</div>
                    <div  className="text-xs">32 Fransisco Street,Bacor.</div></div>
                    
                    <div className="bg-yellow-400  w-4 h-4 mx-auto my-auto rounded-full "></div>
                    
                    
                    </div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-100"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-100"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
                <div className="px-2 py-2"><div className="w-16 h-16 rounded-full bg-yellow-200"></div></div>
            </div>
            </div>
            </div>
            <div className="hidden lg:block w-0 lg:w-2/3">
                <CommuinityMap/>
            </div>
         <MobileMenu/> 
         </div>
        </MainLayout>
    )
}

export default ContactPage