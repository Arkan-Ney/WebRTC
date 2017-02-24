function bindEvents(p) {

		p.on('signal', function (data) {
			
		})

}

document.querySelector('#start').addEventListener('click', function (e) {
    navigator.getUserMedia({
        video: true,
        audio: true
    }, function (stream) {
		let p = new simplePeer ({
			initiator: true,
			stream: stream,
		// Config pour STUN & TURN	
		// config
	})
		bindEvents(p)
        let emitterVideo = document.querySelector('#emitter-video')
		emitterVideo.volume = 0
        emitterVideo.src = window.URL.createObjectURL(stream)
        emitterVideo.play()
    }, function () {})
})
