const array1 = [ 
    ["at the airport", "в аэропорту"], 
    ["to arrive", "прибывать"], 
    ["arrival", "прибытие"],
    ["to depart", "отправляться"],
    ["departure", "отправление"],
    ["boarding", "посадка"],
    ["boarding card", "посадочный талон"],
    ["to announce", "объявлять"]
];
let wordPos = -1;
let wordTranslate = false;

function nextWord() {
    const card = document.getElementById("frontOut");
    const count = document.getElementById("counter");
    let str = '';
    
    if (wordPos < array1.length - 1) {
        wordPos++;
        card.innerHTML = array1[wordPos][0];
    }
    count.innerHTML = `${wordPos + 1} / ${array1.length}`;
}

function prevWord() {
    const card = document.getElementById("frontOut");
    const count = document.getElementById("counter");
    if (wordPos > 0) {
        wordPos--;
        card.innerHTML = array1[wordPos][0]; 
        count.innerHTML = `${wordPos + 1} / ${array1.length}`;
    }
    
}

function pressWord() {
    const card = document.getElementById("frontOut");
    
    if ( (wordPos < array1.length) && (wordPos >= 0) ) {
        if (!wordTranslate) {
            card.innerHTML = array1[wordPos][1];
            wordTranslate = true;
        } else {
            card.innerHTML = array1[wordPos][0];
            wordTranslate = false;
        }        
    }
}