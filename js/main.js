import { wordlists } from './wordlists.js'

function populateDropdown(dropdownElement, optionsList) { 
    dropdownElement.innerHTML = "";

    for (let optionValue of optionsList) {
        var optionElement = document.createElement("option");
        optionElement.textContent = optionValue;
        optionElement.value = optionValue;
        dropdownElement.appendChild(optionElement);
    }
}

function repopulateNumWordsDropdown() { 
    var numWordsDrowdownElement = document.getElementById("solver-num-words")
    var inputSelectedCategory = document.getElementById("solver-category-select").value
    
    if (inputSelectedCategory == "null") {
        numWordsDrowdownElement.disabled = true;
        populateDropdown(numWordsDrowdownElement, [0])
        return;
    }

    numWordsDrowdownElement.disabled = false;

    var uniqueWordLengths = {}

    for (let word of wordlists[inputSelectedCategory]) {
        uniqueWordLengths[word.split(" ").length] = true;
    }

    populateDropdown(numWordsDrowdownElement, Object.keys(uniqueWordLengths))

    //console.log(uniqueWordLengths)
}

for (let inputElement of document.getElementsByClassName("solver-input")) { 
    inputElement.addEventListener('change', () => {});
}

document.getElementById("solver-category-select").addEventListener('change', () => {
    repopulateNumWordsDropdown()
});

const categories = Object.keys(wordlists)
let select = document.getElementById("solver-category-select");
populateDropdown(select, categories)
repopulateNumWordsDropdown()