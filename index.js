document.addEventListener("keydown", function (event) {
    var key = event.key;
    buttonAnimation(key);
    var audio = new Audio(getAudioUrlByKey(key));
    audio.play();
});

document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click", function (event) {
        var key = event.currentTarget.innerText;
        buttonAnimation(key);
        var audio = new Audio(getAudioUrlByKey(key));
        audio.play();
    });
});

function getAudioUrlByKey(key) {
    var audioUrl;
    
    switch (key) {
        case "w":
            audioUrl = "sounds/crash.mp3";
            break;
        case "a":
            audioUrl = "sounds/tom-1.mp3";
            break;
        case "s":
            audioUrl = "sounds/tom-3.mp3";
            break;
        case "d":
            audioUrl = "sounds/snare.mp3";
            break;
        case "j":
            audioUrl = "sounds/tom-4.mp3";
            break;
        case "k":
            audioUrl = "sounds/tom-2.mp3";
            break;
        case "l":
            audioUrl = "sounds/kick-bass.mp3";
            break;
    }

    return audioUrl;
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}