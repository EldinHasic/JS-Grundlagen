
function fullName(name, surname) { // Name and surname with space between
    let value = (name.concat(" ", surname));
    return value;
}

console.log(fullName("Eldin", "Hasic"));
// Task 1 done

function capitalizeLetters(capstr) { // Strings CAPSLOCK
    let value = (capstr.toUpperCase());
    return value;
}

console.log(capitalizeLetters("baNaNe"));
// Task 2 done

function countCharacters(digitcount) { // digit-count
    let value = (digitcount.length);
    return value;
}

console.log(countCharacters("banana"));
// Task 3 done


function formatToCurrency(num) { // number to currency converter with 2 decimal places
    let value = (num.toLocaleString("de-DE", {style:"currency", currency:"EUR"}));
    num = num.toFixed(2);
    return value;
}

console.log(formatToCurrency(33550336.345));
// Bonus Task done

let title = document.getElementById("website_title");
console.log(title.innerHTML);

let div = document.getElementById("test_div");
let btn = document.createElement("button");
btn.id = "button_test";
btn.textContent = "Klick mich";
div.appendChild(btn);


