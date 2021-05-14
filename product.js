class Product {
	// un film este creat cu o clasa cu urmtorul constructor:
	constructor(name, description, year, rating, dateAdd, image) {
		this.name = name;
		this.description = description;
		this.year = year;
		this.rating = rating;
		this.dateAdd = dateAdd;
		this.image = image;

	}
	// metoda renderProduct adauga filme in interiorul listei de filme
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
			<div class="product">
				<p>Nume: ${this.name}</p>
				<p>Descriere: ${this.description}</p>
				<p>An: ${this.year}</p>
				<p>Rating: ${this.rating}</p>
				<p>Data adaugare: ${this.dateAdd}</p>
				<img src="${this.image}" alt="logo" style="width:100px">

			</div>
		`;
	}
}
