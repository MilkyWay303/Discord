addEventListener("DOMContentLoaded", (event) => {
    const listaUl = document.querySelector("#lista");

    const array = [];
    for (let index = 1; index < 11; index++) {
        // listaUl.innerText = element;
        const element = `<li>${index}</li>`;
        array.push(element);
        listaUl.innerHTML = element;
        
    }

    let el = '';
    for (let i = 0; i < array.length; i++) {
        el = el + array[i];
    }
    listaUl.innerHTML = el;
    console.log(array);
})