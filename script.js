const countSeconds = () => {
    const day = new Date(2017, 12, 25);
    const stop = Date.now()
    const text = document.querySelector('input')
    let toPass = Math.ceil((day - stop) / 1000).toString()
    text.value = toPass
    const timeID = setInterval(() => {
        toPass = Math.ceil((day - Date.now()) / 1000).toString()
        text.value = toPass
        console.log(toPass)
        // if (elapsed < 0) {
        //     console.log('Boom')
        //     clearInterval(timeID)
        // }
    }, 1000)
    
}

countSeconds()

