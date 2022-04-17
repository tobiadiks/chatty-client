const ContactCardComponent = (props:{
    onclick?:any
}) => {
    return (
        <div onClick={props.onclick} className="px-4 py-4 grid grid-cols-4 w-full bg-gray-900 hover:bg-gray-800"><div className="w-12 h-12 rounded-full bg-yellow-100"></div><div className="my-auto col-span-2">
            <div className="font-bold text-white">Adeleke Gbenga</div>
            <div className="text-xs text-yellow-400">32 Fransisco Street,Bacor.</div></div>
            <div className="bg-yellow-400  w-4 h-4 mx-auto my-auto rounded-full "></div>
        </div>
    )
}

export default ContactCardComponent