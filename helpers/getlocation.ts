const getLocation = () => {
    try {
        if (navigator.geolocation) {
            const geo = navigator.geolocation
            const location = geo.getCurrentPosition((position) => console.log(position))
            return location;
        }
        else {
            alert('No Location Driver')
        }
    } catch (err) {
        alert(err)
    }
}

export default getLocation