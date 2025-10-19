let running = false;
document.addEventListener("click", function() {
    if (running) return;
    start();
    running = true;
});


async function start() {
    const subtitleContainerEl = document.getElementById("subtitle-container");
    const subtitleEl = document.getElementById("subtitle");
    subtitleEl.innerText = subtitle.trim();

    movingSubtitle();
    startVideo();
}

async function movingSubtitle() {
    const subtitleEl = document.getElementById("subtitle");
    subtitleEl.style.transform = `translateX(1000px)`;
    await sleep(3000); // allow time for the browser to register the initial position

    subtitleEl.style.transition = `transform 720s linear`;
    subtitleEl.style.transform = `translateX(-${subtitleEl.clientWidth - 100}px)`;
}

async function startVideo() {
    const videoImageEl = document.getElementById("video-image");
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(25%)`;

    await sleep(120000);
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(-25%)`;
    await sleep(120000);

    videoImageEl.setAttribute("src", "./assets/2.jpg");
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(25%)`;

    await sleep(120000);
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(-25%)`;

    await sleep(120000);

    videoImageEl.setAttribute("src", "./assets/3.png");
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(25%)`;

    await sleep(120000);
    videoImageEl.style.transition = `transform 120s linear`;
    videoImageEl.style.transform = `scale(2) translateX(-25%)`;

    await sleep(150000);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}