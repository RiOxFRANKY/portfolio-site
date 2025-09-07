document.addEventListener("scroll" , () => {
    const pic = document.getElementById("bgp");
    const rect = pic.getBoundingClientRect();

    const distanceFromCenter = Math.abs(window.innerHeight / 2 - (rect.top + rect.height / 2));


    let scale = 1 + Math.max(0, (300 - distanceFromCenter) / 200);

    pic.style.transform = `scale(${scale})`;
})
