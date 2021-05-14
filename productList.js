// adaugam lista de produse in html
mainPage.innerHTML += `
	<h2>Filme ce merita a fi vazute:</h2>
	<div id="product-list">
	</div>
`;

APP.renderProductList = (productArray) => {
	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';

	productArray.forEach( (elem) => {
		// creare 
		product = new Product(elem.name, elem.description, elem.year, elem.rating, elem.dateAdd, elem.image);
		// afisare
		product.renderProduct();
	});
}
