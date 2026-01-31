import { wordlists } from './wordlists.js'

function populateDropdown(dropdownElement, optionsList) { 
    let optionValue
    for (optionValue of optionsList) {
        var optionElement = document.createElement("option");
        optionElement.textContent = optionValue;
        optionElement.value = optionValue;
        dropdownElement.appendChild(optionElement);
    }
}

const categories = Object.keys(wordlists)
let select = document.getElementById("solver-category-select");
populateDropdown(select, categories)


