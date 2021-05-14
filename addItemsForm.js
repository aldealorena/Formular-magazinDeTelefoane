// aduagam in HTML formularul de adaugare film
mainPage.innerHTML += `
  <form id="addFilms">
    Nume: <input type="text" name="filmName">
    Descriere: <input type="text" name="filmDescription">
    An: <input type="text" name="filmYear">
    Rating: <input type="number" name="filmRating">
    Data adaugare: <input type="text" name="filmDate">
    <input type="submit" value="Adauga film!">
  </form>
`;



// n-am stiut cum sa adaug poza !! (adica mi s-a parut ciudat, cand adaugam film, cum adaugam poza)
//nu imi mergea si am sters


function addFormFunctionality() {
  // adaugarea produsului = film
  function addProduct(nameF, descriptionF, yearF, ratingF, dateAddF) {
    // preluam produsele din localStorage
    const products = APP.getProducts();
    // modificarea vectorului de produse
    products.push({
      name: nameF,
      description: descriptionF,
      year: yearF,
      rating: ratingF,
      dateAdd: dateAddF
    });
    // adaugam vectorul in localStorage
    APP.addProducts(products);

    // reafisam
    APP.renderProductList(products);
  }

  const form = document.querySelector('#addFilms');
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();
    const name = event.target.filmName.value;
    const description = event.target.filmDescription.value;
    const year = event.target.filmYear.value;
    const rating = Number(event.target.filmRating.value);
    const dateAdd = event.target.filmDate.value;
    // apelam functia de adaugare
    addProduct(name, description, year, rating, dateAdd);
  }
}


window.addEventListener('load', addFormFunctionality);
