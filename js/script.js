console.log("Hello from the other side!");

let themeChanger = document.querySelector(".js-themeChanger");
let container = document.querySelector(".container");
let sectionHeaders = document.querySelectorAll(".js-sectionHeader");
let dogFeeder = document.querySelector(".js-dogFeeder");
let bone = document.querySelector(".js-bone");
let doneCheckers = document.querySelectorAll(".js-doneChecker");

themeChanger.addEventListener("click", () => {
    container.classList.toggle("contaniner--dark");
    sectionHeaders.forEach(header => {
        header.classList.toggle("section__header--light");
    })
});

dogFeeder.addEventListener("click", () => {
    bone.classList.toggle("aside__image--hidden");
    if (dogFeeder.innerText === "Nakarm piesełka") {
        dogFeeder.innerText = "Omnomnomnom";
    } else {
        dogFeeder.innerText = "Nakarm piesełka";
    }
});

doneCheckers.forEach(checker => {
    checker.addEventListener("click", () => {
        switch (checker.innerText) {
            case ("✖"):
                checker.innerText = "✔";
                break;
            case ("✔"):
                checker.innerText = "✖";
        }
    })
});