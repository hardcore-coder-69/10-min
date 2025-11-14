const audioEl = document.getElementById("audio");
audioEl.load();
audioEl.loop = true;

let running = false;
document.addEventListener("click", function () {
    if (running) return;
    audioEl.play();
    start();
    running = true;
});

const TYPING_DELAY = 70;
const TEXT_SHOW_TIME = 3000;
async function start() {
    if (!data) return;
    await sleep(2000);

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        if(item.text) {
            await showText(item);
        } else if(item.url) {
            await showImage(item);
        }

        // await showData(item);
        // await sleep(item.stayTime);
        // await hideData(item);
    }
}

async function hideData(item) {
    // const videoContainerEl = document.getElementById("video-container");
    const textEl = document.getElementById("text");
    const imageEl = document.getElementById("image");
    videoContainerEl.classList.add('fade-out');
    await sleep(300);
    imageEl.src = '';
}

async function showData(item) {
    // const videoContainerEl = document.getElementById("video-container");
    // const videoAreaEl = document.getElementById("video-area");
    // const textAreaEl = document.getElementById("text-area");
    // videoContainerEl.classList.remove('fade-out');

    // if (item.textPosition === "left") {
    //     videoContainerEl.style.flexDirection = "row";
    //     textAreaEl.style.paddingRight = '20px';
    //     videoAreaEl.style.paddingLeft = '20px';
    // } else if (item.textPosition === "right") {
    //     videoContainerEl.style.flexDirection = "row-reverse";
    //     textAreaEl.style.paddingLeft = '20px';
    //     videoAreaEl.style.paddingRight = '20px';
    // }

    // await showText(item);
    // await sleep(TEXT_SHOW_TIME);
    // await showImage(item);
}

async function showText(item) {
    const textAreaEl = document.getElementById("text-area");
    const textEl = document.getElementById("text");
    textAreaEl.style.display = 'flex';
    textEl.innerText = item.text;

    let stayTime = item.text.length * 110;

    textEl.classList.add('fade-in');
    await sleep(stayTime);
    textEl.classList.add('fade-out');
    await sleep(500);
    textAreaEl.style.display = 'none';
    textEl.classList.remove('fade-in');
    textEl.classList.remove('fade-out');
}

async function showImage(item) {
    const imageEl = document.getElementById("image");
    imageEl.style.transition = 'unset';
    imageEl.style.transform = 'unset';
    if(item.initialTransform) {
        imageEl.style.transform = item.initialTransform;
    }
    await sleep(100);
    
    imageEl.src = item.url;
    imageEl.style.transition = item.transition;
    imageEl.style.transform = item.transform;
    
    imageEl.style.opacity = 0;
    imageEl.classList.add('image-fade-in');
    await sleep(500);
    await sleep(item.stayTime - 500);
    imageEl.classList.add('image-fade-out');
    await sleep(500);
    imageEl.classList.remove('image-fade-in');
    imageEl.classList.remove('image-fade-out');
    imageEl.src = '';
}

async function typeText(textEl, text, delay) {
    for (let i = 0; i < text.length; i++) {
        textEl.innerText = text.substring(0, i + 1);
        await sleep(delay);
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}