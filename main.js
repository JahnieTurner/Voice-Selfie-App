var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function Start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function run(event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content
    if (content == "take my selfie") {
        Speak()
    }

}
function Speak() {
    synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis);
    setTimeout(function(){
        take_snapshot()
    },5000);
}

Webcam.set({
    width: 335,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 100
});

camera = document.getElementById("#camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (image) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + image + '">';
    })
}

function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
    link.href=image
    link.click()
}