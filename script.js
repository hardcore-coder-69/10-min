let running = false;
document.addEventListener("click", function() {
    if (running) return;
    start();
    running = true;
});

async function start() {
    if(!data) return;

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        
    }
}

async function showText() {
    const subtitleEl = document.getElementById("subtitle");
    
}

async function showImage() {
    const videoImageEl = document.getElementById("video-image");
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(25%)`;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}