
import countries from "./app.js";

// Element
let UIEL = document.querySelector(".countries"); // class uchun

export function UpdateUI(arr) {
  UIEL.innerHTML = ""; // avval tozalash
  UIEL.innerHTML = "";      
  arr.forEach(item => {
    UIEL.innerHTML += `
      <li class="country">
        <img src="${item.flag || item.name}" alt="${item.name}"/>
        <div class="country__intro">
          <h4 class="name">${item.name}</h4>
          <p>Population: <span>${item.population}</span></p>
          <p>Region: <span class="region">${item.region}</span></p>
          <p>Capital: <span>${item.capital}</span></p>
        </div>
      </li>
    `;
  });
}

// Funksiyani chaqirish
UpdateUI(countries);



