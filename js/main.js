import { wordlists } from './wordlists.js'

function populateDropdown(dropdownElement, optionsList) { 
    for (let optionValue of optionsList) {
        var optionElement = document.createElement("option");
        optionElement.textContent = optionValue;
        optionElement.value = optionValue;
        dropdownElement.appendChild(optionElement);
    }
}

function recalculatePossibleWords() {
    var numSolutions = -1

    var inputSelectedCategory = document.getElementById("solver-category-select").value
    if (inputSelectedCategory == "null") return

    var inputSelectedWordlist = wordlists[inputSelectedCategory]
    numSolutions = inputSelectedWordlist.length
    console.log("Category: " + numSolutions)
}

function repopulateNumWordsDropdown() { 
    var inputSelectedCategory = document.getElementById("solver-category-select").value
    if (inputSelectedCategory == "null") return

    
}


for (let inputElement of document.getElementsByClassName("solver-input")) { 
    inputElement.addEventListener('change', () => {
        recalculatePossibleWords();
    });
}

document.getElementsById("solver-category-select").addEventListener('change', () => {
        recalculatePossibleWords();
    });

const categories = Object.keys(wordlists)
let select = document.getElementById("solver-category-select");
populateDropdown(select, categories)
recalculatePossibleWords()