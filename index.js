

var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elButton = elForm.querySelector(".button");
var result = document.querySelector(".result");

elForm.addEventListener("submit", function (evt) {

    evt.preventDefault();

    var input = Number(elInput.value.trim());

    input % 5 === 0 && input % 3 === 0 ? result.textContent = "FizzBuzz"
        : input % 5 === 0 ? result.textContent = "Buzz"
            : input % 3 === 0 ? result.textContent = "Fizz"
                : result.textContent = input;

    elInput.value = null;
});