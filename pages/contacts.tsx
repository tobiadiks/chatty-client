import { useEffect, useState } from "react"
import ContactCardComponent from "../components/card/contact.card"
import MainLayout from "../components/layout/main"
import CommuinityMap from "../components/map/commuinity"
import DesktopMenu from "../components/navigation/desktop-menu"
import MobileMenu from "../components/navigation/mobile-menu"

const ContactPage=()=>{
    const [cordinates, setCordinates] = useState<GeolocationPosition>()
    useEffect(() => {
   
        if (navigator.geolocation) {
            const geo = navigator.geolocation
            geo.watchPosition((position) =>{setCordinates(position)},(err)=>console.log(err),{timeout:60*60*3000,enableHighAccuracy:true})
        }
        else {
            alert('No Location Driver')
        }
},[cordinates])
    return(
        <MainLayout>
            <DesktopMenu/>
            <div className="flex w-full">
            <div className="h-full w-full lg:w-1/3">
                <div className="py-6 px-4 text-lg text-center text-white bg-gray-900 font-bold fixed shadow   top-0 w-full lg:w-1/3">Your Contacts</div>
            <div>
            <div className=" divide-y divide-yellow-400 h-screen py-20    overflow-y-auto">
                <ContactCardComponent />
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
            </div>
            </div>
            </div>
            <div className="hidden lg:block w-0 lg:w-2/3">
            <CommuinityMap latitude={cordinates?.coords.latitude} longitude={cordinates?.coords.longitude} />
            </div>
         <MobileMenu/> 
         </div>
        </MainLayout>
    )
}

export default ContactPage