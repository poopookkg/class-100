var speechrecognition = window.webkitSpeechRecognition;

var recognition = new speechrecognition();

function start(){
    document.getElementById("textbutt").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    butt = event.results[0][0].transcript;
    document.getElementById("textbutt").value = butt;
    if(butt == "don't take selfie"){
        console.log("don't take selfie --");
        speak();
    }

}
function speak(){
    Webcam.attach('#dbutt1');

    var synth = window.speechSynthesis;

    butt_data = "stalking and taking ur pic in 5 secs 5 4 3 2 1";

    data_butt = new SpeechSynthesisUtterance(butt_data);

    synth.speak(data_butt);

    setTimeout(function(){
        five_fifty_eight();
        save();
    },8000)
}
Webcam.set({
    width : 380,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 100
});
function five_fifty_eight(){
    Webcam.snap(function(data_uri){
        document.getElementById("dbutt2").innerHTML = '<img id = "imgbutt2" src = "' + data_uri + '">';
    });
}
function save(){
    link = document.getElementById("abutt");
    img = document.getElementById("imgbutt2").src;
    link.href = img;
    link.click();
}