const MainLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-gray-100 h-screen overflow-y-hidden md:min-h-screen">
            {props.children}
        </div>
    )
}
export default MainLayout