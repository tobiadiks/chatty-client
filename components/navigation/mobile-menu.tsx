import { faBars, faBell, faCog, faHome, faMapLocationDot, faPeopleGroup, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useState } from "react"

const MobileMenu = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const menuVariant = {
        opening: { width: '12rem', height: '20rem', borderRadius: ['100%', '75%', '50%', '25%', '2%'], display: 'block' },
        closing: { width: '3rem', height: '3rem', borderRadius: ['2%', '25%', '50%', '75%', '100'] },
        hide: { display: 'none', opacity: 0 },
        show: { display: 'grid', opacity: 1 }
    }
    return (
        <div className="lg:hidden block z-40 fixed transform  bottom-0 w-full">
 <motion.div  className="bg-white grid  px-4 py-4 shadow grid-cols-4 ">
                    <div className="flex flex-col text-yellow-400 hover:text-yellow-300 text-xs text-center font-bold"><div className=" text-2xl  "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto " icon={faMapLocationDot} /></div><div>Home</div></div>
                    <div className="flex flex-col text-gray-400 hover:text-yellow-300 text-xs text-center "><div className=" text-2xl "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faPeopleGroup} /></div><div>Contacts</div></div>
                    <div className="flex flex-col text-gray-400 hover:text-yellow-300 text-xs text-center "><div className=" text-2xl "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faBell} /></div><div>Notification</div></div>
                    <div className="flex flex-col  text-gray-400 hover:text-yellow-300 text-xs text-center"><div className=" text-2xl "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faCog} /></div><div>Setting</div></div>
                </motion.div>
        </div>
        )
    }

    export default MobileMenu