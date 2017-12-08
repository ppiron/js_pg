const day = new Date(2017, 12, 25);
const seconds = document.querySelector('#seconds')
let toPass = Math.ceil((day - Date.now()) / 1000).toString()
seconds.value = toPass
let timeID
const countSeconds = (dayTo) => {
    timeID = setInterval(() => {
        toPass = Math.ceil((Date.parse(dayTo) - Date.now()) / 1000).toString()
        seconds.value = toPass
        console.log(toPass)
        // if (elapsed < 0) {
        //     console.log('Boom')
        //     clearInterval(timeID)
        // }
    }, 1000)
    
}

countSeconds(day)

