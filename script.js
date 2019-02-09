//Fayaaz Hoesseinbaks
//Pizza calculator


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
	for (var i = 0; i < pizzas.length; i++) {
		pizzas[i]
	}
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

function imageFunction() {
	var img1 = document.getElementById('img1'),
		img2 = document.getElementById('img2'),
		img3 = document.getElementById('img3'),
		img4 = document.getElementById('img4');

	img1.innerHTML = img[0].name;
	img2.innerHTML = img[1].name;
	img3.innerHTML = img[2].name;
	img4.innerHTML = img[3].name;
}
imageFunction();