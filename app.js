document.querySelector('#start').addEventListener('click', function (e) {
    navigator.getUserMedia({
        video: true,
        audio: true
    }, function (stream) {
		let p = new simplePeer ({
			initiator: true,
			stream: stream,
			config
		})
        let emitterVideo = document.querySelector('#emitter-video')
        emitterVideo.src = window.URL.createObjectURL(stream)
        emitterVideo.play()
    }, function () {})
})
