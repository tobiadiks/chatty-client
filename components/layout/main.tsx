const MainLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-gray-900 h-screen overflow-y-hidden lg:min-h-screen">
            {props.children}
        </div>
    )
}
export default MainLayout