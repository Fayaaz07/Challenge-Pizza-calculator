var pizzas = [
	{
		name: "Pizza Chicken Supreme",
		image: "img/supreme.png",
		price: 7.99
	},

	{
		name: "Pizza Shoarma",
		image: "img/shoarma.png",
		price: 8.99
	},

	{
		name: "Pizza Tonno",
		image: "img/tonno.png",
		price: 7.99
	},
	
	{
		name: "Pizza Margaritha",
		image: "img/margaritha.png",
		price: 5.99
	}	
]

function headerFunction() {
	var header1 = document.getElementById('header1'),
		header2 = document.getElementById('header2'),
		header3 = document.getElementById('header3'),
		header4 = document.getElementById('header4');

	header1.innerHTML = pizzas[0].name;
	header2.innerHTML = pizzas[1].name;
	header3.innerHTML = pizzas[2].name;
	header4.innerHTML = pizzas[3].name;
}
headerFunction();