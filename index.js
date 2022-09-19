let pizzas = [
	{
		id: 1,
		nombre: "Margarita",
		ingredientes: ["Queso Muzzarella", "Tomate", "Aceite de oliva", "albahaca"],
		precio: 1000,
		imagen: "pizzas/margarita.jpg",
	},
	{
		id: 2,
		nombre: "Cuatro Quesos",
		ingredientes: [
			"Queso Muzzarella",
			"Ricotta",
			"Gorgonzola",
			"Scamorza",
			"Tomate",
		],
		precio: 1300,
		imagen: "pizzas/cuatroquesos.jpg",
	},
	{
		id: 3,
		nombre: "Fugazzeta",
		ingredientes: ["Queso Muzzarella", "Cebolla", "Oregano", "Aceite de oliva"],
		precio: 1100,
		imagen: "pizzas/fugazzeta.jpg",
	},
	{
		id: 4,
		nombre: "Napolitana",
		ingredientes: [
			"Queso Muzzarella",
			"Tomate",
			"Oregano",
			"Tomate crudo",
			"Ajo",
		],
		precio: 100,
		imagen: "pizzas/napo.jpg",
	},
	{
		id: 5,
		nombre: "A caballo",
		ingredientes: ["Queso Muzzarella", "Tomate", "Huevo Frito", "Panceta"],
		precio: 1100,
		imagen: "pizzas/caballo.jpg",
	},
	{
		id: 6,
		nombre: "Solo muzza",
		ingredientes: ["Queso Muzzarella", "Tomate", "Oregano"],
		precio: 700,
		imagen: "pizzas/muzza.jpg",
	},
];

// ----------------------------------------------------------------------------------
// const impar = pizzas.filter(valorObjeto => valorObjeto.id % 2 !== 0);

// impar.forEach((elemento) => console.log(`Esta pizza tiene id impar: ${elemento.nombre}`));

// const menorPrecio = precio => precio.precio < 600;

// if (pizzas.some(menorPrecio)){
// console.log("Si hay pizzas por menos de $600");

// }else {
//     console.log("No hay pízzas en el menu por menos de $600");
// };

// pizzas.forEach(elemento => console.log(`Hay pizza de : ${elemento.nombre}`));

// pizzas.forEach(elemento => console.log(`Hay pizza al precio de $${elemento.precio}`));

// pizzas.forEach(elemento => console.log(`Hay pizzas de ${elemento.nombre} a $${elemento.precio}`));

let numberPizza = document.getElementById("numberPizza");

let searchButton = document.getElementById("searchButton");

let pizzaPrice = document.getElementById("pizzaPrice");

let pizzaName = document.getElementById("pizzaName");

let pizzaImg = document.getElementById("pizzaImg");

let containerIni = document.getElementsByClassName("img-container");

const mostrar = () => {
	const nro = +numberPizza.value.trim();
	const getObj = pizzas.find((pizza) => pizza.id === nro);
	console.log(getObj);
	if (getObj) {
		pizzaName.innerHTML = `<span> ${getObj.nombre} </span>
		<ul><li>Precio:${getObj.precio}<li>
		<li>Ingredientes: ${getObj.ingredientes}<li>`;

		pizzaImg.innerHTML = `<img src="${getObj.imagen}" alt="pizza">`;
	} else {
		pizzaName.innerHTML = `No tenemos pizza con ese id`;

		pizzaImg.innerHTML = `<img src="pizzas/error.jpg" alt="pizza">`;
	}

	resetear();
};

function resetear() {
	numberPizza.value = "";
}
searchButton.addEventListener("click", (e) => {
	e.preventDefault();
	mostrar();
});

localStorage.setItem("pizzas", JSON.stringify(pizzas));
