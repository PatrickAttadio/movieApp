/**
 * createTrendingMovieList
 * 
 * la funzione prenderà in ingresso un array di movies per ogni movies aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo del movie
 * 
 * @param Array dei film
 * @returns 
 */
export const createTrendingList = (data, listID) => {
      // recupero il nodo con id trending-movies-list
      const list = document.getElementById(listID);
      // ciclo su ogni elemento dell'array che viene preso in ingresso come parametro
      data.forEach(element => {
            // creiamo un nuovo nodo che corrisponde a un tag <li>
            const listElement = document.createElement("li"); element
            // impostiamo il contenuto del tag li appena creato, assegnando il valore del title dell'elemento corrente in questa iterazione dell'array
            if(listID === "trending-movies-list"){
                  listElement.textContent = element.title;
            } else {
                  listElement.textContent = element.name; 
            }
            // appendiamo alla pagina hmtl il nuovo tag creato. Dove? sul tag recuperato
            list.appendChild(listElement);
      });
}

export const createCard = (data, cardId) => {
      const cardContainer = document.getElementById(cardId);
      data.forEach(element => {

            // DICHIARO I TAG
            const card = document.createElement("div");
            const cardImage = document.createElement("img");
            const textContainer = document.createElement("div");
            const cardTitle = document.createElement("h5"); 
            const cardDescription = document.createElement("p"); 
            const cardLink = document.createElement("a"); 
            const cardButton = document.createElement("button"); 
            
            // METTO LE CLASSI
            if(cardId == "trendingPeople"){
                  card.className="card_people";
            } else {
                  card.className="card col-12 col-sm-6 col-md-4";
            }
            textContainer.className="card-body";
            cardImage.className="cards-img-top";
            cardTitle.className="card-title";
            cardDescription.className="card-text text_truncate";
            cardButton.className="grow_skew_backward";
            
            // METTO GLI ATTRIBUTI
            if (cardId == "trendingMovies"){
                  cardImage.alt = element.title;
            }
            else {
                  cardImage.alt = element.name;
            }
            if(cardId == "trendingPeople") {
                  cardImage.src = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
                  cardLink.href = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
            } else {
                  cardImage.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
                  cardLink.href = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                  cardDescription.textContent = element.overview;
            }
            
            // METTO I CONTENUTI
            if (cardId == "trendingMovies"){
                  cardTitle.textContent = element.title;
            }
            else {
                  cardTitle.textContent = element.name;
            }
            cardButton.textContent = "See more";
      
            
            // APPENDO ALL'HTML
            textContainer.appendChild(cardTitle);
            textContainer.appendChild(cardDescription);
            card.appendChild(cardImage);
            card.appendChild(textContainer);
            cardLink.appendChild(cardButton);
            card.appendChild(cardLink);
            cardContainer.appendChild(card);
      });
}


export const createCarouselCard = (data, cardId) => {
      const cardContainer = document.getElementById(cardId);
      data.forEach(element => {

            // DICHIARO I TAG
            const carta = document.createElement("div");
            const cartaInner = document.createElement("div");
            const cartaFront = document.createElement("div");
            const cardImgTop = document.createElement("img");
            const cartaBack = document.createElement("div");
            const cartaBody = document.createElement("div");
            const cardTitle = document.createElement("h5");
            const cardText = document.createElement("p");
            const cardLink = document.createElement("a");
            const cardButton = document.createElement("button");
            
            // METTO LE CLASSI
            carta.className="carta";
            cartaInner.className="carta-inner";
            cartaFront.className="carta-face carta-front";
            cardImgTop.className="card-img-top";
            cartaBack.className="carta-face carta-back";
            cartaBody.className="card-body";
            cardTitle.className="p_tl_30p card-title";
            cardText.className="card-text text-truncate";
            cardLink.className="p_tl_30p";
            cardButton.className="grow_skew_backward";
            
            // METTO GLI ATTRIBUTI
            if (cardId == "trendingMovies"){
                  cardImgTop.alt = element.title;
            }
            else {
                  cardImgTop.alt = element.name;
            }
            if(cardId == "trendingPeople") {
                  cardImgTop.src = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
                  cardLink.href = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
            } else {
                  cardImgTop.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
                  cardLink.href = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                  cardText.textContent = element.overview;
            }
            
            // // METTO I CONTENUTI
            if (cardId == "trendingMovies"){
                  cardTitle.textContent = element.title;
            }
            else {
                  cardTitle.textContent = element.name;
            }
            cardButton.textContent = "See more";
            
            // APPENDO ALL'HTML
            cartaFront.appendChild(cardImgTop)
            cartaBody.appendChild(cardTitle);
            cartaBody.appendChild(cardText);
            cartaBack.appendChild(cartaBody);
            cartaBack.appendChild(cardLink);
            cardLink.appendChild(cardButton);
            cartaInner.appendChild(cartaFront)
            cartaInner.appendChild(cartaBack)
            carta.appendChild(cartaInner);
            cardContainer.appendChild(carta);
      });
}
