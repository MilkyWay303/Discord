addEventListener("DOMContentLoaded", (event) => {
    const obrazek = document.querySelector("#img1");
    console.log(obrazek.src);

    const link = "./Images/Diskoła.svg";
    const link2 = "./Images/Diskoła2.svg";
    
    obrazek.addEventListener("mouseover", (event) => {
        obrazek.src = link;
    });
    obrazek.addEventListener("click", (event) => {
        obrazek.src = link2;
    });
})