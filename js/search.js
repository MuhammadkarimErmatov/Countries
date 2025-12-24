
import countries from "./app.js";
import {UpdateUI} from "./uptdateUI.js";

let InputEL = document.querySelector("input");
let SelectEL = document.querySelector("#region");

InputEL.addEventListener("input", (e) => {
  console.log(e.target.value);
  let inputValue = e.target.value.trim();
  
  let filterArr = countries.filter(item => {
    let matchName = item.name.toLowerCase().includes(inputValue.toLowerCase());
    let matchCapital = item.capital && item.capital.toLowerCase().includes(inputValue.toLowerCase());
    return matchName || matchCapital; 
  });
  
  UpdateUI(filterArr);
});

SelectEL.addEventListener("change", (e) => {
  let result = e.target.value;

  let filterArr = countries.filter(
    (item) => item.region.toLowerCase() == result.toLowerCase()
  );
  UpdateUI(filterArr);
});
