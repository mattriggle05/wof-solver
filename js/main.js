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

let out = {}
for (let cat of categories) { 
    for (let word of wordlists[cat]) { 
        if (!word.match(/\s/g)) continue;
            
        let len = word.match(/\s/g).length + 1

        if (len > 4) { 
            if (!out[len]) out[len] = []

            out[len].push(word)
        }
    }
}
console.log(out)