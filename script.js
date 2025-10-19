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
    startSubtitle();
}

async function startSubtitle() {
    const subtitleEl = document.getElementById("subtitle");
    subtitleEl.style.transform = `translateX(1000px)`;
    await sleep(3000); // allow time for the browser to register the initial position

    subtitleEl.style.transition = `transform 720s linear`;
    subtitleEl.style.transform = `translateX(-${subtitleEl.clientWidth - 100}px)`;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}