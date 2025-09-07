document.addEventListener("scroll" , () => {
    const pic = document.getElementById("bgp");
    const rect = pic.getBoundingClientRect();
    const first = document.getElementById("1st");
    const last = document.getElementById("2nd");
    const icons = document.querySelectorAll("#left img, #right img");

    const distanceFromCenter = Math.abs(window.innerHeight / 2 - (rect.top + rect.height / 2));


    let scale = 1 + Math.max(0, (300 - distanceFromCenter) / 200);

    pic.style.transform = `scale(${scale})`;
    last.style.transform = `scale(${scale})`;
    icons.forEach(icon => {
        icon.style.transform = `scale(${(1/scale)**(0.5)})`;
    })
})



const text = "Welcome to My Portfolio!";
let i1 = 0; // counter for first animation
const speed = 150;

function animate() {
    if (i1 < text.length) {
        document.getElementById("1st").innerHTML += text.charAt(i1);
        i1++;
        setTimeout(animate, speed);
    }
}

window.onload = animate;

const txt = "I am a current\nComputer Science\nStudent\nfrom\nJadavpur University";
let i2 = 0;

function type(){
    if (i2 < txt.length) {
        let char = txt.charAt(i2) === "\n" ? "<br>" : txt.charAt(i2);
        document.getElementById("2nd").innerHTML += char;
        i2++;
        setTimeout(type, speed/2);
    }
}

let started = false;
const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            type();
        }
    });
},{threshold: 0.5});

obs.observe(document.getElementById("2nd"));

const pichover = document.getElementById("i");
const tar1 = document.getElementById("ch");
const tar2 = document.getElementById("tabbg");

pichover.addEventListener("mouseenter", (e) => {
    tar1.style.opacity = "1";
    tar2.style.opacity = "1";
    tar1.style.pointerEvents = "auto";

    pichover.style.transform = "scale(1.1)";
});

pichover.addEventListener("mouseleave", (e) => {
    tar2.style.opacity = "0";
    tar1.style.opacity = "0";
    tar1.style.pointerEvents = "none";

    pichover.style.transform = "scale(1)";
});
[tar1, tar2].forEach(el => {
    pichover.style.transform = "scale(1.1)";
    el.addEventListener("mouseenter", () => {
        tar1.style.opacity = "1";
        tar2.style.opacity = "1";
        tar1.style.pointerEvents = "auto";
        pichover.style.transform = "scale(1.1)";
    });
});

const mainPic = document.getElementById("i");
const listItems = document.querySelectorAll("#ch li");

listItems.forEach(li => {
    li.addEventListener("click", () => {
        const newSrc = li.getAttribute("data-src"); // get the path from data-src
        mainPic.src = newSrc; // update the main picture
    });
});

const tab = document.getElementById("tab");


listItems.forEach((li, index) => {
    li.addEventListener("click", () => {
        // Move tab based on index
        if (index === 0) {
            tab.style.transform = "translate(-288%, -50%)";
        } else if (index === 1) {
            tab.style.transform = "translate(-50%, -50%)";
        } else if (index === 2) {
            tab.style.transform = "translate(188%, -50%)";
        }
    });
});

