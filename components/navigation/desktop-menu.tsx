import { faBars, faBell, faCog, faHome, faMapLocationDot, faPeopleGroup, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"

const DesktopMenu = () => {
    const route = useRouter()
    const [isOpen, setOpen] = useState<boolean>(false)
    const menuVariant = {
        opening: { width: '12rem', height: '20rem', borderRadius: ['100%', '75%', '50%', '25%', '2%'], display: 'block' },
        closing: { width: '3rem', height: '3rem', borderRadius: ['2%', '25%', '50%', '75%', '100'] },
        hide: { display: 'none', opacity: 0 },
        show: { display: 'grid', opacity: 1 }
    }
    return (
        <div className="hidden absolute top-4 left-4 z-40 lg:block">
            
            <motion.div variants={menuVariant} animate={isOpen ? 'opening' : 'closing'} className="bg-yellow-400 flex flex-col px-4 py-4 w-12 h-12 rounded-full">
                {
                    <FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto text-lg" icon={isOpen ? faXmark : faBars} />
                }
                <motion.div variants={menuVariant} animate={isOpen ? 'show' : 'hide'} className="mt-4 hidden grid-cols-1 gap-4">
                    <div onClick={()=>{route.push('/')}} className="flex text-gray-900 hover:text-gray-700 text-lg font-bold"><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faMapLocationDot} /></div><div>Home</div></div>
                    <div onClick={()=>{route.push('/contacts')}} className="flex text-gray-600 hover:text-gray-700 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faPeopleGroup} /></div><div>Contacts</div></div>
                    <div onClick={()=>{route.push('/notifications')}} className="flex text-gray-600 hover:text-gray-700 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faBell} /></div><div>Notification</div></div>
                    <div onClick={()=>{route.push('/settings')}} className="flex text-gray-600 hover:text-gray-700 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faCog} /></div><div>Setting</div></div>
                </motion.div>
            
              </motion.div>
        </div>)
}
export default DesktopMenu