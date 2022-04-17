import { faBars, faHamburger, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MainLayout from "../components/layout/main";
import PaddedLayout from "../components/layout/padded";
import CommuinityMap from "../components/map/commuinity";
import DesktopMenu from "../components/navigation/desktop-menu";
import MobileMenu from "../components/navigation/mobile-menu";



const HomePage = () => {
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

    const [isLoading, setLoading] = useState<boolean>(true)
    
    
    
    const variants = {
        loading: { opacity: ["100%", "0%", "100%", "0%", "100%"] },
        loaded: { width: ["100%", "75%", "50%", "25%", "0%"], opacity: ["100%", "75%", "50%", "25%", "0%"] }
    }

    return (

        <MainLayout>
            <AnimatePresence>
                {isLoading &&
                    (<motion.div key={'modal'} onClick={() => setLoading(!isLoading)} className="bg-yellow-400 flex flex-col h-screen z-50 w-0 absolute" initial={{ width: '100%', scale: 0 }} exit={variants.loaded} animate={{ width: "100%", scale: 1 }} >
                        <motion.div className=" mx-auto my-auto" exit={{ opacity: 0 }} ><div className="text-center font-bold text-2xl">CoDrect</div><div className="text-xs text-center">The collaborative live location  <p />social network for GenZ</div>
                            <div className="text-center mt-2 text-lg animate-bounce"><FontAwesomeIcon icon={faStreetView} /></div></motion.div>
                    </motion.div>)

                }
            </AnimatePresence>
            <DesktopMenu />
            <CommuinityMap latitude={cordinates?.coords.latitude} longitude={cordinates?.coords.longitude} />
            <MobileMenu />
        </MainLayout>
    )
}

export default HomePage;