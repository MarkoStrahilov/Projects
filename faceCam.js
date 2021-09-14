const video = document.querySelector('#video')


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true, sound: true })
        .then(stream => {
            video.srcObject = stream;
            video.play()
        }).catch(err => {
            console.log(`OOPS there was an error`, err)
        })
} else {
    console.log('ERROR THERE IS NO MEDIA OUTPUT ')
}