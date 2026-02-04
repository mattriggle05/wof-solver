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


function createWordLengthsInputs() { 
    var wordLengthInputsDiv = document.getElementById("solver-word-length-inputs")
    wordLengthInputsDiv.innerHTML = ""

    var numWordsDrowdownElement = document.getElementById("solver-num-words")
    if (numWordsDrowdownElement.disabled) return;

    for (let i = 0; i < numWordsDrowdownElement.value; i++) { 
        var inputElement = document.createElement("input");
        inputElement.type = "number"
        inputElement.id = "word-length-input-" + (i + 1)
        inputElement.classList.add("solver-input")
        inputElement.classList.add("solver-one-number-box")
        wordLengthInputsDiv.appendChild(inputElement);
    }
}




document.getElementById("solver-category-select").addEventListener('change', () => {
    repopulateNumWordsDropdown()
    createWordLengthsInputs()
});

document.getElementById("solver-num-words").addEventListener('change', () => {
    createWordLengthsInputs()
});




populateDropdown(document.getElementById("solver-category-select"), Object.keys(wordlists))
repopulateNumWordsDropdown()
createWordLengthsInputs()