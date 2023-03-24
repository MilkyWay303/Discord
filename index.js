// tu piszemy skrypty do interktywności
addEventListener("DOMContentLoaded", (event) => {
	console.log("witamy");
	const h1 = document.querySelector(".Napis1");
	console.log(h1); // [pbranie całego elementu html]
	let textH1 = h1.innerText;
	console.log(textH1); // [pbranie całego elementu html]
	textH1 = "Nowy discord";
	h1.innerText = textH1;

	let i = 0;
	// addEventListener("mousemove", (event) => {
	//     console.log(i)
	//     i = i + 1;
	// })
	// index++ => index = index +1
	for (let index = 1; index < 11; index++) {
		// const element = array[index];
		console.log(index);
		setTimeout(() => {
			h1.innerText = index;
		}, 1000 * index);
	}
	// 1
	// 1
	// 2
	// 3
	// 4
	// 5
	// 6
	// 7
	// 8
	// 9
	// 10
});
