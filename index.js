window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
//cream un vector de filme numit products
APP.products = [
	{
		// despre filme
		name: 'Contratimp',
		description: 'thriller',
		image: "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR3,0,182,268_AL_.jpg",
		year : 2019,
		rating: 10,
		dateAdd: "2019-05-18"
	},
	{
		name: 'Gone girl',
		description: 'thriller',
		image: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
		year : 2014,
		rating: 9,
		dateAdd: "2015-05-01"
	},
	{
		name: 'Mirage',
		description: 'action',
		image: "https://upload.wikimedia.org/wikipedia/en/7/73/Mirage_%282018%29_Film_Poster.jpg",
		year : 2016,
		rating: 8,
		dateAdd: "2016-10-28"
	}
];
// sa nu se mai piarda datele la refresh, folosim lacalStorage


// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
APP.addProducts = (products) => {
	localStorage.setItem("products", JSON.stringify(products));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam
APP.getProducts = () => {
	const products = localStorage.getItem("products");
	return JSON.parse(products);
};

// introducem vectorul de produse in localStorage, daca nu avem nimic in baza de date
if (APP.getProducts() === null){
	APP.addProducts(APP.products);
}


function startRendering() {
	// "randam" lista de produs
	APP.renderProductList(APP.getProducts());
}
window.addEventListener('load', startRendering);
