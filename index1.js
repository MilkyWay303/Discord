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

    const array = [1, 3, "fdsjkfds", 2, { "color": "red" }, [], true]// elementów 7
    //                  [0, 1,  2,            3,  4,                      5, 6    ]
    // array.push({ color: "blue" });// dodawanie elementu do końca tablicy
    // console.log(array);
    // array.pop();// usuwanie ostatniego elementu z tablicy

    // console.log(array);
    
    // array.unshift(7) // dodawanie z przodu tablicy
    // console.log(array, "unshift");
    
    // array.shift() // usuwanie z przodu tablicy
    // console.log(array, "shift");
    
    for (let index = 0; index < 7; index++) {
        const element = array[index];

        // console.log(array[index]);
        console.log(typeof element, "typeof");
        if (typeof element == "string") {
            array.push({ color: "white" });
        }
        // .................. //index++ = index + 1
    }
})