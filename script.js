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

var topping = [
	{
		name: "augurk",
		price: 0.50
	},

	{
		name: "Pulled beef",
		price: 1.50
	},

	{
		name: "Burger saus",
		price: 0.50
	},

	{
		name: "Gorgonzola",
		price: 1.00
	}
]

function toppingFunction() {
	var topping1 = document.getElementById('topping1'),
		topping2 = document.getElementById('topping2'),
		topping3 = document.getElementById('topping3'),
		topping4 = document.getElementById('topping4');

	topping1.innerHTML = topping[0].name;
	topping2.innerHTML = topping[1].name;
	topping3.innerHTML = topping[2].name;
	topping4.innerHTML = topping[3].name;
}
toppingFunction();