let running = false;
document.addEventListener("click", function () {
    if (running) return;
    start();
    running = true;
});

async function start() {
    if (!data) return;

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let delay = item.text.length * 100 + 2000;
        item.stayTime = delay;
        item.transition = `transform ${delay/1000}s ease-in`;

        await showData(item);
        await sleep(item.stayTime);
        await hideData(item);
    }
}

async function hideData(item) {
    const videoContainerEl = document.getElementById("video-container");
    const textEl = document.getElementById("text");
    const imageEl = document.getElementById("image");
    videoContainerEl.classList.add('fade-out');
    await sleep(500);
}

async function showData(item) {
    const videoContainerEl = document.getElementById("video-container");
    const videoAreaEl = document.getElementById("video-area");
    const textAreaEl = document.getElementById("text-area");
    videoContainerEl.classList.remove('fade-out');

    if (item.textPosition === "left") {
        videoContainerEl.style.flexDirection = "row";
        textAreaEl.style.paddingRight = '20px';
        videoAreaEl.style.paddingLeft = '20px';
    } else if (item.textPosition === "right") {
        videoContainerEl.style.flexDirection = "row-reverse";
        textAreaEl.style.paddingLeft = '20px';
        videoAreaEl.style.paddingRight = '20px';
    }

    showText(item);
    showImage(item);
}

async function showText(item) {
    const textEl = document.getElementById("text");
    await typeText(textEl, item.text, 100);
}

async function showImage(item) {
    const imageEl = document.getElementById("image");
    imageEl.style.transition = 'unset';
    imageEl.style.transform = 'unset';
    await sleep(100);

    if (item.initialStyle) {
        let exisitingStyles = imageEl.getAttribute('style');
        imageEl.setAttribute('style', exisitingStyles + item.initialStyle);
        await sleep(100);
    }

    imageEl.src = item.url;
    imageEl.style.transition = item.transition;
    imageEl.style.transform = item.transform;
}

async function typeText(textEl, text, delay = 100) {
    for (let i = 0; i < text.length; i++) {
        textEl.innerText = text.substring(0, i + 1);
        await sleep(delay);
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}