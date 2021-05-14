// aduagam in pagina HTML elementul de sortare
mainPage.innerHTML += `
  <button id="sortByanAparitie">Sorteaza dupa an aparitie</button>
  <button id="sortByDate">Sorteaza dupa data adaugare</button>
  <button id="sortByRating">Sorteaza dupa rating</button>
  <button id="sortByName">Sorteaza dupa nume</button>
`;




// functia de sortare dupa anul de aparitie
function sortFilms1(sortType) {
  switch(sortType) {
  case "sortByanAparitie":
    const sortedArray = APP.getProducts().sort((elem1, elem2) => {
        if(elem1.year < elem2.year) {
          return -1;
        } else if (elem1.year > elem2.year) {
          return 1;
        } else {
          return 0;
        }
      });

      APP.addProducts(sortedArray);
      APP.renderProductList(sortedArray);
      break;
  }
}

const sortByanAparitie = document.querySelector('#sortByanAparitie');
sortByanAparitie.addEventListener('click', function() {
  sortFilms1('sortByanAparitie');
})




// sortare dupa data adaugare
function sortFilms3(sortType) {
  switch(sortType) {
  case "sortByDate":
    const sortedArray = APP.getProducts().sort(function(elem1, elem2){
      let c = new Date(elem1.dateAdd);
      let d = new Date(elem2.dateAdd);
      return c-d;
    });

      APP.addProducts(sortedArray);
      APP.renderProductList(sortedArray);
      break;
  }
}

const sortByDate = document.querySelector('#sortByDate');
sortByDate.addEventListener('click', function() {
  sortFilms3('sortByDate');
})




// functia de sortare dupa rating
function sortFilms2(sortType) {
  switch(sortType) {
  case "sortByRating":
    const sortedArray = APP.getProducts().sort((elem1, elem2) => {
        if(elem1.rating < elem2.rating) {
          return -1;
        } else if (elem1.rating > elem2.rating) {
          return 1;
        } else {
          return 0;
        }
      });

      APP.addProducts(sortedArray);
      APP.renderProductList(sortedArray);
      break;
  }
}

const sortByRating = document.querySelector('#sortByRating');
sortByRating.addEventListener('click', function() {
  sortFilms2('sortByRating');
})





 // sortare dupa nume ( functia merge, doar ca s-au nimerit filmele sa fie scrise in ordinea corecta :)) )
function sortFilms4(sortType) {
  switch(sortType) {
  case "sortByName":
    const sortedArray = APP.getProducts().sort((elem1, elem2) => {
        if(elem1.name < elem2.name) {
          return -1;
        } else if (elem1.name > elem2.name) {
          return 1;
        } else {
          return 0;
        }
      });

      APP.addProducts(sortedArray);
      APP.renderProductList(sortedArray);
      break;
  }
}

const sortByName = document.querySelector('#sortByName');
sortByName.addEventListener('click', function() {
  sortFilms4('sortByName');
})
