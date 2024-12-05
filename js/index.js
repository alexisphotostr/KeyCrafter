window.onload = function() {
    var video = document.getElementById('video-background');
    if (video) {
        video.playbackRate = 0.7;
    }
};
const text = "KeyCrafter";
        const typingElement = document.getElementById("typing");
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150); 
            } else {
                setInterval(() => {
                    typingElement.style.borderRight =
                        typingElement.style.borderRight === "2px solid #4F44B1" ? "none" : "2px solid #4F44B1";
                }, 500);
            }
        }

        document.addEventListener("DOMContentLoaded", typeEffect);