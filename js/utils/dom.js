// Funzione che al caricamento della pagina verifichi che il titolo sia corretto e lo corregge (se fosse sbagliato)
export const fixTitle = () => {
      const title = document.getElementById("title");
      if(title.innerText === "Movie App"){
            return;
      } else {
            title.innerText = "Movie App";
      }
};

// Funzione che al caricamento della pagina aggiunnga un paragrafo con il titolo di un film
export const addParagraph = () => {
      const divText = document.getElementById("divText");
      const paragraph = document.createElement("p");
      paragraph.innerHTML = "Indiana Jones"; // Scrivi dentro i p
      divText.appendChild(paragraph);
}

export const film = () => {
      const trending = document.getElementById("trending");
      const paragraph = document.createElement("p");
      paragraph.innerHTML = "";
      trending.appendChild(paragraph);
}